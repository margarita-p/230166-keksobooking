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
  var roomNumberFieldValues = ['1', '2', '3', '100'];
  var capacityField = noticeForm.querySelector('#capacity');
  var capacityFieldValues = ['1', '2', '3', '0'];

  var onTimeInFieldEvent = function () {
    window.synchronizeFields.equalValues(timeInField, timeOutField);
  };

  var onTimeOutFieldEvent = function () {
    window.synchronizeFields.equalValues(timeOutField, timeInField);
  };

  var onTypeFieldEvent = function () {
    window.synchronizeFields.cycleValues(typeField, typeFieldValues, priceField, priceFieldValues);
  };

  var onRoomNumberFieldEvent = function () {
    window.synchronizeFields.cycleValues(roomNumberField, roomNumberFieldValues, capacityField, capacityFieldValues);
  };

  timeInField.addEventListener('change', onTimeInFieldEvent);
  timeOutField.addEventListener('change', onTimeOutFieldEvent);
  typeField.addEventListener('change', onTypeFieldEvent);
  roomNumberField.addEventListener('change', onRoomNumberFieldEvent);

})();
