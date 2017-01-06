"use strict"

class Sudoku {
  constructor(board_string) {
    this.board = [];
    // this.num = [6,1,9,0,3,0,0,4,0,2,7,0,0,6,1,0,0,8,0,0,0,0,4,7,6,2,1,4,8,
    //           6,3,0,2,0,7,9,0,0,0,0,1,4,5,8,0,0,3,1,0,0,9,0,6,0,0,0,5,7,2,0,
    //           8,0,6,3,2,0,1,2,6,0,5,7,1,6,0,4,0,0,0,3,0]

    this.num = board_string;
  }

  // Returns a string representing the current state of the board
  makeBoard() {
    let numCount = 0

    for (let i = 0; i < 9; i++) {
      let subBoard = [];
      for (let j = 0; j < 9; j++) {
        subBoard.push( this.num[numCount] )
        numCount++
      }
      this.board.push(subBoard)
    }
    return this.board;
  }

  cekRow(row, col, cekNum){
    let cekNumCount = 0;
    this.board[row][col] = cekNum

    for (let i = 0; i < 9; i++) {
      if (cekNum === this.board[row][i]) {
        cekNumCount++
      }
    }

    if (cekNum == 0) {
      return 'Angka yang dimasukkan 0, maka dianggap BENAR'
    }
    else {
      if (cekNumCount > 1) {
        return `Angka ${cekNum} sudah ada dalam row, maka SALAH`
      }
      else{
        return `Angka ${cekNum} belum ada dalam row maka BENAR`
      }
    }

  }

  cekCol(row, col, cekNum){

    let cekNumCount = 0;
    this.board[row][col] = cekNum

    for (let i = 0; i < 9; i++) {
      if (cekNum === this.board[i][col]) {
        cekNumCount++
      }
    }

    if (cekNum == 0) {
      return 'Angka yang dimasukkan 0, maka dianggap BENAR'
    }
    else {
      if (cekNumCount > 1) {
        return `Angka ${cekNum} sudah ada dalam column, maka SALAH`
      }
      else{
        return `Angka ${cekNum} belum ada dalam column, maka BENAR`
      }
    }
  }

  cekBox(row, col, cekNum){
    let cekNumCount = 0;

    if (row < 3) {
      row = 0;

      // box 1 - 3.....
      for (var a = 0; a < 3; a++) {
        // box 1
        if (col < 3) {
          this.board[row][col] = cekNum
          col = 0;
          for (var b = col; b < 3+col; b++) {
            if (cekNum === this.board[a][b]) {
              cekNumCount++
            }
          }
        }
        // box 2
        if (col >= 3 && col < 6) {
          col = 3
          for (var c = col; c < 3+col; c++) {
            if (cekNum === this.board[a][c]) {
              cekNumCount++
            }
          }
        }

        // box 3
        if (col >= 6) {
          col = 6
          for (var d = col; d < 3+col; d++) {
            if (cekNum === this.board[a][d]) {
              cekNumCount++
            }
          }
        }

      }
    }
    if (cekNum == 0) {
      return 'Angka yang dimasukkan 0, maka dianggap BENAR'
    }
    else {
      if (cekNumCount > 1) {
        return `Angka ${cekNum} sudah ada dalam box, maka SALAH`
      }
      else{
        return `Angka ${cekNum} belum ada dalam box, maka BENAR`
      }
    }


  }

  solve() {}
}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
// var fs = require('fs')
// var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
//   .toString()
//   .split("\n")[1]
//
var game = new Sudoku('619030040270061008000047621486302079000014580031009060005720806320126057160400030')

// Remember: this will just fill out what it can and not "guess"

// game.solve()

console.log(game.makeBoard())
console.log(game.cekRow(1,1,3));
console.log(game.cekCol(2,1,1));
//console.log(game.cekBox(2,5,1));
