"use strict"
// const fs = require('fs')

class Sudoku {
  constructor(board_string) {
    // this.board_string = fs.readFileSync('set-01_sample.unsolved.txt').toString().split("\n")[0]
    this.board_string = board_string
    this.result = []
    this.box = []
  }

  solve() {

  }

  printBoard(){
    console.log(`Before :\n`);
    // console.log(temp);
    for(var i = 0 ; i < 9 ; i++){
      let kolom1 = String(this.box[i]).replace(/,/g, ' ').slice(0, 5)
      let kolom2 = String(this.box[i]).replace(/,/g, ' ').slice(6, 11)
      let kolom3 = String(this.box[i]).replace(/,/g, ' ').slice(12, 17)

    console.log(` ${kolom1} | ${kolom2} | ${kolom3}`);
    if(i === 2 || i === 5){
    console.log(`----------------------`);
      }
    }
  }

  // Returns a string representing the current state of the board
  board() {
    for (var i = 0; i < 9; i++) { //// print board
      var tempArr = []
      for (var j = 0; j < 9; j++) {
        tempArr.push(this.board_string.slice(0,1))
        // console.log(this.board_string);
        this.board_string = this.board_string.slice(1)
      }
      this.box.push(tempArr)
    }
    return this.box
  }

  checkRow(x, y, nilai){

    // var row = this.box
    for (var i = 0; i < 9; i++) {
      if (this.box[x][i] == nilai) {
        return false
      }
    }
    return true
  }

  checkCollom(x,y,nilai){
    for (var i = 0; i < 9; i++) {
      if (this.box[i][y] == nilai) {
        return false
      }
    }
    return true
  }

  checkBox(){
    var tempBox = []
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3 ; j++) {
///////////////////////////////////////////////////////////////////////////////
        if (this.box[i][j] == '0') {
          if (i < 3 && j < 3) {
            // untuk mencari box pertama dari kiri
            for (var k = 0; k < 3; k++) {
              for (var l = 0; l < 3; l++) {

                // tempBox.push(this.box[k][l])
                // console.log(this.box[k][l]);
              }
            }
            // console.log('box 1');
            // return tempBox
          }
///////////////////////////////////////////////////////////////////////////////
          if (i < 3 && j < 3) {
            // untuk mencari box dari kiri
            for (var k = 0; k < 3; k++) {
              for (var l = 0; l < 3; l++) {

                // tempBox.push(this.box[k][l+3])
              }
            }
            // console.log('box 2');
            // return tempBox
          }
///////////////////////////////////////////////////////////////////////////////
          if (i < 3 && j < 3) {
            // untuk mencari box ketiga
            for (var k = 0; k < 3; k++) {
              for (var l = 0; l < 3; l++) {

                // tempBox.push(this.box[k][l+6])

              }
            }
            // console.log('box 3');
            // return tempBox
          }
///////////////////////////////////////////////////////////////////////////////
          if (i < 3 && j < 3) {
            // untuk mencari box keempat
            for (var k = 0; k < 3; k++) {
              for (var l = 0; l < 3; l++) {
                // tempBox.push(this.box[k+3][l])
              }
            }
            // console.log('box 4');
            // return tempBox
          }
///////////////////////////////////////////////////////////////////////////////
          if (i < 3 && j < 3) {
            //untuk mencari box ke lima
            for (var k = 0; k < 3; k++) {
              for (var l = 0; l < 3; l++) {
                tempBox.push(this.box[k+6][l])
              }
            }
            console.log('box 5');
            return tempBox
          }
        }
      }
    }
  }

  addRandom(){
    for (var i = 0; i < 9; i++) {
      let random = Math.ceil(Math.random() * 9).toString()
      for (var j = 0; j < 9; j++) {
        if (this.box[i][j] == '0') {
          this.box[i][j] = random
          // console.log(this.box);
        }
      }
    }
    return this.box
  }


}

var game = new Sudoku('105802000090076405200400819019007306762083090000061050007600030430020501600308900')
// var fs = require('fs')
// var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
//   .toString()
//   .split("\n")[0]
//
// var game = new Sudoku(board_string)
// Remember: this will just fill out what it can and not "guess"
// game.solve()
game.board()
game.printBoard()
console.log(game.checkBox());
// console.log(game.checkBox());
// console.log(game.checkRow(1)
// console.log(game.checkRow(1);
// console.log(game.checkRow(0,1,4));
// console.log(game.checkCollom(1,0,4));
// console.log(game.checkRow(1,4));
// console.log(game.checkRow(1,5));
// console.log(game.checkRow(1,6));

// console.log(game.addRandom());
