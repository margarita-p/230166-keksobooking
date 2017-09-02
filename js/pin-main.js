'use strict';

(function () {
  var PIN_MAIN_WIDTH = 76;
  var PIN_MAIN_HEIGHT = 94;
  var START_MAP_X = 300;
  var END_MAP_X = 900;
  var START_MAP_Y = 100;
  var END_MAP_Y = 500;
  var pinMain = document.querySelector('.pin__main');
  var address = document.querySelector('#address');

  // =========================================

  var onPinMainMousedown = function (evt) {
    evt.preventDefault();
    address.setAttribute('readonly', 'readonly');

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
        x: pinMain.offsetLeft - shift.x - PIN_MAIN_WIDTH / 2,
        y: pinMain.offsetTop - shift.y - PIN_MAIN_HEIGHT
      };

      if (START_MAP_X < currentCoords.x && currentCoords.x < END_MAP_X) {
        pinMain.style.left = currentCoords.x + 'px';
      }

      if (START_MAP_Y < currentCoords.y && currentCoords.y < END_MAP_Y) {
        pinMain.style.top = currentCoords.y + 'px';
      }

      address.value = 'x: ' + currentCoords.x + ', y: ' + currentCoords.y;
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
