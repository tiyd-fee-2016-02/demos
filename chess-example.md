var board = [
  ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r'] ];

  console.log(board.join('\n') + '\n\n');

  board[2][4] = board[0][6];
  board[0][6] = ' ';
  console.log(board.join('\n'));


------------------------------------

var myCats = ["Toby", "Kip", "Libby"];
var myDogs = ["Lightning", "Sheba", "Fraggle"];
var myAnimals = [myCats, myDogs];

console.log( myAnimals[1][2] );
