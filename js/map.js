'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var AMOUNT_IMG = 8;
var AMOUNT_ROOMS = 5;
var AMOUNT_GUESTS = 10;
var TITLES = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
var TYPES = ['flat', 'house', 'bungalo'];
var RUS_TYPES = {
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalo': 'Бунгало'
};
var CHECK_TIMES = ['12:00', '13:00', '14:00'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var empty = [];

// Получение случайного элемента массива
var getRandomRepeat = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

// Получение неповторяющегося случайного элемента массива
var getRandomNoRepeat = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);
  var removed = arr.splice(rand, 1);
  return removed;
};

// Получение случайного числа от min до max
var getRandomInterval = function (min, max) {
  var rand = Math.floor(min + Math.random() * (max + 1 - min));
  return rand;
};

// массив в случайном порядке и случайной длины
var getRandomOrderLength = function (arr) {
  var copied = arr.slice();
  for (var i = 0; i < copied.length; i++) {
    var randIndex = Math.floor(Math.random() * copied.length);
    var rand = Math.random();
    if (rand < 0.5) {
      copied.splice(randIndex, 1);
    }
  }
  return copied;
};

// массив от 1 до указаного количества
var getArrAmount = function (amount) {
  var arr = [];
  var i = 0;
  while (i < amount) {
    arr[i] = ++i;
  }
  return arr;
};

var getAdverts = function () {
  var imgArr = getArrAmount(AMOUNT_IMG);
  var adverts = [];
  for (var i = 0; i < 8; i++) {
    adverts[i] = {
      'author': {
        'avatar': 'img/avatars/user0' + getRandomNoRepeat(imgArr) + '.png'
      },
      'offer': {
        'title': getRandomNoRepeat(TITLES),
        'address': '',
        'price': getRandomInterval(1000, 1000000) + '&#x20bd;/ночь',
        'type': getRandomRepeat(TYPES),
        'rooms': getRandomInterval(1, AMOUNT_ROOMS),
        'guests': getRandomInterval(1, AMOUNT_GUESTS),
        'checkin': getRandomRepeat(CHECK_TIMES),
        'checkout': getRandomRepeat(CHECK_TIMES),
        'features': getRandomOrderLength(FEATURES),
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, iste. Temporibus ipsum, voluptas dignissimos adipisci ipsam dolorem iusto blanditiis quisquam.',
        'photos': empty
      },
      'location': {
        'x': getRandomInterval(300, 900),
        'y': getRandomInterval(100, 500)
      }
    };
    adverts[i].offer.address = adverts[i].location.x + ', ' + adverts[i].location.y;
  }
  return adverts;
};

var adverts = getAdverts();

var pinMap = document.querySelector('.tokyo__pin-map');
var pin = document.querySelector('.pin');
var avatar = adverts[0].author.avatar;



var renderPin = function (obj) {
  var pinElem = pin.cloneNode(true);
  var downPin = document.querySelector('.dialog__close');

  var escPressHandler = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      pinElem.classList.remove('pin--active');
    }
  };

  var show = function () {
    pinElem.classList.add('pin--active');
    pinElem.addEventListener('click', appendLodge(obj));
    document.addEventListener('keydown', escPressHandler);
  };

  var down = function () {
    pinElem.classList.remove('pin--active');
    pinElem.removeEventListener('click', appendLodge(obj));
    document.removeEventListener('keydown', escPressHandler);
  };

  pinElem.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      show();
    }
  });

  downPin.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      down();
    }
  });

  pinElem.classList.remove('pin__main');
  pinElem.tabIndex = '0';
  pinElem.querySelector('img').src = obj.author.avatar;
  pinElem.style = 'left: ' + (obj.location.x - 28) + 'px; top: ' + (obj.location.y - 75) + 'px';
  pinElem.addEventListener('click', function () {
    if (pinElem.classList.contains('pin--active')) {
      down();
    } else {
      show();
    }
  });
  downPin.addEventListener('click', function () {
    if (pinElem.classList.contains('pin--active')) {
      down();
    }
  });
  return pinElem;
};


var appendPins = function (arr) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < arr.length; i++) {
    fragment.appendChild(renderPin(arr[i]));
  }
  pinMap.appendChild(fragment);
};

appendPins(adverts);

var renderLodge = function (arr) {
  var lodgeTemplate = document.querySelector('#lodge-template').content.querySelector('.dialog__panel');
  var lodgeElem = lodgeTemplate.cloneNode(true);
  lodgeElem.querySelector('.lodge__title').textContent = arr.offer.title;
  lodgeElem.querySelector('.lodge__address').textContent = arr.offer.address;
  lodgeElem.querySelector('.lodge__price').innerHTML = arr.offer.price;
  lodgeElem.querySelector('.lodge__type').textContent = RUS_TYPES[arr.offer.type];
  lodgeElem.querySelector('.lodge__rooms-and-guests').textContent = 'Для ' + arr.offer.guests + ' гостей в ' + arr.offer.rooms + ' комнатах';
  lodgeElem.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + arr.offer.checkin + ' , выезд до ' + arr.offer.checkout;
  var keksFeatures = arr.offer.features;
  for (var i = 0; i < keksFeatures.length; i++) {
    lodgeElem.querySelector('.lodge__features').innerHTML += '<span class = "feature__image feature__image--' + keksFeatures[i] + '"></span>';
  }
  lodgeElem.querySelector('.lodge__description').textContent = arr.offer.description;
  return lodgeElem;
};

var appendLodge = function (obj) {
  var dialogPanel = document.querySelector('.dialog__panel');
  dialogPanel.parentElement.replaceChild(renderLodge(obj), dialogPanel);
  var dialogTitle = document.querySelector('.dialog__title');
  dialogTitle.querySelector('img').src = arr.author.avatar;
};
