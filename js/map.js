'use strict';

(function () {
  var WIZARDS_AMOUNT = 8;
  var IMG_AMOUNT = 8;
  var ROOMS_AMOUNT = 5;
  var GUESTS_AMOUNT = 10;
  var TITLES = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
  var TYPES = ['flat', 'house', 'bungalo'];
  var CHECK_TIMES = ['12:00', '13:00', '14:00'];
  var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

  var empty = [];

  var getAdverts = function () {
    var imgArr = window.data.getArrAmount(IMG_AMOUNT);
    var adverts = [];
    for (var i = 0; i < WIZARDS_AMOUNT; i++) {
      adverts[i] = {
        'author': {
          'avatar': 'img/avatars/user0' + window.data.getRandomNoRepeat(imgArr) + '.png'
        },
        'offer': {
          'title': window.data.getRandomNoRepeat(TITLES),
          'address': '',
          'price': window.data.getRandomInterval(1000, 1000000) + '&#x20bd;/ночь',
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
          'x': window.data.getRandomInterval(300, 900),
          'y': window.data.getRandomInterval(100, 500)
        }
      };
      adverts[i].offer.address = adverts[i].location.x + ', ' + adverts[i].location.y;
    }
    return adverts;
  };

  var adverts = getAdverts();

  window.pin.appendPins(adverts);

})();
