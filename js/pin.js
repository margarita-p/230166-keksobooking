'use strict';

(function () {
  var PIN_WIDTH = 56;
  var PIN_HEIGHT = 75;
  var pinMap = document.querySelector('.tokyo__pin-map');
  var pin = document.querySelector('.pin');
  var dialog = document.querySelector('.dialog');

  var close = function () {
    window.data.closePin();
    dialog.classList.add('hidden');
  };

  var onEscPress = function (evt) {
    window.data.isEscEvent(evt, close);
  };

  var activatePin = function (evt) {
    if (document.querySelector('.pin--active')) {
      document.querySelector('.pin--active').classList.remove('pin--active');
    }
    evt.currentTarget.classList.add('pin--active');
    document.addEventListener('keydown', onEscPress);
  };

  var onPinPress = function (evt) {

    window.data.isEnterEvent(evt, function () {
      return activatePin(evt);
    });
  };

  var onPinClick = function (evt) {
    activatePin(evt);
  };


  var renderPin = function (obj) {

    var pinElement = pin.cloneNode(true);

    var onPinPressAppendLodge = function (evt) {
      window.data.isEnterEvent(evt, function () {
        return window.showCard.appendLodge(obj);
      });
    };

    var onPinClickAppendLodge = function () {
      window.showCard.appendLodge(obj);
    };

    pinElement.addEventListener('click', onPinClickAppendLodge, true);
    pinElement.addEventListener('keydown', onPinPressAppendLodge, true);
    pinElement.addEventListener('click', onPinClick, true);
    pinElement.addEventListener('keydown', onPinPress, true);

    pinElement.classList.remove('pin__main');
    pinElement.tabIndex = '0';
    pinElement.querySelector('img').src = obj.author.avatar;
    pinElement.style = 'left: ' + (obj.location.x - PIN_WIDTH / 2) + 'px; top: ' + (obj.location.y - PIN_HEIGHT) + 'px';

    return pinElement;
  };

  window.pin = {
    appendPins: function (arr) {
      var fragment = document.createDocumentFragment();
      var i = 0;
      arr.forEach(function () {
        if (i < arr.length) {
          fragment.appendChild(renderPin(arr[i]));
          i++;
        }
      });
      pinMap.appendChild(fragment);
    }
  };

  window.backend.load(window.pin.appendPins, window.backend.isError);

})();
