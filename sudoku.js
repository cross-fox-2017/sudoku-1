"use strict"

class Sudoku {
  constructor(board_string) {
    this.numbers = [1,2,3,4,5,6,7,8,9];
    this.text = board_string;
    this.strings = [];
    this.board = [];
    this.boxRow = [];
  }

  checkRow(row, value) {
    let countChar = 0;
    for (let i = 0; i < 9; i++) {
      if (this.board[row][i] == value) {
        countChar++;
      }
    }
    if (countChar > 1) {
      return false;
    }
    else {
      return true;
    }
  }

  checkColumn(column, value) {
    let countChar = 0;
    for (let i = 0; i < 9; i++) {
      if (this.board[i][column] == value) {
        countChar++;
      }
    }
    if (countChar > 1) {
      return false;
    }
    else {
      return true;
    }
  }

  boxConvert(row, column) {
    for (let k = 0; k < 9; k++) {
      this.boxRow.push([]);
    }

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        this.boxRow[0].push(this.board[i][j]);
        if (row == i && column == j) {
          return 0;
        }
      }
    }

    for (var i = 0; i < 3; i++) {
      for (var j = 3; j < 6; j++) {
        this.boxRow[1].push(this.board[i][j]);
        if (row == i && column == j) {
          return 1;
        }
      }
    }

    for (var i = 0; i < 3; i++) {
      for (var j = 6; j < 9; j++) {
        this.boxRow[2].push(this.board[i][j]);
        if (row == i && column == j) {
          return 2;
        }
      }
    }

    for (var i = 3; i < 6; i++) {
      for (var j = 0; j < 3; j++) {
        this.boxRow[3].push(this.board[i][j]);
        if (row == i && column == j) {
          return 3;
        }
      }
    }

    for (var i = 3; i < 6; i++) {
      for (var j = 3; j < 6; j++) {
        this.boxRow[4].push(this.board[i][j]);
        if (row == i && column == j) {
          return 4;
        }
      }
    }

    for (var i = 3; i < 6; i++) {
      for (var j = 6; j < 9; j++) {
        this.boxRow[5].push(this.board[i][j]);
        if (row == i && column == j) {
          return 5;
        }
      }
    }

    for (var i = 6; i < 9; i++) {
      for (var j = 0; j < 3; j++) {
        this.boxRow[6].push(this.board[i][j]);
        if (row == i && column == j) {
          return 6;
        }
      }
    }

    for (var i = 6; i < 9; i++) {
      for (var j = 3; j < 6; j++) {
        this.boxRow[7].push(this.board[i][j]);
        if (row == i && column == j) {
          return 7;
        }
      }
    }

    for (var i = 6; i < 9; i++) {
      for (var j = 6; j < 9; j++) {
        this.boxRow[8].push(this.board[i][j]);
        if (row == i && column == j) {
          return 8;
        }
      }
    }
  }

  checkBox(box, value) {
    let countChar = 0;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (this.boxRow[box][j] == value) {
          countChar++;
        }
      }
    }
    if (countChar > 1) {
      return false;
    }
    else {
      return true;
    }
  }

  solve() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (this.board[i][j] === 0) {
          let guess = Math.floor(Math.random() * 9 + 1);
          let checkRows = this.checkRow(i, guess);
          let checkColumns = this.checkColumn(j, guess);
          let index = this.boxConvert(i,j);
          let checkBoxs = this.checkBox(index, guess);
          do {
            guess = Math.floor(Math.random() * 9 + 1);
          }
          while (checkRows && checkColumns && checkBoxs);

          if (checkRows && checkColumns && checkBoxs) {
            this.board[i][j] = guess;
          }
        }
      }
    }
    return this.board;
  }

  // Returns a string representing the current state of the board
  makeBoard() {
    for (let i = 0; i < 81; i+=9) {
      this.strings.push(this.text.substr(i,9));
    }
    for (let j = 0; j < 9; j++) {
      this.board.push(this.strings[j].split(""));
      for (let k = 0; k < 9; k++) {
        this.board[j][k] = parseInt(this.board[j][k]);
      }
    }
    return this.board;
  }
}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_strings = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_strings);

// Remember: this will just fill out what it can and not "guess"

console.log(game.makeBoard());
// console.log(game.checkRow(0,1));
// game.solve();
console.log(game.boxConvert(0,1));
console.log(game.checkBox(1,1));
