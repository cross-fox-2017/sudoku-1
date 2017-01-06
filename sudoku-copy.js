"use strict"

class Sudoku {
  constructor(board_string) {
    this.board = this.makeBoard(board_string);
  }

  makeBoard(board_string){
    let regex = /\d{9}/g
    let split = board_string.match(regex);

    let boardArr = [];

    for(let i = 0; i < 9; i++){
      let arr = [];
      boardArr.push(arr);
    }

    for(let i = 0; i < 9; i++){
      for(let j = 0; j < 9; j++){
        boardArr[i][j] = parseInt(split[i][j]);
      }
    }
    return boardArr;
  }

  solve() {
    let arrIndex = [];
    let angka = 0;
    for(let i = 0; i < 9; i++){
      let arrIndex2 = []
      arrIndex.push(arrIndex2)
      for(let j = 0; j < 9; j++){
        if(this.board[i][j] == 0) {
          angka = 0;
          let status = true;
          let x = 0;

          while(status){
            let random = this.randomNumber();
            if(this.checkAll(i,j,random)){
              angka = random;
              arrIndex[i].push(j);
              status = false;
              console.log(arrIndex);
            }


            // else if(x > 50){
            //   for(let k = 0; k < arrIndex[i].length; k++){
            //     random = this.randomNumber();
            //     if(this.checkAll(i,k,random)){
            //       this.board[i][k] = random;
            //     }
            //   }
            // }
          }
          this.board[i][j] = angka;
          console.log(this.board);
          console.log('\n');
        }
      }
    }
    return this.board[0];
  }

  randomNumber(){
    return Math.floor(Math.random() * 9) + 1;
  }

  // Returns a string representing the current state of the board
  board() {

  }

  checkRow(x,y,value){
    for(let i = 0; i < 9; i++){
      if(this.board[x][i] === value)
      return false
    }
    return true;
  }

  checkColumn(x,y,value){
    for(let i = 0; i < 9; i++){
      if(this.board[i][y] === value)
      return false
    }
    return true;
  }

  checkBox(x,y,value){

    // check box 1
    let batasAwalX  = 0;
    let batasAkhirX = 0;
    let batasAwalY = 0;
    let batasAkhirY = 0;

    // cek box 1
    if(x >= 0 && x <= 2 && y >= 0 && y <= 2){
      batasAwalX  = 0;
      batasAkhirX = 2;
      batasAwalY = 0;
      batasAkhirY = 2;
    }

    // cek box 2
    if(x >= 0 && x <= 2 && y >= 3 && y <= 5){
      batasAwalX  = 0;
      batasAkhirX = 2;
      batasAwalY = 3;
      batasAkhirY = 5;
    }

    // cek box 3
    if(x >= 0 && x <= 2 && y >= 6 && y <= 8){
      batasAwalX  = 0;
      batasAkhirX = 2;
      batasAwalY = 6;
      batasAkhirY = 8;
    }

    // cek box 4
    if(x >= 3 && x <= 5 && y >= 0 && y <= 2){
      batasAwalX  = 3;
      batasAkhirX = 5;
      batasAwalY = 0;
      batasAkhirY = 2;
    }

    // cek box 5
    if(x >= 3 && x <= 5 && y >= 3 && y <= 5){
      batasAwalX  = 3;
      batasAkhirX = 5;
      batasAwalY = 3;
      batasAkhirY = 5;
    }

    // cek box 6
    if(x >= 3 && x <= 5 && y >= 6 && y <= 8){
      batasAwalX  = 3;
      batasAkhirX = 5;
      batasAwalY = 6;
      batasAkhirY = 8;
    }

    // cek box 7
    if(x >= 6 && x <= 8 && y >= 0 && y <= 2){
      batasAwalX  = 6;
      batasAkhirX = 8;
      batasAwalY = 0;
      batasAkhirY = 2;
    }

    // cek box 7
    if(x >= 6 && x <= 8 && y >= 3 && y <= 5){
      batasAwalX  = 6;
      batasAkhirX = 8;
      batasAwalY = 0;
      batasAkhirY = 2;
    }

    // cek box 8
    if(x >= 6 && x <= 8 && y >= 6 && y <= 8){
      batasAwalX  = 6;
      batasAkhirX = 8;
      batasAwalY = 6;
      batasAkhirY = 8;
    }

    for(let i = batasAwalX; i <= batasAkhirX; i++){
      for(let j = batasAwalY; j <= batasAkhirY; j++){
        if(this.board[i][j] === value){
          return false
        }
      }
    }
    return true;
  }

  checkAll(x,y,value){
    let row = x;
    let col = y;
    let val = value

    if(this.checkRow(row,col,val) &&
    this.checkColumn(row,col,val) &&
    this.checkBox(row,col,val)){
      return true
    }
    return false
  }
}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_string)

console.log(game);
// console.log(game.checkRow(0,3,6));
// console.log(game.checkColumn(4,5,4));

// console.log(game.checkAll(0,0,0));
// console.log(game.checkAll(0,0,1));
// console.log(game.checkAll(0,0,2));
// console.log(game.checkAll(0,0,3));
// console.log(game.checkAll(0,0,4));
// console.log(game.checkAll(0,0,5));
// console.log(game.checkAll(0,0,6));
// console.log(game.checkAll(0,0,7));
// console.log(game.checkAll(0,0,8));
// console.log(game.checkAll(0,0,9));
// console.log('\n');
// console.log(game.checkAll(0,4,3));
// console.log(game.checkAll(1,7,2));

console.log(game.solve());
// console.log(game.getZeroIndex());

// console.log(game.board());
// Remember: this will just fill out what it can and not "guess"
// game.solve()

// console.log(game.board())


function shuffle(array) {
    let counter = array.length;
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}
