HTML
<main class="main-content">
  <textarea class="leet-txt"></textarea>
  <div class="leet-preview"></div>
</main>

CSS

textarea {
  width: 250px;
  height: 150px;
  font-size: 1em;
}


JQUERY
$(function () {
  'use strict';

  var leetChars = {
    'a': '@',
    'e': '3',
    'i': '1',
    'o': '0',
    'u': '|_|'
  };

   function leet(str) {
    return str.split('').map(function (characters) {
      var replacement = leetChars[characters.toLowerCase()];
      return replacement || characters;
    }).join('');
  }

   function leetReg(str) {
    return str.replace(/[aeiou]/g, function (message) {
      return leetChars[message.toLowerCase()];
    });
  }

   $('.leet-txt').on('input', function () {
    $('.leet-preview').text(leetReg($(this).val()));
  });

});
