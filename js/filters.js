'use strict';

(function () {

  var filters = document.querySelector('.tokyo__filters');
  var typeHousing = filters.querySelector('#housing_type');
  var priceHousing = filters.querySelector('#housing_price');
  var roomsHousing = filters.querySelector('#housing_room-number');
  var guestsHousing = filters.querySelector('#housing_guests-number');
  // var featuresHousing = filters.querySelector('.housing_features');
  var target;

  window.filters = {

    onTypeHousingChange: function () {
      target = typeHousing.value;
      window.filters.onTypeHousingChange(target);
    },

    onPriceHousingChange: function () {
      target = priceHousing.value;
      window.filters.onTypeHousingChange(target);
    },

    onRoomsHousingChange: function () {
      target = roomsHousing.value;
      window.filters.onTypeHousingChange(target);
    },

    onGuestsHousingChange: function () {
      target = guestsHousing.value;
      window.filters.onTypeHousingChange(target);
    }

  };

  typeHousing.addEventListener('change', window.filters.onTypeHousingChange);

  priceHousing.addEventListener('change', window.filters.onPriceHousingChange);

  roomsHousing.addEventListener('change', window.filters.onRoomsHousingChange);

  guestsHousing.addEventListener('change', window.filters.onGuestsHousingChange);

})();
