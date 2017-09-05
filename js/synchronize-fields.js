'use strict';

(function () {

  window.synchronizeFields = {

    equalValues: function (firstField, secondField) {
      secondField.value = firstField.value;
    },

    cycleValues: function (firstField, firstArr, secondField, secondArr) {
      for (var i = 0; i < firstArr.length; i++) {
        if (firstField.value === firstArr[i]) {
          secondField.value = secondArr[i];
        }
      }
    }

  };

})();
