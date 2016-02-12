var frm = document.querySelector('.todo-form');
var todos = [];

frm.addEventListener('submit', function (e) {
  e.preventDefault();

  addTodo();
  redrawTodos();
});


function addTodo() {
  var txt = document.querySelector('.todo-entry');

  if (txt.value) {
    todos.push(txt.value);
    todos.sort();
    txt.value = '';
  }
}

function redrawTodos() {
  var list = document.querySelector('.todo-list');

  list.innerHTML = todos.map(function (todo, i) {
    return '<li class="todo-item">' +
      escape(todo) +
      '<button type="button" class="remove" data-index="' + i + '">X</button>'+
      '</li>';
  }).join('');
}

function escape(str) {
  var escapes = {
    '>': '&gt;',
    '<': '&lt;',
    '\'': '&apos;',
    '\"': '&quot;'
  };

  var result = '';

  for (var i = 0; i < str.length; ++i) {
    var ch = str[i];
    var esc = escapes[ch];

    result += esc ? esc : ch;
  }

  return result;
}

function remove(i) {
  todos.splice(i, 1);
}

frm.addEventListener('click', function (e) {
  if (e.target.className.indexOf('remove') >= 0) {
    remove(parseInt(e.target.dataset.index));
    redrawTodos();
  }
});
