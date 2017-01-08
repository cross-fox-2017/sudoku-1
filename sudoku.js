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

    board() {
        // console.log("Sebelum :");
        let count = 0
        for (var i = 0; i < 9; i++) {
            var arrPapan = [];
            for (var j = 0; j < 9; j++) {
                arrPapan.push(this._board_string[count])
                count++;
            }
            this._papan.push(arrPapan)
        }
        return this._papan;
    }

}
