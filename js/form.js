'use strict';

(function () {
  var noticeForm = document.querySelector('.notice__form');

  var timeInField = noticeForm.querySelector('#timein');
  var timeOutField = noticeForm.querySelector('#timeout');

  var typeField = noticeForm.querySelector('#type');
  var typeFieldValues = ['flat', 'bungalo', 'house', 'palace'];
  var priceField = noticeForm.querySelector('#price');
  var priceFieldValues = [1000, 0, 5000, 10000];

  var roomNumberField = noticeForm.querySelector('#room_number');
  var capacityField = noticeForm.querySelector('#capacity');

  var titleField = noticeForm.querySelector('#title')
  var addressField = noticeForm.querySelector('#address')

  var onTimeInFieldChange = function () {
    window.synchronizeFields.equalValues(timeInField, timeOutField);
  };

  var onTimeOutFieldChange = function () {
    window.synchronizeFields.equalValues(timeOutField, timeInField);
  };

  var onTypeFieldChange = function () {
    window.synchronizeFields.minValues(typeField, typeFieldValues, priceField, priceFieldValues);
  };

  var onRoomNumberFieldChange = function () {
    window.synchronizeFields.indexValues(roomNumberField, capacityField);
  };

  var onCapacityFieldFieldChange = function () {
    window.synchronizeFields.indexValues(capacityField, roomNumberField);
  };

  timeInField.addEventListener('change', onTimeInFieldChange);
  timeOutField.addEventListener('change', onTimeOutFieldChange);
  typeField.addEventListener('change', onTypeFieldChange);
  roomNumberField.addEventListener('change', onRoomNumberFieldChange);
  capacityField.addEventListener('change', onCapacityFieldFieldChange);

  // Валидация заголовка
  titleField.addEventListener('invalid', function () {
    if (!titleField.validity.valid) {
      if (titleField.validity.tooShort) {
        titleField.setCustomValidity('От 30 до 100');
      } else if (titleField.validity.tooLong) {
        titleField.setCustomValidity('От 100 до 30');
      } else if (titleField.validity.valueMissing) {
        titleField.setCustomValidity('Тут надо обязательно написать заголовок, иначе никак');
      }
    } else {
      titleField.setCustomValidity('');
    }
  });

  // Валидация заголовка для Edge
  titleField.addEventListener('input', function (evt) {
    var target = evt.target;
    if (target.value.length < 30) {
      target.setCustomValidity('От 30 и больше');
    } else {
      target.setCustomValidity('');
    }
  });

  // Валидация адреса
  addressField.addEventListener('invalid', function () {
    if (!addressField.validity.valid) {
      if (addressField.validity.valueMissing) {
        addressField.setCustomValidity('Тут надо обязательно написать адрес, иначе никак');
      }
    } else {
      addressField.setCustomValidity('');
    }
  });

  // Валидация цены
  priceField.addEventListener('invalid', function () {
    if (!priceField.validity.valid) {
      if (priceField.validity.valueMissing) {
        priceField.setCustomValidity('Тут надо обязательно указать цену, иначе никак');
      } else if (priceField.validity.rangeOverflow) {
        priceField.setCustomValidity('Меньше 1000000 больше 0');
      } else if (priceField.validity.rangeUnderflow ) {
        priceField.setCustomValidity('Больше 0 меньше 1000000');
      }
    } else {
      priceField.setCustomValidity('');
    }
  });

})();
