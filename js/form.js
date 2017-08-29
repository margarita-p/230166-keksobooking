'use strict';

(function () {
  var noticeForm = document.querySelector('.notice__form');

  var timeIn = noticeForm.querySelector('#timein');
  var timeOut = noticeForm.querySelector('#timeout');

  var type = noticeForm.querySelector('#type');
  var price = noticeForm.querySelector('#price');

  var roomNumber = noticeForm.querySelector('#room_number');
  var capacity = noticeForm.querySelector('#capacity');

  timeIn.addEventListener('change', function (evt) {
    timeOut.value = evt.target.value;
  });

  timeOut.addEventListener('change', function (evt) {
    timeIn.value = evt.target.value;
  });

  type.addEventListener('change', function (evt) {
    var target = evt.target.value;
    if (target === 'flat') {
      price.value = 1000;
    }
    if (target === 'bungalo') {
      price.value = 0;
    }
    if (target === 'house') {
      price.value = 5000;
    }
    if (target === 'palace') {
      price.value = 10000;
    }
    return target;
  });

  roomNumber.addEventListener('change', function (evt) {
    var target = evt.target.value;
    if (target === '1') {
      capacity.value = '1';
    }
    if (target === '2') {
      capacity.value = '2';
    }
    if (target === '3') {
      capacity.value = '3';
    }
    if (target === '100') {
      capacity.value = '0';
    }
    return target;
  });
})();
