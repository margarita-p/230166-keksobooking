'use strict';

(function () {

  var SERVER_URL = 'https://1510.dump.academy/keksobooking';

  var setup = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case 200:
          onLoad(xhr.response);
          break;
        default:
          onError('Неизвестный статус: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполнится за ' + xhr.timeout + 'мс');
    });
    xhr.timeout = 10000;

    return xhr;
  };


  window.backend = {
    load: function (onLoad, onError) {
      var xhr = setup(onLoad, onError);

      xhr.open('GET', SERVER_URL + '/data');
      xhr.send();
    },

    save: function (data, onLoad, onError) {
      var xhr = setup(onLoad, onError);

      xhr.open('POST', SERVER_URL);
      xhr.send(data);
    },

    isError: function (errorMassage) {
      var node = document.createElement('div');
      node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red; color: white';
      node.style.position = 'fixed';
      node.style.left = 0;
      node.style.right = 0;
      node.style.bottom = 0;
      node.style.fontSize = '30px';

      node.textContent = errorMassage;
      document.body.insertAdjacentElement('afterbegin', node);
    }
  };

})();
