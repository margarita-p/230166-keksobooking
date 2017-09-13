'use strict';

(function () {

  var pins = [];
  var filtredPins = [];
  var filters = document.querySelector('.tokyo__filters');
  var typeHousing = filters.querySelector('#housing_type');
  var priceHousing = filters.querySelector('#housing_price');
  var roomNumberHousing = filters.querySelector('#housing_room-number');
  var guestsNumberHousing = filters.querySelector('#housing_guests-number');
  var featuresHousing = filters.querySelector('#housing_features');

  var updatePins = function () {

    switch (typeHousing.value) {
      case 'flat':
        filtredPins = pins.slice().filter(function (arr) {
          return arr.offer.type === 'flat';
        });
        break;
      case 'house':
        filtredPins = pins.slice().filter(function (arr) {
          return arr.offer.type === 'house';
        });
        break;
      case 'bungalo':
        filtredPins = pins.slice().filter(function (arr) {
          return arr.offer.type === 'bungalo';
        });
        break;
      default:
        filtredPins = pins.slice();
    }

    switch (priceHousing.value) {
      case 'middle':
        filtredPins = filtredPins.filter(function (arr) {
          return arr.offer.price > 10000 && arr.offer.price < 50000;
        });
        break;
      case 'low':
        filtredPins = filtredPins.filter(function (arr) {
          return arr.offer.price < 10000;
        });
        break;
      case 'high':
        filtredPins = filtredPins.filter(function (arr) {
          return arr.offer.price > 50000;
        });
        break;
      default:
        filtredPins = filtredPins.slice();
    }

    switch (roomNumberHousing.value) {
      case '1':
        filtredPins = filtredPins.filter(function (arr) {
          return arr.offer.rooms === 1;
        });
        break;
      case '2':
        filtredPins = filtredPins.filter(function (arr) {
          return arr.offer.rooms === 2;
        });
        break;
      case '3':
        filtredPins = filtredPins.filter(function (arr) {
          return arr.offer.rooms === 3;
        });
        break;
      default:
        filtredPins = filtredPins.slice();
    }

    switch (guestsNumberHousing.value) {
      case '1':
        filtredPins = filtredPins.filter(function (arr) {
          return arr.offer.guests === 1;
        });
        break;
      case '2':
        filtredPins = filtredPins.filter(function (arr) {
          return arr.offer.guests === 2;
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
