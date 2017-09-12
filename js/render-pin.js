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
        return window.showCard.appendLodge(obj);
      });
    };

    var onPinClickAppendLodge = function () {
      window.showCard.appendLodge(obj);
    };

    pinElement.addEventListener('click', onPinClickAppendLodge, true);
    pinElement.addEventListener('keydown', onPinPressAppendLodge, true);
    pinElement.addEventListener('click', window.showPin.onPinClick, true);
    pinElement.addEventListener('keydown', window.showPin.onPinPress, true);

    pinElement.classList.remove('pin__main');
    pinElement.tabIndex = '0';
    pinElement.querySelector('img').src = obj.author.avatar;
    pinElement.style = 'left: ' + (obj.location.x - PIN_WIDTH / 2) + 'px; top: ' + (obj.location.y - PIN_HEIGHT) + 'px';

    return pinElement;
  };

  window.renderPin = {
    appendPins: function (data) {
      var fragment = document.createDocumentFragment();
      pinMap.innerHTML = '<div class="pin  pin__main"><img src="img/main-pin-image.png" alt="Main Pin" class="rounded" width="40" height="44"></div>';
      data.forEach(function (element) {
        fragment.appendChild(renderPin(element));
      });
      pinMap.appendChild(fragment);
    }
  };

})();
