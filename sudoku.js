"use strict"
var fs = require('fs')
var board_string = fs.readFileSync('set-02_project-euler_50-easy-puzzles.txt')
  .toString()
  .split("\n")[0]

class Sudoku {
  constructor(starting) {
    this.starting = starting;
    this.startBoard = [];
    this.block = [];
    this.empty = [];
    this.kunci = [1,2,3,4,5,6,7,8,9];
    this.count = 0;
    this.backer = 1 //backtracker
    this.counter = 0
    this.bank = []
  }

  horizontalBoard() {
    let into_nine = this.starting.match(/.{9}/g);
    let result = []
      for (let i = 0; i < 9; i++) {
        result[i] = into_nine[i].split("").map(Number); //biar pasti jadi number
      }
    this.bank = result;
    return this.startBoard = result;
  }

  zempty(){
    this.empty = []
    for (let i = 0; i < 9; i++){
      for (let j =0; j < 9; j++){
        if (this.startBoard[i][j] == 0){
          this.empty.push([i,j])
        }
      }
    }
    return this.empty
  }

  randomNine (){
    var count = this.kunci.length
    while(count){
      let randomer = Math.floor(Math.random()*count--) | 0;
      let temp = this.kunci[count]; //tukar2tempat
      this.kunci[count] = this.kunci[randomer];
      this.kunci[randomer] = temp;
    }
    return this.kunci
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
    let kiri = 0
    let kanan = 0
    while (col > kiri +3) {
      kiri += 3;
    }
    while (row > kanan +3) {
      kanan += 3
    }
    for(let j = kiri; j < kiri + 3; j++){
      for (let k = kanan; k < kanan + 3; k++){
        if (this.startBoard[j][k] == target){
          return false
        }
      }
    }
    return true
  }
  //   var area = blokIndexer(col, row);
  //   for (let i = 0; i < 9; i++){
  //     if(this.block[area][i] == target){
  //       return false
  //     }
  //   }
  //   return true
  // }

  combineCek(col, row, target){
    if (this.horizontal(col, target) && this.vertical(row, target) && this.blokal(col, row, target)){
      return true
    } else {
      return false
    }
  }

  solvebacktrack(){
    for (let i = 0; i < this.empty.length;){
      // console.log(i);
      let kiri = this.empty[i][0];
      let kanan = this.empty[i][1];
      let got = false;
      let ini = this.startBoard[kiri][kanan]
      this.randomNine()
      while (!got && ini < 9){
        if (this.combineCek(kiri, kanan, this.kunci[ini])){
          this.startBoard[kiri][kanan] = this.kunci[ini];
          got = true;
          i++;
        } else {
          ini++;
        }
      }
      this.count++
      // console.log(this.kunci);
      if (!got){ //mencegah stuck loop
        this.startBoard[kiri][kanan] = 0;
        got = false
        if (i < 1){} //stopper
        else {
            i--;
        }
      }
      console.log(this.count);
      console.log(this.startBoard);
    }
    return this.startBoard
  }

  solveHuman(){
    this.zempty()
    for (let i = 0; i < this.empty.length; i++){
      let kiri = this.empty[i][0];
      let kanan = this.empty[i][1];
      this.counter = 0
      for (let j = 1; j < 10; j++){
        if (this.combineCek(kiri, kanan, j)){
          this.counter++
          // var temp = j
        }
      }
      if (this.counter == 1){
        this.startBoard[kiri][kanan] = temp
        this.counter = 0
      }
      if (i == this.empty.length){
        return "done"
      }
    }
    console.log(this.bank);
    return this.startBoard
  }

  // Returns a string representing the current state of the board
  boardTest() {
    for (let i = 0; i < this.empty.length; i++){
      let kiri = this.empty[i][0];
      let kanan = this.empty[i][1];
      this.randomNine()
      for (let j = 0; j < 9; j++){
        if (this.combineCek(kiri, kanan, this.kunci[j])){
          this.startBoard[kiri][kanan] = this.kunci[j]
        }
      }
      console.log(i);
      console.log(this.startBoard);
    }
  }

}

var game = new Sudoku('105802000090076405200400819019007306762083090000061050007600030430020501600308900')

// Remember: this will just fill out what it can and not "guess"
// game.solve()

console.log(game.horizontalBoard());
game.zempty();
// console.log(game.empty[32])
// console.log(game.solvebacktrack());
// console.log(game.boardTest());

// game.zempty();
// console.log(game.blokal(8, 8, 8));
// game.turnBlock();
// console.log(game.solvebacktrack());
// console.log(game.randomNine());
// console.log(game.combineCek(0, 0, 7));
// console.log(game.combineCek(0, 0, 6));
// console.log(game.blokal(1, 0, 4));
// console.log(game.horizontal(0, 7));
// console.log(game.vertical(0,7));
// console.log(blokIndexer(5,2));

function blokIndexer(col, row){
  var plus = col + row
  var minus = col - row
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
