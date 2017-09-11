'use strict';

(function () {

  var type;
  var price;
  var rooms;
  var guests;
  var features;
  var pins = [];
  var filters = document.querySelector('.tokyo__filters');
  var typeHousing = filters.querySelector('#housing_type');
  var priceHousing = filters.querySelector('#housing_price');
  var roomsHousing = filters.querySelector('#housing_room-number');
  var guestsHousing = filters.querySelector('#housing_guests-number');

  var updatePins = function () {
    switch (type) {
      // case type === 'any':
      //   window.renderPin.appendPins(pins);
      //   break;
      case 'flat':
        window.renderPin.appendPins(pins.slice().filter(function (it) {
          return it.offer.type === type;
        }));
        break;
      case 'house':
        window.renderPin.appendPins(pins.slice().filter(function (it) {
          return it.offer.type === type;
        }));
        break;
      case 'bungalo':
        window.renderPin.appendPins(pins.slice().filter(function (it) {
          return it.offer.type === type;
        }));
        break;
      // default:
      //   window.renderPin.appendPins(pins);
    }
  };

  typeHousing.addEventListener('change', function () {
    type = typeHousing.options[typeHousing.selectedIndex].value;
    updatePins();
  });

  var onPinLoad = function (data) {
    pins = data;
    updatePins(data);
  };

  window.backend.load(onPinLoad, window.backend.isError);

})();
