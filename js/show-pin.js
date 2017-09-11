'use strict';

(function () {

  var dialog = document.querySelector('.dialog');

  var close = function () {
    window.data.closePin();
    dialog.classList.add('hidden');
  };

  var onEscPress = function (evt) {
    window.data.isEscEvent(evt, close);
  };

  var activatePin = function (evt) {
    if (document.querySelector('.pin--active')) {
      document.querySelector('.pin--active').classList.remove('pin--active');
    }
    evt.currentTarget.classList.add('pin--active');
    document.addEventListener('keydown', onEscPress);
  };


  window.showPin = {

    onPinClick: function (evt) {
      activatePin(evt);
    },

    onPinPress: function (evt) {
      window.data.isEnterEvent(evt, function () {
        return activatePin(evt);
      });
    }

  };

})();
