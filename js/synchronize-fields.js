'use strict';

(function () {

  var disabledOptions = [];

  window.synchronizeFields = {

    equateValues: function (firstField, secondField) {
      secondField.value = firstField.value;
    },

    findMinValues: function (firstField, firstArr, secondField, secondArr) {
      var index = firstArr.indexOf(firstField.value);
      secondField.min = secondArr[index];
      secondField.value = secondField.min;
    },

    disabledValues: function (firstField, secondField, arr) {
      var index = firstField.selectedIndex;
      disabledOptions = arr[index];
      for (var i = 0; i < secondField.options.length; i++) {
        secondField.options[i].disabled = disabledOptions[i];
      }
    }
  };

})();
