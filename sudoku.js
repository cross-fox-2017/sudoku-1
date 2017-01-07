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
        return `Angka ${cekNum} sudah muncul ${cekNumCount} kali dalam row ${row}, maka SALAH`
      }
      else{
        return `Angka ${cekNum} hanya muncul ${cekNumCount} kali dalam row ${row}, maka BENAR`
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
        return `Angka ${cekNum} sudah muncul ${cekNumCount} kali dalam column ${col}, maka SALAH`
      }
      else{
        return `Angka ${cekNum} hanya muncul ${cekNumCount} kali dalam column ${col}, maka BENAR`
      }
    }
  }

    cekBox(row, col, cekNum){
      let startSplit = 0;
      let boxBoard = []
      this.makeBoard();
      this.board[row][col] = cekNum.toString()

      // push tiap 3 angka --> akan ada 27 array (81 / 3)
      for (var i = 0; i < this.board.length; i++) {
        let count = 0
        for (var j = 0; j < 3; j++) {
          let subBoard =[]
          for (var k = 0; k < 3; k++) {
            subBoard.push(this.board[i][count])
            count++
          }
          boxBoard.push(subBoard)
        }
      }

      // bikin box jadi berbentuk horizontal (rows)....
      // dari 3 angka tadi diconcat....
      let newBox = []

        for (var b = 0; b < 3; b++) {
          let box = boxBoard[b].concat(boxBoard[b+3])
            box = box.concat(boxBoard[b+6])
            newBox.push(box)
        }
        for (var d = 9; d < 12; d++) {
          let box = boxBoard[d].concat(boxBoard[d+3])
            box = box.concat(boxBoard[d+6])
            newBox.push(box)
        }

        for (var d = 18; d < 21; d++) {
          let box = boxBoard[d].concat(boxBoard[d+3])
            box = box.concat(boxBoard[d+6])
            newBox.push(box)
        }

      // cek koordinat ada di box keberapa? .....
        let posisiBox = 0;
        // box1...
        if (row <= 2 && col <= 2) {
          posisiBox = 0
        }
        // box 2..
        if (row <= 2 && col >= 3 && col <= 5 ) {
          posisiBox = 1
        }
        // box 3..
        if (row <= 2 && col >= 6 ) {
          posisiBox = 2
        }
        // box 4..
        if (row >= 3 && row <= 5 && col <= 2) {
          posisiBox = 3
        }
        // box 5..
        if (row >= 3 && row <= 5 && col >= 3 && col <= 5 ) {
          posisiBox = 4
        }
        // box 6..
        if (row >= 3 && row <= 5 && col >= 6) {
          posisiBox = 5
        }
        // box 7..
        if (row >= 6 && col <= 2) {
          posisiBox = 6
        }
        // box 8..
        if (row >= 6 && col >= 3 && col <= 5  ) {
          posisiBox = 7
        }
        // box 9..
        if (row >= 6 && col >= 6) {
          posisiBox = 8
        }


        // cek apakah num yang diinput sudah ada di box
        let theBox = newBox[posisiBox]
        let cekNumCount = 0;

        for (let r = 0; r < 9; r++) {
          if (cekNum == theBox[r]) {
            cekNumCount++
          }
        }

        if (cekNum == 0) {
          return 'Angka yang dimasukkan 0, maka dianggap BENAR'
        }
        else {
          if (cekNumCount > 1) {
            return `Angka ${cekNum} sudah muncul ${cekNumCount} kali dalam box ${posisiBox + 1}, maka SALAH`
          }
          else{
            return `Angka ${cekNum} hanya muncul ${cekNumCount} kali dalam box ${posisiBox + 1}, maka BENAR`
          }
        }
      }
      solve() {

      }
    }



// The file has newlines at the end of each line,
// so we call split to remove it (\n)
// var fs = require('fs')
// var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
//   .toString()
//   .split("\n")[1]

var game = new Sudoku('619030040270061008000047621486302079000014580031009060005720806320126057160400030')

// Remember: this will just fill out what it can and not "guess"

console.log(game.makeBoard())

console.log(game.cekRow(1,1,3));
console.log(game.cekCol(2,1,8));
console.log(game.cekBox(7,2,5));

// game.solve()
