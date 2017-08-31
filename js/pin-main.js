'use strict';

(function () {
  // var PIN_WIDTH = 56;
  // var PIN_HEIGHT = 75;
  var pinMain = document.querySelector('.pin__main');
  var address = document.querySelector('#address');
  var dialog = document.querySelector('.dialog');


  var onPinMainClick = function () {
    dialog.classList.remove('hidden');
    address.setAttribute('readonly', 'readonly');
  };

  pinMain.addEventListener('click', onPinMainClick);

  // ================================================
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

      pinMain.style.top = (pinMain.offsetTop - shift.y) + 'px';
      pinMain.style.left = (pinMain.offsetLeft - shift.x) + 'px';
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