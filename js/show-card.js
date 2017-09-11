'use strict';

(function () {

  var dialog = document.querySelector('.dialog');
  var dialogClose = document.querySelector('.dialog__close');

  dialog.classList.add('hidden');

  var close = function () {
    window.data.closePin();
    dialog.classList.add('hidden');
  };

  var onEscPress = function (evt) {
    window.data.isEscEvent(evt, close);
  };

  var closeDialog = function () {
    close();
    document.removeEventListener('keydown', onEscPress);
  };

  var onDialogClosePress = function (evt) {
    window.data.isEnterEvent(evt, closeDialog);
  };

  var onDialogCloseClick = function () {
    closeDialog();
  };

  dialogClose.addEventListener('click', onDialogCloseClick);
  dialogClose.addEventListener('keydown', onDialogClosePress);

})();
