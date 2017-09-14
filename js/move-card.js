'use strict';

(function () {

  var START_MAP_X = 20;
  var END_MAP_X = 950;

  var dialog = document.querySelector('.dialog');
  var dialogHandle = dialog.querySelector('img[alt="Avatar"]');

  window.moveCard = {

    onDialogHandleEvent: function (evt) {
      evt.preventDefault();

      var startCoords = {
        x: evt.clientX,
      };

      var onMouseMove = function (moveEvt) {
        moveEvt.preventDefault();

        var shift = {
          x: startCoords.x - moveEvt.clientX,
        };

        startCoords = {
          x: moveEvt.clientX,
        };

        var currentCoords = {
          x: dialog.offsetLeft - shift.x,
        };

        if (START_MAP_X < currentCoords.x && currentCoords.x < END_MAP_X) {
          dialog.style.left = currentCoords.x + 'px';
        }

      };

      var onMouseUp = function (upEvt) {
        upEvt.preventDefault();

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    },

    isDialogCloseEvent: function () {
      dialog.style.top = '70px';
      dialog.style.left = '20px';
      dialogHandle.removeEventListener('mousedown', window.moveCard.onDialogHandleEvent);
    }
  };

})();
