"use strict"
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

class Sudoku {
  constructor(starting) {
    this.starting = starting;
    this.startBoard = []
    this.nintydegree = []
  }

  horizontalBoard() {
    let into_nine = this.starting.match(/.{9}/g);
      for (let i = 0; i < 9; i++) {
        this.startBoard[i] = into_nine[i].split("").map(Number); //biar pasti jadi number
      }
    return this.startBoard;
  }

  verticalBoard() {
    for (let i = 0; i < 9; i++){
      this.nintydegree[i] = []
      for (let j = 0; j < 9; j++){
        this.nintydegree[i][j] = this.startBoard[j][i];
      }
    }
    return this.nintydegree;
  }

  turnBlock(){
    
  }

  horizontal(row, col, target){
    return this.startBoard[row][col] != target;
  }

  vertical(row, col, target){
    return this.nintydegree[row][col] != target;
  }
  block(){

  }
  solve() {}

  // Returns a string representing the current state of the board
  board() {}
}

var game = new Sudoku(board_string)

// Remember: this will just fill out what it can and not "guess"
// game.solve()

// console.log(game.board())
console.log(game.horizontalBoard());
console.log(game.verticalBoard());
// console.log(game.vertical(1,1,9));
