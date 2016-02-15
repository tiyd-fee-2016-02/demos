html
<!DOCTYPE html>
<html>
<head>
<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body>
  <div class="modal-container">
    <div class="modal">
      <button class="modal-close">X</button>
      <h1>This is the modal!</h1>
    </div>
  </div>

  <button class="btn">Click me</button>


  <button class="btn">Click me</button>
</body>
</html>

css

.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: none;
}

.modal-container.showing {
  display: block;
}

.modal {
  position: fixed;
  top: 2em;
  left: 2em;
  bottom: 2em;
  right: 2em;
  background: white;
  border: 1px solid #AAA;
  padding: 2em;
}

.modal-close {
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  border-radius: 2em;
  background: #EEE;
  border: 1px solid #AAA;
}

jquery

$(function () {
  'use strict';

  $('.btn').on('click', function () {
    $(this).text('Hi');
    $('.modal-container').addClass('showing');
  });

  $('.modal-close, .modal-container').on('click', function () {
    $('.modal-container').removeClass('showing');
  });

  $('.modal').click(function (e) {
    e.stopPropagation();
  });

});
