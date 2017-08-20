'use strict';

var AMOUNT_IMG = 8;
var AMOUNT_ROOMS = 5;
var AMOUNT_GUESTS = 10;
var TITLES = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
var TYPES = ['flat', 'house', 'bungalo'];
var CHECK_TIMES = ['12:00', '13:00', '14:00'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var PHOTOS = [];

// Получение случайного элемента массива
var getRandomRepeat = function(arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

// Получение неповторяющегося случайного элемента массива
var getRandomNoRepeat = function(arr) {
  var rand = Math.floor(Math.random() * arr.length);
  var removed = arr.splice(rand, 1);
  return removed;
};

// Получение случайного числа от min до max
var getRandomInterval = function(min, max) {
  var rand = Math.floor(min + Math.random() * (max + 1 - min));
  return rand;
};

// Получение массива из чисел
var arr = [];
var getArr = function(arr, max) {
  for (var i = 0; i <= max; i++) {
    arr[i] = i;
  }
  return arr;
};

// меняет элементы местами в случайном порядке (почему-то работает)
var getRandomOrder = function(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i) {
    var rand = Math.floor(Math.random() * arr.length);
    result.push(arr[rand]);
    arr.splice(rand, 1);
  }
  return result;
};

// массив случайной длины
var getRandomRange = function(arr) {
  var rand = Math.floor(Math.random() * arr.length);
  arr.length = rand;
  return arr;
};

var arr = [];

var adverts = [
  {
    'author': {
      'avatar': 'img/avatars/user0' + getRandomNoRepeat(getArr(arr, AMOUNT_IMG)) + '.png'
    },
    'offer': {
      'title': getRandomNoRepeat(TITLES),
      'address': location.x + ', ' + location.y,
      'price': getRandomInterval(1000, 1000000000),
      'type': getRandomRepeat(TYPES),
      'rooms': getRandomInterval(1, AMOUNT_ROOMS),
      'guests': getRandomInterval(1, AMOUNT_GUESTS),
      'checkin': getRandomRepeat(CHECK_TIMES),
      'checkout': getRandomRepeat(CHECK_TIMES),
      'features': getRandomRange(getRandomOrder(FEATURES)),
      'description': '',
      'photos': arr = []
    },
    'location': {
      'x': getRandomInterval(300, 900),
      'y': getRandomInterval(100, 500)
    }
  },
  {
    'author': {
      'avatar': 'img/avatars/user0' + getRandomNoRepeat(getArr(arr, AMOUNT_IMG)) + '.png'
    },
    'offer': {
      'title': getRandomNoRepeat(TITLES),
      'address': location.x + ', ' + location.y,
      'price': getRandomInterval(1000, 1000000000),
      'type': getRandomRepeat(TYPES),
      'rooms': getRandomInterval(1, AMOUNT_ROOMS),
      'guests': getRandomInterval(1, AMOUNT_GUESTS),
      'checkin': getRandomRepeat(CHECK_TIMES),
      'checkout': getRandomRepeat(CHECK_TIMES),
      'features': getRandomRange(getRandomOrder(FEATURES)),
      'description': '',
      'photos': arr = []
    },
    'location': {
      'x': getRandomInterval(300, 900),
      'y': getRandomInterval(100, 500)
    }
  },
  {
    'author': {
      'avatar': 'img/avatars/user0' + getRandomNoRepeat(getArr(arr, AMOUNT_IMG)) + '.png'
    },
    'offer': {
      'title': getRandomNoRepeat(TITLES),
      'address': location.x + ', ' + location.y,
      'price': getRandomInterval(1000, 1000000000),
      'type': getRandomRepeat(TYPES),
      'rooms': getRandomInterval(1, AMOUNT_ROOMS),
      'guests': getRandomInterval(1, AMOUNT_GUESTS),
      'checkin': getRandomRepeat(CHECK_TIMES),
      'checkout': getRandomRepeat(CHECK_TIMES),
      'features': getRandomRange(getRandomOrder(FEATURES)),
      'description': '',
      'photos': arr = []
    },
    'location': {
      'x': getRandomInterval(300, 900) - pin.style.width / 2,
      'y': getRandomInterval(100, 500) - pin.style.height
    }
  },
  {
    'author': {
      'avatar': 'img/avatars/user0' + getRandomNoRepeat(getArr(arr, AMOUNT_IMG)) + '.png'
    },
    'offer': {
      'title': getRandomNoRepeat(TITLES),
      'address': location.x + ', ' + location.y,
      'price': getRandomInterval(1000, 1000000000),
      'type': getRandomRepeat(TYPES),
      'rooms': getRandomInterval(1, AMOUNT_ROOMS),
      'guests': getRandomInterval(1, AMOUNT_GUESTS),
      'checkin': getRandomRepeat(CHECK_TIMES),
      'checkout': getRandomRepeat(CHECK_TIMES),
      'features': getRandomRange(getRandomOrder(FEATURES)),
      'description': '',
      'photos': arr = []
    },
    'location': {
      'x': getRandomInterval(300, 900),
      'y': getRandomInterval(100, 500)
    }
  },
  {
    'author': {
      'avatar': 'img/avatars/user0' + getRandomNoRepeat(getArr(arr, AMOUNT_IMG)) + '.png'
    },
    'offer': {
      'title': getRandomNoRepeat(TITLES),
      'address': location.x + ', ' + location.y,
      'price': getRandomInterval(1000, 1000000000),
      'type': getRandomRepeat(TYPES),
      'rooms': getRandomInterval(1, AMOUNT_ROOMS),
      'guests': getRandomInterval(1, AMOUNT_GUESTS),
      'checkin': getRandomRepeat(CHECK_TIMES),
      'checkout': getRandomRepeat(CHECK_TIMES),
      'features': getRandomRange(getRandomOrder(FEATURES)),
      'description': '',
      'photos': arr = []
    },
    'location': {
      'x': getRandomInterval(300, 900),
      'y': getRandomInterval(100, 500)
    }
  },
  {
    'author': {
      'avatar': 'img/avatars/user0' + getRandomNoRepeat(getArr(arr, AMOUNT_IMG)) + '.png'
    },
    'offer': {
      'title': getRandomNoRepeat(TITLES),
      'address': location.x + ', ' + location.y,
      'price': getRandomInterval(1000, 1000000000),
      'type': getRandomRepeat(TYPES),
      'rooms': getRandomInterval(1, AMOUNT_ROOMS),
      'guests': getRandomInterval(1, AMOUNT_GUESTS),
      'checkin': getRandomRepeat(CHECK_TIMES),
      'checkout': getRandomRepeat(CHECK_TIMES),
      'features': getRandomRange(getRandomOrder(FEATURES)),
      'description': '',
      'photos': arr = []
    },
    'location': {
      'x': getRandomInterval(300, 900),
      'y': getRandomInterval(100, 500)
    }
  },
  {
    'author': {
      'avatar': 'img/avatars/user0' + getRandomNoRepeat(getArr(arr, AMOUNT_IMG)) + '.png'
    },
    'offer': {
      'title': getRandomNoRepeat(TITLES),
      'address': location.x + ', ' + location.y,
      'price': getRandomInterval(1000, 1000000000),
      'type': getRandomRepeat(TYPES),
      'rooms': getRandomInterval(1, AMOUNT_ROOMS),
      'guests': getRandomInterval(1, AMOUNT_GUESTS),
      'checkin': getRandomRepeat(CHECK_TIMES),
      'checkout': getRandomRepeat(CHECK_TIMES),
      'features': getRandomRange(getRandomOrder(FEATURES)),
      'description': '',
      'photos': arr;
    },
    'location': {
      'x': getRandomInterval(300, 900),
      'y': getRandomInterval(100, 500)
    }
  },
  {
    'author': {
      'avatar': 'img/avatars/user0' + getRandomNoRepeat(getArr(arr, AMOUNT_IMG)) + '.png'
    },
    'offer': {
      'title': getRandomNoRepeat(TITLES),
      'address': location.x + ', ' + location.y,
      'price': getRandomInterval(1000, 1000000000),
      'type': getRandomRepeat(TYPES),
      'rooms': getRandomInterval(1, AMOUNT_ROOMS),
      'guests': getRandomInterval(1, AMOUNT_GUESTS),
      'checkin': getRandomRepeat(CHECK_TIMES),
      'checkout': getRandomRepeat(CHECK_TIMES),
      'features': getRandomRange(getRandomOrder(FEATURES)),
      'description': '',
      'photos': arr = []
    },
    'location': {
      'x': getRandomInterval(300, 900),
      'y': getRandomInterval(100, 500)
    }
  }
];


var pinMap = document.querySelector('.tokyo__pin-map');
var pin = document.querySelector('.pin').classList.remove('pin__main').content;

var renderPin = function (arr) {
  var pinElem = pin.cloneNode(true);
  pinElem.querySelector('img').insertAdjacentHTML('src', 'arr.author.avatar');
  pinElem.style.left = arr.location.x;
  pinElem.style.top = arr.location.y;
};

var appendPins = function (arr) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < arr.length; i++) {
    fragment.appendChild(renderPin(arr[i]));
  }
  pinMap.appendChild(fragment);
};

appendPins(adverts);

var lodgeTemplate = document.querySelector('#lodge-template').content;

var renderlodge = function (arr) {
  var lodgeElem = lodgeTemplate.cloneNode(true);
  lodgeElem.querySelector('.lodge__title').textContent = arr.offer.title;
  lodgeElem.querySelector('.lodge__price').textContent = arr.offer.price;
  lodgeElem.querySelector('.lodge__type').textContent = arr.offer.type;
  lodgeElem.querySelector('.lodge__rooms-and-guests').textContent = 'Для ' + arr.offer.guests + ' гостей в ' + arr.offer.rooms + ' комнатах';
  lodgeElem.querySelector('.lodge__checkin-time').textContent = 'Заезд после' + arr.offer.checkin + ' , выезд до ' arr.offer.checkout;
  lodgeElem.querySelector('.lodge__features').textContent = '';
  lodgeElem.querySelector('.lodge__description').textContent = arr.offer.description;
};

var appendLodge = function (arr) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < arr.length; i++) {
    fragment.appendChild(renderlodge(arr[i]));
  }
  pinMap.appendChild(fragment);
};

appendLodge(adverts);
