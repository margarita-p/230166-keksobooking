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

    getRandomRepeat: function (arr) {
      var rand = Math.floor(Math.random() * arr.length);
      return arr[rand];
    },

    getRandomNoRepeat: function (arr) {
      var rand = Math.floor(Math.random() * arr.length);
      var removed = arr.splice(rand, 1);
      return removed;
    },

    getRandomInterval: function (min, max) {
      var rand = Math.floor(min + Math.random() * (max + 1 - min));
      return rand;
    },

    getRandomOrderLength: function (arr) {
      var copied = arr.slice();
      for (var i = 0; i < copied.length; i++) {
        var randIndex = Math.floor(Math.random() * copied.length);
        var rand = Math.random();
        if (rand < 0.5) {
          copied.splice(randIndex, 1);
        }
      }
      return copied;
    },

    getArrAmount: function (amount) {
      var arr = [];
      var i = 0;
      while (i < amount) {
        arr[i] = ++i;
      }
      return arr;
    },

    closePin: function () {
      if (document.querySelector('.pin--active')) {
        document.querySelector('.pin--active').classList.remove('pin--active');
      }
    }
  };
})();
