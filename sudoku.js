 "use strict"

class Sudoku {
  constructor(board_string) {
    this.sudoku_grid =[];
  }

  solve() {
// check(0,0,5)
  var xx=0;
  var yy=0;
  for(let i=0; i<9; i++){
    var data = i+1;
    while (this.check(xx,yy,data)) {
      this.sudoku_grid[xx][yy]=data;
      yy++
    }
  }
  return this.sudoku_grid;
  }
  check(x,y,z) {
    if( this.cekCol(x,y,z) && this.cekRow(x,y,z) && this.cekBox(x,y,z) ){
      return true;
    }
    return false;
  }
  // Returns a string representing the current state of the board
  board() {
    board_string = board_string.split('');
    let arr=[];
    for(let i=0; i<81 ; i++){
      arr.push(parseInt(board_string[i]));
    }
    for(let i=0; i<9; i++){
      this.sudoku_grid.push([]);
      for (let j=0; j<9; j++) {
        this.sudoku_grid[i].push(arr[9*i+j]);
      }
    }
    return console.log(this.sudoku_grid);
  }

  printcek(){
    this.sudoku_grid[0].splice(0,1,'X');
    return this.sudoku_grid[0];
  }

  cekRow(x,y,z){
    for(let i=0; i<9; i++){
      if(z == this.sudoku_grid[x][i]){
        return false;
      }
    }
    return true;
  }

  cekCol(x,y,z){
    for(let i=0; i<9; i++){
      if(z == this.sudoku_grid[i][y]){
        return false;
      }
    }
    return true;
  }

  cekBox(x,y,z){
    let benar='';
    let colFirst = 0;
    let colLast = 9;
    let rowFirst = 0;
    let rowLast = 9;

    if(x<3){
      rowFirst = 0;
      rowLast = 3;
    }
    if(x>3 && x<6){
      rowFirst = 3;
      rowLast = 6;
    }
    if(x>6){
      rowFirst = 6;
      rowLast = 9;
    }

    if(y<3){
      colFirst = 0;
      colLast = 3;
    }
    if(y>3 && y<6){
      colFirst = 3;
      colLast = 6;
    }
    if(y>6){
      colFirst = 6;
      colLast = 9;
    }

    for(let i=rowFirst; i<rowLast; i++){
      for(let j=colFirst; j<colLast; j++){
        if(z == this.sudoku_grid[i][j]){
          return false;
        }
      }
    }

    return true
  }

}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_string)


game.board();
// console.log(game.cekRow(0,0,1));
// console.log(game.check(0,0,2));
// console.log(game.check(0,0,3));
// console.log(game.check(0,0,4));
// console.log(game.check(0,0,5));
// console.log(game.check(0,0,6));
// console.log(game.check(0,0,7));
// console.log(game.check(0,0,8));
// console.log(game.check(0,0,9));
// Remember: this will just fill out what it can and not "guess"
console.log('=============AFTER===============');
console.log(game.solve());
