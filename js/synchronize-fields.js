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
      switch (firstField.value) {
        case '1':
          secondField.value = '1';
          secondField.options[0].disabled = true;
          secondField.options[1].disabled = true;
          secondField.options[2].disabled = false;
          secondField.options[3].disabled = true;
          break;
        case '2':
          secondField.value = '2';
          secondField.options[0].disabled = true;
          secondField.options[1].disabled = false;
          secondField.options[2].disabled = false;
          secondField.options[3].disabled = true;
          break;
        case '3':
          secondField.value = '3';
          secondField.options[0].disabled = false;
          secondField.options[1].disabled = false;
          secondField.options[2].disabled = false;
          secondField.options[3].disabled = true;
          break;
        case '100':
          secondField.value = '0';
          secondField.options[0].disabled = true;
          secondField.options[1].disabled = true;
          secondField.options[2].disabled = true;
          secondField.options[3].disabled = false;
          break;
      }
    }
  };

})();
