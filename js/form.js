'use strict';

(function () {

  var MIN_LENGTH_TITLE = 30;
  var MAX_LENGTH_TITLE = 100;
  var MIN_RANGE_PRICE = 0;
  var MAX_RANGE_PRICE = 1e6;
  var PRICE_FIELD_VALUES = [1000, 0, 5000, 10000];
  var TYPE_FIELD_VALUES = ['flat', 'bungalo', 'house', 'palace'];

  var noticeForm = document.querySelector('.notice__form');
  var timeInField = noticeForm.querySelector('#timein');
  var timeOutField = noticeForm.querySelector('#timeout');
  var typeField = noticeForm.querySelector('#type');
  var priceField = noticeForm.querySelector('#price');
  var roomNumberField = noticeForm.querySelector('#room_number');
  var capacityField = noticeForm.querySelector('#capacity');
  var titleField = noticeForm.querySelector('#title');

  // синхронизация
  var onTimeInFieldChange = function () {
    window.synchronizeFields.equateValues(timeInField, timeOutField);
  };

  var onTimeOutFieldChange = function () {
    window.synchronizeFields.equateValues(timeOutField, timeInField);
  };

  var onTypeFieldChange = function () {
    window.synchronizeFields.findMinValues(typeField, TYPE_FIELD_VALUES, priceField, PRICE_FIELD_VALUES);
  };

  var onRoomNumberFieldChange = function () {
    window.synchronizeFields.disabledValues(roomNumberField, capacityField);
  };

  timeInField.addEventListener('change', onTimeInFieldChange);
  timeOutField.addEventListener('change', onTimeOutFieldChange);
  typeField.addEventListener('change', onTypeFieldChange);
  roomNumberField.addEventListener('change', onRoomNumberFieldChange);

  // по умолчанию до change
  window.synchronizeFields.equateValues(timeInField, timeOutField);
  window.synchronizeFields.equateValues(timeOutField, timeInField);
  window.synchronizeFields.findMinValues(typeField, TYPE_FIELD_VALUES, priceField, PRICE_FIELD_VALUES);
  window.synchronizeFields.disabledValues(roomNumberField, capacityField);

  // валидация
  titleField.addEventListener('invalid', function () {
    if (titleField.validity.tooShort) {
      titleField.setCustomValidity('Должно быть не менее ' + MIN_LENGTH_TITLE + ' символов.');
    } else if (titleField.validity.tooLong) {
      titleField.setCustomValidity('Должно быть не более ' + MAX_LENGTH_TITLE + ' символов.');
    } else if (titleField.validity.valueMissing) {
      titleField.setCustomValidity('Надо обязательно написать заголовок');
    } else {
      titleField.setCustomValidity('');
    }
  });

  // для Edge
  titleField.addEventListener('input', function (evt) {
    var target = evt.target;
    if (target.value.length < MIN_LENGTH_TITLE) {
      target.setCustomValidity('Должно быть не менее ' + MIN_LENGTH_TITLE + ' символов.');
    } else {
      target.setCustomValidity('');
    }
  });

  priceField.addEventListener('invalid', function () {
    if (priceField.validity.valueMissing) {
      priceField.setCustomValidity('Надо обязательно указать цену');
    } else if (priceField.validity.rangeOverflow) {
      priceField.setCustomValidity('Цена должна быть меньше ' + MAX_RANGE_PRICE + ' рублей.');
    } else if (priceField.validity.rangeUnderflow) {
      priceField.setCustomValidity('Цена должна быть больше ' + MIN_RANGE_PRICE + ' рублей.');
    } else {
      priceField.setCustomValidity('');
    }
  });

  // отправка
  var loadNoticeForm = function () {
    noticeForm.reset();
  };

  var onFormSubmit = function (evt) {
    window.backend.save(new FormData(noticeForm), loadNoticeForm, window.backend.isError);
    evt.preventDefault();
  };

  noticeForm.addEventListener('submit', onFormSubmit);

})();
