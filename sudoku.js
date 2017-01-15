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

  checkPossibilities() {
    let possibilities = []
    let totalZero = 0;
    let str = ''

    for(let i = 0; i < 9; i++) {
      let arr = [];
      possibilities.push(arr)
      for(let j = 0; j < 9; j++){
        if(this.board[i][j] == 0) {
          totalZero += 1 
          let status = true;
          while(status){
            for(let k = 1; k < 10; k++){
              if(this.checkAll(i,j,k)){
                str += k.toString();
              } 
            }
            status = false;
            possibilities[i].push(str)
          }
          str = '';
        } else {
          str += '';
          possibilities[i].push(str)
        }
      }
    }
    return possibilities;
  }

  getZeroIndex(){
    let arrIndex = [];
    for(let i = 0; i < 9; i++){
      let arr = [];
      arrIndex.push(arr)
      for(let j = 0; j < 9; j++){
        if(this.board[i][j] === 0){
          arrIndex[i].push(j)
        }
        else {
          arrIndex[i].push('');
        }
      }
    }
    return arrIndex;
  }

  solve() {
    let angka = 0;
    for(let i = 0; i < 9; i++){
      for(let j = 0; j < 9; j++){
        if(this.board[i][j] === 0){
          angka = 0;
          let status = true;
          let x = 0;
          while(status){
            let randomPossibilities = randomPossible(this.checkPossibilities()[i][j]);
            if(this.checkAll(i,j,randomPossibilities)){
              angka = randomPossibilities;
              status = false
            } else if(x > 1) {
              this.board = this.makeBoard(board_string);
              this.solve()
              x = 0
            }
            x++
          }
          this.board[i][j] = angka;
          console.log(this.board);
          console.log('\n');
        }
      }
    }
    return this.board;
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
    let batasAwalX  = 0;
    let batasAkhirX = 0;
    let batasAwalY = 0;
    let batasAkhirY = 0;

    // cek box 1 - 3
    for(let i = 0, j = 2; i < 7; i += 3, j += 3){
      if(x >= 0 && x <= 2 && y >= i && y <= j){
        batasAwalX  = 0;
        batasAkhirX = 2;
        batasAwalY = i;
        batasAkhirY = j;
      }
    }

    // cek box 4 - 6
    for(let i = 0, j = 2; i < 7; i += 3, j += 3){
      if(x >= 3 && x <= 5 && y >= i && y <= j){
        batasAwalX  = 3;
        batasAkhirX = 5;
        batasAwalY = i;
        batasAkhirY = j;
      }
    } 

    // cek box 7 - 9
    for(let i = 0, j = 2; i < 7; i += 3, j += 3){
      if(x >= 6 && x <= 8 && y >= i && y <= j){
        batasAwalX  = 6;
        batasAkhirX = 8;
        batasAwalY = i;
        batasAkhirY = j;
      }
    }
    
    // Mulai Cek Box
    for(let i = batasAwalX; i <= batasAkhirX; i++){
      for(let j = batasAwalY; j <= batasAkhirY; j++){
        if(this.board[i][j] === value){
          return false
        }
      }
    }
    return true;
  }

  checkAll(x,y,v){
    if(this.checkRow(x,y,v) && this.checkColumn(x,y,v) && this.checkBox(x,y,v)){
      return true
    }
    return false
  }
}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = '619030040270061008000047621486302079000014580031009060005720806320126057160400030'

var game = new Sudoku(board_string)

console.log(game);

console.log(game.solve());

// console.log(game.checkPossibilities());
// console.log(game.getZeroIndex());


// Helper Function
function randomPossible(str){
    str = str.charAt(Math.floor(Math.random() * str.length));
    return parseInt(str);
}

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

