'use strict';

(function () {

  var type;
  var price;
  var rooms;
  var guests;
  var features = [];
  var pins = [];
  var filters = document.querySelector('.tokyo__filters');
  var typeHousing = filters.querySelector('#housing_type');
  var priceHousing = filters.querySelector('#housing_price');
  var roomsHousing = filters.querySelector('#housing_room-number');
  var guestsHousing = filters.querySelector('#housing_guests-number');

  var featuresHousing = filters.querySelector('#housing_features');
  var wifi = featuresHousing.querySelector('input[value="wifi"]');
  var dishwasher = featuresHousing.querySelector('input[value="dishwasher"]');
  var parking = featuresHousing.querySelector('input[value="parking"]');
  var washer = featuresHousing.querySelector('input[value="washer"]');
  var elevator = featuresHousing.querySelector('input[value="elevator"]');
  var conditioner = featuresHousing.querySelector('input[value="conditioner"]');

  var updatePins = function () {

    type = typeHousing.options[typeHousing.selectedIndex].value;

    var sameTypePins = function () {
      switch (type) {
        case 'any':
          return pins.slice();
        case 'flat':
          return pins.slice().filter(function (arr) {
            return arr.offer.type === type;
          });
        case 'house':
          return pins.slice().filter(function (arr) {
            return arr.offer.type === type;
          });
        case 'bungalo':
          return pins.slice().filter(function (arr) {
            return arr.offer.type === type;
          });
        default:
          return pins.slice();
      }
    };

    var filtredPins = sameTypePins();

    price = priceHousing.options[priceHousing.selectedIndex].value;

    var samePricePins = function () {
      switch (price) {
        case 'any':
          return filtredPins.slice();
        case 'middle':
          return filtredPins.slice().filter(function (arr) {
            return arr.offer.price > 10000 && arr.offer.price < 50000;
          });
        case 'low':
          return filtredPins.slice().filter(function (arr) {
            return arr.offer.price < 10000;
          });
        case 'high':
          return filtredPins.slice().filter(function (arr) {
            return arr.offer.price > 50000;
          });
        default:
          return filtredPins.slice();
      }
    };

    filtredPins = samePricePins();

    rooms = roomsHousing.options[roomsHousing.selectedIndex].value;

    var sameRoomsPins = function () {
      switch (rooms) {
        case 'any':
          return filtredPins.slice();
        case '1':
          return filtredPins.slice().filter(function (arr) {
            return arr.offer.rooms === 1;
          });
        case '2':
          return filtredPins.slice().filter(function (arr) {
            return arr.offer.rooms === 2;
          });
        case '3':
          return filtredPins.slice().filter(function (arr) {
            return arr.offer.rooms === 3;
          });
        default:
          return filtredPins.slice();
      }
    };

    filtredPins = sameRoomsPins();

    guests = guestsHousing.options[guestsHousing.selectedIndex].value;

    var sameGuestsPins = function () {
      switch (guests) {
        case 'any':
          return filtredPins.slice();
        case '1':
          return filtredPins.slice().filter(function (arr) {
            return arr.offer.guests === 1;
          });
        case '2':
          return filtredPins.slice().filter(function (arr) {
            return arr.offer.guests === 2;
          });
        default:
          return filtredPins.slice();
      }
    };

    filtredPins = sameGuestsPins();

    var sameFeaturesPins = function () {
      switch (features) {
        case features === []:
          return filtredPins.slice().filter(function (arr) {
            return arr.offer.features === [];
          });
        case features.includes('wifi'):
          return filtredPins.slice().filter(function (arr) {
            return arr.offer.features.includes('wifi') === true;
          });
        case features.indexOf('dishwasher') !== -1:
          return filtredPins.slice().filter(function (arr) {
            return arr.offer.features.includes('dishwasher') === true;
          });
        case features.includes('parking'):
          return filtredPins.slice().filter(function (arr) {
            return arr.offer.features.includes('parking') === true;
          });
        case features.includes('washer'):
          return filtredPins.slice().filter(function (arr) {
            return arr.offer.features.includes('washer') === true;
          });
        case features.includes('elevator'):
          return filtredPins.slice().filter(function (arr) {
            return arr.offer.features.includes('elevator') === true;
          });
        case features.includes('conditioner'):
          return filtredPins.slice().filter(function (arr) {
            return arr.offer.features.includes('conditioner') === true;
          });
        default:
          return filtredPins.slice();
      }
    };

    filtredPins = sameFeaturesPins();

    window.renderPin.appendPins(filtredPins);
  };

  typeHousing.addEventListener('change', function () {
    updatePins();
  });

  priceHousing.addEventListener('change', function () {
    updatePins();
  });

  roomsHousing.addEventListener('change', function () {
    updatePins();
  });

  guestsHousing.addEventListener('change', function () {
    updatePins();
  });

  wifi.addEventListener('click', function () {
    if (wifi.checked) {
      features.push('wifi');
      updatePins();
    } else {
      var index = features.indexOf('wifi');
      features.splice(index, 1);
    }
  });

  dishwasher.addEventListener('click', function () {
    if (dishwasher.checked) {
      features.push('dishwasher');
      updatePins();
    } else {
      var index = features.indexOf('dishwasher');
      features.splice(index, 1);
    }
  });

  parking.addEventListener('click', function () {
    if (parking.checked) {
      features.push('parking');
      updatePins();
    } else {
      var index = features.indexOf('parking');
      features.splice(index, 1);
    }
  });

  washer.addEventListener('click', function () {
    if (washer.checked) {
      features.push('washer');
      updatePins();
    } else {
      var index = features.indexOf('washer');
      features.splice(index, 1);
    }
  });

  elevator.addEventListener('click', function () {
    if (elevator.checked) {
      features.push('elevator');
      updatePins();
    } else {
      var index = features.indexOf('elevator');
      features.splice(index, 1);
    }
  });

  conditioner.addEventListener('click', function () {
    if (conditioner.checked) {
      features.push('conditioner');
      updatePins();
    } else {
      var index = features.indexOf('conditioner');
      features.splice(index, 1);
    }
  });


  var onPinLoad = function (data) {
    pins = data;
    updatePins(data);
  };

  window.backend.load(onPinLoad, window.backend.isError);

})();
