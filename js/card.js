'use strict';

(function () {
  var RUS_TYPES = {
    'flat': 'Квартира',
    'house': 'Дом',
    'bungalo': 'Бунгало'
  };

  var dialog = document.querySelector('.dialog');
  var dialogClose = document.querySelector('.dialog__close');

  dialog.classList.add('hidden');

  var close = function () {
    window.data.closePin();
    dialog.classList.add('hidden');
  };

  var onEscPress = function (evt) {
    window.data.isEscEvent(evt, close);
  };

  var closeDialog = function () {
    close();
    document.removeEventListener('keydown', onEscPress);
  };

  var onDialogClosePress = function (evt) {
    window.data.isEnterEvent(evt, closeDialog);
  };

  var onDialogCloseClick = function () {
    closeDialog();
  };

  dialogClose.addEventListener('click', onDialogCloseClick);
  dialogClose.addEventListener('keydown', onDialogClosePress);

  var renderLodge = function (arr) {
    var lodgeTemplate = document.querySelector('#lodge-template').content.querySelector('.dialog__panel');
    var lodgeElement = lodgeTemplate.cloneNode(true);
    lodgeElement.querySelector('.lodge__title').textContent = arr.offer.title;
    lodgeElement.querySelector('.lodge__address').textContent = arr.offer.address;
    lodgeElement.querySelector('.lodge__price').innerHTML = arr.offer.price;
    lodgeElement.querySelector('.lodge__type').textContent = RUS_TYPES[arr.offer.type];
    lodgeElement.querySelector('.lodge__rooms-and-guests').textContent = 'Для ' + arr.offer.guests + ' гостей в ' + arr.offer.rooms + ' комнатах';
    lodgeElement.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + arr.offer.checkin + ' , выезд до ' + arr.offer.checkout;
    var keksFeatures = arr.offer.features;
    for (var i = 0; i < keksFeatures.length; i++) {
      lodgeElement.querySelector('.lodge__features').innerHTML += '<span class = "feature__image feature__image--' + keksFeatures[i] + '"></span>';
    }
    lodgeElement.querySelector('.lodge__description').textContent = arr.offer.description;
    return lodgeElement;
  };

  window.card = {
    appendLodge: function (obj) {
      var dialogPanel = document.querySelector('.dialog__panel');
      dialogPanel.parentElement.replaceChild(renderLodge(obj), dialogPanel);
      var dialogTitle = document.querySelector('.dialog__title');
      dialogTitle.querySelector('img').src = obj.author.avatar;
      dialog.classList.remove('hidden');
    }
  };
})();
