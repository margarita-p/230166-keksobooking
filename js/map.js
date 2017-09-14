'use strict';

(function () {

  var MIN_PRICE = 10000;
  var MAX_PRICE = 50000;

  var pins = [];
  var filtredPins = [];
  var filters = document.querySelector('.tokyo__filters');
  var typeHousing = filters.querySelector('#housing_type');
  var priceHousing = filters.querySelector('#housing_price');
  var roomNumberHousing = filters.querySelector('#housing_room-number');
  var guestsNumberHousing = filters.querySelector('#housing_guests-number');
  var featuresHousing = filters.querySelector('#housing_features');

  var updatePins = function () {

    filtredPins = pins.slice();

    filtredPins = window.filters.filterPins([typeHousing, roomNumberHousing, guestsNumberHousing], ['type', 'rooms', 'guests'], filtredPins);

    switch (priceHousing.value) {
      case 'middle':
        filtredPins = filtredPins.filter(function (arr) {
          return arr.offer.price >= MIN_PRICE && arr.offer.price <= MAX_PRICE;
        });
        break;
      case 'low':
        filtredPins = filtredPins.filter(function (arr) {
          return arr.offer.price <= MIN_PRICE;
        });
        break;
      case 'high':
        filtredPins = filtredPins.filter(function (arr) {
          return arr.offer.price >= MAX_PRICE;
        });
        break;
      default:
        filtredPins = filtredPins.slice();
    }

    var features = featuresHousing.querySelectorAll('input:checked');

    for (var i = 0; i < features.length; i++) {
      filtredPins = filtredPins.filter(function (arr) {
        return arr.offer.features.indexOf(features[i].value) !== -1;
      });
    }

    window.renderPin.appendPins(filtredPins);
  };

  filters.addEventListener('change', function () {
    window.data.debouncedAction(updatePins);
  });

  var onPinLoad = function (data) {
    pins = data;
    updatePins(data);
  };

  window.backend.load(onPinLoad, window.backend.isError);

})();
