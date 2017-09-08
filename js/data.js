'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.data = {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },

    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },

    closePin: function () {
      if (document.querySelector('.pin--active')) {
        document.querySelector('.pin--active').classList.remove('pin--active');
      }
    }
  };
})();
