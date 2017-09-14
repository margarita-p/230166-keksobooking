'use strict';

(function () {

  window.filters = {

    filterPins: function (element, filters, array) {

      element.forEach(function (item, index) {

        if (item.value.toString() !== 'any') {
          array = array.filter(function (arr) {
            return arr.offer[filters[index]].toString() === item.value.toString();
          });
        }

      });

      return array;
    }
  };
})();
