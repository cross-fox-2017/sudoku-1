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
    this.kunci = [1,2,3,4,5,6,7,8,9]
  }

  horizontalBoard() {
    let into_nine = this.starting.match(/.{9}/g);
      for (let i = 0; i < 9; i++) {
        this.startBoard[i] = into_nine[i].split("").map(Number); //biar pasti jadi number
      }
    return this.startBoard;
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

  turnBlock(){
    for (let i = 0; i < 9; i++){
      let kiri = [0, 0, 0, 3, 3, 3, 6, 6, 6];
      let kanan = [0, 3, 6, 0, 3, 6, 0, 3, 6];
      this.block[i] = []
      for(let j = kiri[i]; j < kiri[i] + 3; j++){
        for (let k = kanan[i]; k < kanan[i] + 3; k++){
          this.block[i].push(this.startBoard[j][k])
        }
      }
    }
    return this.block
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
    var area = blokIndexer(col, row);
    for (let i = 0; i < 9; i++){
      if(this.block[area][i] == target){
        return false
      }
    }
    return true
  }

  combineCek(col, row, target){
    if (this.horizontal(col, target) && this.vertical(row, target) && this.blokal(col, row, target)){
      return true
    } else {
      return false
    }
  }

  solve(){
    for (let i = 0; i < this.empty.length; i++){
      let kiri = this.empty[i][0];
      let kanan = this.empty[i][1];
      let got = false;
      for (let j = 1; j < 10; j++){
        if (this.combineCek(kiri, kanan, this.kunci[j])){
          this.startBoard[kiri][kanan] = this.kunci[j];
          this.turnBlock();
          got = true;
        }
      }
      // if (this.startBoard[kiri][kanan] == 0){
      //   let randomer = Math.floor(Math.random()*(9-1)+1)
      //   this.startBoard[kiri][kanan] = randomer
      // }
      if (got == false){ //mencegah stuck loop
        this.randomNine() // butuh dirandom ulang
        i--;
      }
    }
    return this.startBoard
  }

  // Returns a string representing the current state of the board
  board() {}
}

var game = new Sudoku('619030040270061008000047621486302079000014580031009060005720806320106057160400030')

// Remember: this will just fill out what it can and not "guess"
// game.solve()

console.log(game.horizontalBoard());
// game.zempty();
// game.turnBlock();
// console.log(game.solve());
console.log(game.randomNine());
// console.log(game.combineCek(0, 1, 8));
// console.log(game.combineCek(0, 0, 6));
// console.log(game.blokal(3, 2, 5));
// console.log(game.horizontal(7, 5));
// console.log(game.vertical(0,3));
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
