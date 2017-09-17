'use strict';

(function () {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var lastTimeout;

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

    debouncedAction: function (action, DEBOUNCE_TIME) {
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        action();
      }, DEBOUNCE_TIME);
    },

    getRandomArrRequiredLength: function (arr, REQUIRED_LENGTH) {
      var copied = arr.slice();
      copied.sort(function () {
        return Math.random() - 0.5;
      });
      return copied.splice(0, REQUIRED_LENGTH);
    }

  };

})();
