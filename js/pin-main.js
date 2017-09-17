'use strict';

(function () {

  var MAIN_PIN = {
    width: 76,
    height: 94
  };

  var MAP = {
    startX: 300,
    endX: 1124,
    startY: 100,
    endY: 500
  };

  var pinMain = document.querySelector('.pin__main');
  var address = document.querySelector('#address');

  var left = pinMain.offsetLeft + MAIN_PIN.width / 2;
  var top = pinMain.offsetTop + MAIN_PIN.height;

  address.setAttribute('readonly', 'readonly');
  address.setAttribute('value', 'x: ' + left + ', y: ' + top);

  var onPinMainMousedown = function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      var currentCoords = {
        x: pinMain.offsetLeft - shift.x,
        y: pinMain.offsetTop - shift.y
      };

      if (MAP.startX < currentCoords.x && currentCoords.x < MAP.endX) {
        pinMain.style.left = currentCoords.x + 'px';
      }

      if (MAP.startY < currentCoords.y && currentCoords.y < MAP.endY) {
        pinMain.style.top = currentCoords.y + 'px';
      }

      address.value = 'x: ' + (currentCoords.x + MAIN_PIN.width / 2) + ', y: ' + (currentCoords.y + MAIN_PIN.height);
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  pinMain.addEventListener('mousedown', onPinMainMousedown);

})();
