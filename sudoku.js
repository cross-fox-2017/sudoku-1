"use strict"

class Sudoku {
  constructor(board_string) {
    this.arrBoard  = [];
    this.strSudoku = board_string;
  }

  solve() {}

  // Returns a string representing the current state of the board
  board() {
    for(let i = 0; i < this.strSudoku.length; i += 9){
      let arrTemp = [];
      for(let j = 0; j < 9; j++){
        let idx = i+j;
        arrTemp.push(this.strSudoku[idx]);
      }
      this.arrBoard.push(arrTemp);
      // i += 8;
    }
    return this.arrBoard;
  }

  checkRow(){

  }

}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_string)

// Remember: this will just fill out what it can and not "guess"
game.solve()

console.log(game.board())
