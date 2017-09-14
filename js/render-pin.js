'use strict';

(function () {

  var PIN_WIDTH = 56;
  var PIN_HEIGHT = 75;

  var pinMap = document.querySelector('.tokyo__pin-map');
  var pin = document.querySelector('.pin');

  var renderPin = function (obj) {

    var pinElement = pin.cloneNode(true);

    var onPinPressAppendLodge = function (evt) {
      window.data.isEnterEvent(evt, function () {
        return window.renderCard.appendLodge(obj);
      });
    };

    var onPinClickAppendLodge = function () {
      window.renderCard.appendLodge(obj);
    };

    pinElement.addEventListener('click', onPinClickAppendLodge, true);
    pinElement.addEventListener('keydown', onPinPressAppendLodge, true);
    pinElement.addEventListener('click', window.showPin.onPinClick, true);
    pinElement.addEventListener('keydown', window.showPin.onPinPress, true);

    pinElement.classList.remove('pin__main');
    pinElement.tabIndex = '0';
    pinElement.querySelector('img').src = obj.author.avatar;
    pinElement.style.left = (obj.location.x - PIN_WIDTH / 2) + 'px';
    pinElement.style.top = (obj.location.y - PIN_HEIGHT) + 'px';

    return pinElement;
  };


  window.renderPin = {
    appendPins: function (data) {
      var fragment = document.createDocumentFragment();
      for (var i = pinMap.children.length - 1; i > 0; i--) {
        pinMap.removeChild(pinMap.children[i]);
      }
      data.forEach(function (element) {
        fragment.appendChild(renderPin(element));
      });
      pinMap.appendChild(fragment);
    }
  };

})();
