//@Author: Alexander Parcasio IV
'use strict';

(function() {
  var body = document.body;
  var burger = document.getElementById('burger');
  var burgerContain = document.getElementById('burgerNav');

  burger.addEventListener('click', function toggleClasses() {
    [burgerContain].forEach(function(el) {
      el.classList.toggle('open');
    });
  }, false);
})();