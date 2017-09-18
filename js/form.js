'use strict';

(function () {

  var MIN_TEXT_TITLE = 30;
  var MAX_TEXT_TITLE = 100;
  var MIN_RANGE_PRICE = 0;
  var MAX_RANGE_PRICE = 1e6;
  var PRICE_FIELD_VALUES = [1000, 0, 5000, 10000];
  var TYPE_FIELD_VALUES = ['flat', 'bungalo', 'house', 'palace'];
  var GUESTS = [[true, true, false, true], [true, false, false, true], [false, false, false, true], [true, true, true, false]];

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

  var isRoomNumberCapacityFields = function () {
    if (roomNumberField.value !== '100') {
      window.synchronizeFields.equateValues(roomNumberField, capacityField);
    } else {
      capacityField.value = '0';
    }
    window.synchronizeFields.disabledValues(roomNumberField, capacityField, GUESTS);
  };

  var onRoomNumberFieldChange = function () {
    isRoomNumberCapacityFields();
  };

  timeInField.addEventListener('change', onTimeInFieldChange);
  timeOutField.addEventListener('change', onTimeOutFieldChange);
  typeField.addEventListener('change', onTypeFieldChange);
  roomNumberField.addEventListener('change', onRoomNumberFieldChange);

  // по умолчанию
  window.synchronizeFields.equateValues(timeInField, timeOutField);
  window.synchronizeFields.equateValues(timeOutField, timeInField);
  window.synchronizeFields.findMinValues(typeField, TYPE_FIELD_VALUES, priceField, PRICE_FIELD_VALUES);
  isRoomNumberCapacityFields();


  // валидация
  titleField.addEventListener('input', function (evt) {
    window.formValidation.checkTextField(evt, MIN_TEXT_TITLE, MAX_TEXT_TITLE);
  });

  titleField.addEventListener('invalid', function () {
    window.formValidation.checkFieldValid(titleField);
  });

  priceField.addEventListener('input', function (evt) {
    window.formValidation.checkNumberField(evt, MIN_RANGE_PRICE, MAX_RANGE_PRICE);
  });

  priceField.addEventListener('invalid', function () {
    return window.formValidation.checkFieldValid(priceField);
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
