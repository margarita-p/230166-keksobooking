'use strict';

(function () {
  var KEKS_AMOUNT = 8;
  var IMG_AMOUNT = 8;
  var ROOMS_AMOUNT = 5;
  var GUESTS_AMOUNT = 10;
  var START_MAP_X = 300;
  var END_MAP_X = 900;
  var START_MAP_Y = 100;
  var END_MAP_Y = 500;
  var PIN_WIDTH = 56;
  var PIN_HEIGHT = 75;
  var PRICE_MIN = 1000;
  var PRICE_MAX = 1000000;
  var TITLES = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
  var TYPES = ['flat', 'house', 'bungalo'];
  var CHECK_TIMES = ['12:00', '13:00', '14:00'];
  var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

  var empty = [];

  var getAdverts = function () {
    var imgArr = window.data.getArrAmount(IMG_AMOUNT);
    var adverts = [];
    for (var i = 0; i < KEKS_AMOUNT; i++) {
      adverts[i] = {
        'author': {
          'avatar': 'img/avatars/user0' + window.data.getRandomNoRepeat(imgArr) + '.png'
        },
        'offer': {
          'title': window.data.getRandomNoRepeat(TITLES),
          'address': '',
          'price': window.data.getRandomInterval(PRICE_MIN, PRICE_MAX) + '&#x20bd;/ночь',
          'type': window.data.getRandomRepeat(TYPES),
          'rooms': window.data.getRandomInterval(1, ROOMS_AMOUNT),
          'guests': window.data.getRandomInterval(1, GUESTS_AMOUNT),
          'checkin': window.data.getRandomRepeat(CHECK_TIMES),
          'checkout': window.data.getRandomRepeat(CHECK_TIMES),
          'features': window.data.getRandomOrderLength(FEATURES),
          'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, iste. Temporibus ipsum, voluptas dignissimos adipisci ipsam dolorem iusto blanditiis quisquam.',
          'photos': empty
        },
        'location': {
          'x': window.data.getRandomInterval(START_MAP_X + PIN_WIDTH / 2, END_MAP_X - PIN_WIDTH / 2),
          'y': window.data.getRandomInterval(START_MAP_Y + PIN_HEIGHT, END_MAP_Y - PIN_HEIGHT)
        }
      };
      adverts[i].offer.address = adverts[i].location.x + ', ' + adverts[i].location.y;
    }
    return adverts;
  };

  var adverts = getAdverts();

  window.pin.appendPins(adverts);

})();
