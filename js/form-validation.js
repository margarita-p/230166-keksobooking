'use strict';

(function () {

  window.formValidation = {

    checkTextField: function (evt, minText, maxText) {
      var target = evt.target;
      if (target.value.length < minText) {
        target.setCustomValidity('Должно быть не менее ' + minText + ' символов.');
      } else if (target.value.length > maxText) {
        target.setCustomValidity('Должно быть не больше ' + maxText + ' символов.');
      } else {
        target.setCustomValidity('');
      }
    },

    checkNumberField: function (evt, minNamber, maxNumber) {
      var target = evt.target;
      if (target.value <= minNamber) {
        target.setCustomValidity('Число должно быть больше ' + minNamber);
      } else if (target.value >= maxNumber) {
        target.setCustomValidity('Число должно быть меньше ' + maxNumber);
      } else {
        target.setCustomValidity('');
      }
    },

    checkFieldValid: function (field) {
      if (field.validity.valueMissing) {
        field.setCustomValidity('Заполните это поле, пожалуйста!');
      } else {
        field.setCustomValidity('');
      }
    }

  };

})();
