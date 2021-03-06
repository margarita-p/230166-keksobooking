'use strict';

(function () {

  var dialog = document.querySelector('.dialog');
  var dialogClose = dialog.querySelector('.dialog__close');

  dialog.classList.add('hidden');

  var onEscPress = function (evt) {
    window.data.isEscEvent(evt, close);
  };

  var closeDialog = function () {
    window.showCard.close();
    document.removeEventListener('keydown', onEscPress);
  };

  var onDialogClosePress = function (evt) {
    window.data.isEnterEvent(evt, closeDialog);
    window.moveCard.isDialogCloseEvent();
  };

  var onDialogCloseClick = function () {
    closeDialog();
  };

  dialogClose.addEventListener('click', onDialogCloseClick);
  dialogClose.addEventListener('keydown', onDialogClosePress);


  window.showCard = {
    close: function () {
      if (document.querySelector('.pin--active')) {
        document.querySelector('.pin--active').classList.remove('pin--active');
      }

      dialog.classList.add('hidden');
    }
  };

})();
