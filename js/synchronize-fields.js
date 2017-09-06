'use strict';

(function () {

  window.synchronizeFields = {

    equalValues: function (firstField, secondField) {
      secondField.value = firstField.value;
    },

    minValues: function (firstField, firstArr, secondField, secondArr) {
      var index = firstArr.indexOf(firstField.value);
      secondField.min = secondArr[index];
      secondField.value = secondField.min;
    },

    indexValues: function (firstField, secondField) {
      var index = firstField.selectedIndex;
      if (index === 0) {
        secondField.selectedIndex = 2;
      }
      if (index === 1) {
        secondField.selectedIndex = 1;
      }
      if (index === 2) {
        secondField.selectedIndex = 0;
      }
      if (index === 3) {
        secondField.selectedIndex = 3;
      }
    }

  };

})();
