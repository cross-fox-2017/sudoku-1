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
    this.block = []
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
    for (let i = 0; i < 9; i++){
      var kiri = [0, 0, 0, 3, 3, 3, 6, 6, 6];
      var kanan = [0, 3, 6, 0, 3, 6, 0, 3, 6];
      this.block[i] = []
      for(let j = kiri[i]; j < kiri[i] + 3; j++){
        for (let k = kanan[i]; k < kanan[i] + 3; k++){
          this.block[i].push(this.startBoard[j][k]);
        }
      }
    }
    return this.block
  }

  horizontal(col, target){
    for (let i = 0; i < this.startBoard.length; i++){
      if (this.startBoard[i][col] == target){
        return false
      }
    }
    return true
  }

  vertical(row, target){
    for (let i = 0; i < this.nintydegree.length; i++){
      if (this.nintydegree[i][row] == target){
        return false
      }
    }
    return true
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
console.log(game.turnBlock());
// console.log(game.verticalBoard());
// console.log(game.vertical(0, 9));
