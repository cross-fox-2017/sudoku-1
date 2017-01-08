"use strict"

var fs = require('fs')
var board_string = fs.readFileSync('data.txt').toString().split("\n")[0].trim()

class Sudoku {
    constructor(board_string) {
        this._board_string = board_string;
        this._papan = [];
        this._tampung = [];
        this._ulang = 0;
    }

}
