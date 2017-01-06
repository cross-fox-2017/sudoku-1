"use strict"
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

class Sudoku {
  constructor(starting) {
    this.starting = starting;
    this.startBoard = [];
    this.nintydegree = [];
    this.block = [];
  }

  horizontalBoard() {
    let into_nine = this.starting.match(/.{9}/g);
      for (let i = 0; i < 9; i++) {
        this.startBoard[i] = into_nine[i].split("").map(Number); //biar pasti jadi number
      }
    return this.startBoard;
  }

  // verticalBoard() {
  //   for (let i = 0; i < 9; i++){
  //     this.nintydegree[i] = []
  //     for (let j = 0; j < 9; j++){
  //       this.nintydegree[i][j] = this.startBoard[j][i];
  //     }
  //   }
  //   return this.nintydegree;
  // }

  turnBlock(){
    for (let i = 0; i < 9; i++){
      var kiri = [0, 0, 0, 3, 3, 3, 6, 6, 6];
      var kanan = [0, 3, 6, 0, 3, 6, 0, 3, 6];
      this.block[i] = []
      for(let j = kiri[i]; j < kiri[i] + 3; j++){
        for (let k = kanan[i]; k < kanan[i] + 3; k++){
          this.block[i].push(this.startBoard[j][k])
        }
      }
    }
    return this.block
  }

  horizontal(col, target){
    for (let i = 0; i < this.startBoard.length; i++){
      if (this.startBoard[col][i] == target){
        return false
      }
    }
    return true
  }

  vertical(row, target){
    for (let i = 0; i < this.startBoard.length; i++){
      if (this.startBoard[i][row] == target){
        return false
      }
    }
    return true
  }
  blokal(col, row, target){
    var area = blokIndexer(col, row);
    for (let i = 0; i < 9; i++){
      if(this.block[area][i] == target){
        return false
      }
    }
    return true
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
game.turnBlock();
// console.log(game.verticalBoard());
console.log(game.blokal(3, 2, 5));
// console.log(game.horizontal(7, 5));
// console.log(game.vertical(0,3));
// console.log(blokIndexer(3,2));
// console.log(blokIndexer(5,2));

function blokIndexer(col, row){
  var plus = col + row
  var minus = col - row
  // console.log(plus);
  // console.log(minus);
  if (plus >= 0 && plus <= 8 && minus >= -8 && minus <= 0){
    return 0
  }
  if (plus >= 1 && plus <= 9 && minus >=-7 && minus <= 1){
    return 1
  }
  if (plus >= 2 && plus <= 10 && minus >= -6 && minus <= 2){
    return 2
  }
  if (plus >= 3 && plus <= 11 && minus >= -5 && minus <= 3){
    return 3
  }
  if (plus >= 4 && plus <= 12 && minus >= -4 && minus <= 4){
    return 4
  }
  if (plus >= 5 && plus <= 13 && minus >= -3 && minus <= 5){
    return 5
  }
  if (plus >= 6 && plus <= 14 && minus >= -2 && minus <= 6){
    return 6
  }
  if (plus >= 7 && plus <= 15 && minus >= -1 && minus <= 7){
    return 7
  }
  if (plus >= 8 && plus <= 16 && minus >= 0 && minus <= 8){
    return 8
  }
  return "diluar index!!!"
}
function converter(input, lower, upper){
  return number > lower && number < upper
}
// function test(){
//   for (let i = 0; i < 9; i++){
//     console.log(i);
//     for(let j = 0; j < 9; j++){
//       console.log(game.blokal(i, j, 0))
//     }
//     console.log("---------------------");
//   }
// }
// console.log(blokIndexer(8, 8));
// test()
