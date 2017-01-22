"use strict"

class Sudoku {
    constructor(board_string) {
        this.array = [];
        this.board_string = '619030040270061008000047621486302079000014580031009060005720806320106057160400030';
    }

    // Returns a string representing the current state of the board
    board() {
        var boardSplit = this.board_string.split('');
        for (var i = 0; i < 9; i++) {
            this.array.push([]);
            for (var j = 0; j < 9; j++) {
                this.array[i].push(boardSplit.shift());
            }
        }
        return this.array;
    }

    cek_baris(barisKe, val) {
        var tmp = [];
        var possibilities = [];
        for (var i = 0; i < 9; i++) {
            tmp.push(this.array[barisKe][i] == val);
        }
        // console.log(tmp.indexOf(true))
        if (tmp.indexOf(true) == -1) {
            possibilities.push(val)
        }
        return possibilities;
    }

    cek_kolom(kolomKe, val) {
        var tmp = [];
        var possibilitiesKolom =[]
        for (var i = 0; i < 9; i++) {
            tmp.push(this.array[i][kolomKe] == val);
        }
        if (tmp.indexOf(true) == -1) {
            possibilitiesKolom.push(val)
        }
        return possibilitiesKolom;
    }

    cek_blok(boxBarisKe, boxKolomKe, val) {
        var tmp = [];
        var possibilitiesBox = []
        if (boxBarisKe == 0 && boxKolomKe == 0) {
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 3; j++) {
                    tmp.push(this.array[i][j] == val)
                }
            }
            if (tmp.indexOf(true) == -1) {
                possibilitiesBox.push(val)
            }
            return possibilitiesBox;
        }
        if (boxBarisKe == 0 && boxKolomKe == 1) {
            for (var i = 0; i < 3; i++) {
                for (var j = 3; j < 6; j++) {
                    tmp.push(this.array[i][j] == val)
                }
            }
            if (tmp.indexOf(true) == -1) {
                possibilitiesBox.push(val)
            }
            return possibilitiesBox;
        }
        if (boxBarisKe == 0 && boxKolomKe == 2) {
            for (var i = 0; i < 3; i++) {
                for (var j = 6; j < 9; j++) {
                    tmp.push(this.array[i][j] == val)
                }
            }
            if (tmp.indexOf(true) == -1) {
                possibilitiesBox.push(val)
            }
            return possibilitiesBox;
        }
        if (boxBarisKe == 1 && boxKolomKe == 0) {
            for (var i = 3; i < 6; i++) {
                for (var j = 0; j < 3; j++) {
                    tmp.push(this.array[i][j] == val)
                }
            }
            if (tmp.indexOf(true) == -1) {
                possibilitiesBox.push(val)
            }
            return possibilitiesBox;
        }
        if (boxBarisKe == 1 && boxKolomKe == 1) {
            for (var i = 3; i < 6; i++) {
                for (var j = 3; j < 6; j++) {
                    tmp.push(this.array[i][j] == val)
                }
            }
            if (tmp.indexOf(true) == -1) {
                possibilitiesBox.push(val)
            }
            return possibilitiesBox;
        }
        if (boxBarisKe == 1 && boxKolomKe == 2) {
            for (var i = 3; i < 6; i++) {
                for (var j = 6; j < 9; j++) {
                    tmp.push(this.array[i][j] == val)
                }
            }
            if (tmp.indexOf(true) == -1) {
                possibilitiesBox.push(val)
            }
            return possibilitiesBox;
        }
        if (boxBarisKe == 2 && boxKolomKe == 0) {
            for (var i = 6; i < 9; i++) {
                for (var j = 0; j < 3; j++) {
                    tmp.push(this.array[i][j] == val)
                }
            }
            if (tmp.indexOf(true) == -1) {
                possibilitiesBox.push(val)
            }
            return possibilitiesBox;
        }
        if (boxBarisKe == 2 && boxKolomKe == 1) {
            for (var i = 6; i < 9; i++) {
                for (var j = 3; j < 6; j++) {
                    tmp.push(this.array[i][j] == val)
                }
            }
            if (tmp.indexOf(true) == -1) {
                possibilitiesBox.push(val)
            }
            return possibilitiesBox;
        }
        if (boxBarisKe == 2 && boxKolomKe == 2) {
            for (var i = 6; i < 9; i++) {
                for (var j = 6; j < 9; j++) {
                    tmp.push(this.array[i][j] == val)
                }
            }
            if (tmp.indexOf(true) == -1) {
                possibilitiesBox.push(val)
            }
            return possibilitiesBox;
        }
    }

    // isi_angka() {
    //   for (var i = 0; i < 9; i++){
    //     for (var j = 0; j < 9; j++) {
    //       if (this.array[i][j] == 0) {
    //         this.array[i][j] = Math.ceil(Math.random()*9).toString();
    //       }
    //     }
    //   }
    //   return this.array;
    // }

    // solve() {
    //   if(this.cek_baris == true && this.cek_kolom == true && this.cek_blok == true) {
    //     return this.array;
    //   } else {
    //     this.array = [];
    //     this.isi_angka();
    //     this.solve();
    //   }
    // }
}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
// var fs = require('fs')
// var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
//   .toString()
//   .split("\n")[0]

var game = new Sudoku('board_string')

// Remember: this will just fill out what it can and not "guess"
// game.solve()

console.log(game.board())
var possibilities0 = [];
var possibilities1 = [];
var possibilities2 = [];
var possibilities3 = [];
var possibilities4 = [];
var possibilities5 = [];
var possibilities6 = [];
var possibilities7 = [];
var possibilities8 = [];
for (var i = 1; i < 10; i++) {
    possibilities0.push(game.cek_baris(0, i))
    possibilities1.push(game.cek_baris(1, i))
    possibilities2.push(game.cek_baris(2, i))
    possibilities3.push(game.cek_baris(3, i))
    possibilities4.push(game.cek_baris(4, i))
    possibilities5.push(game.cek_baris(5, i))
    possibilities6.push(game.cek_baris(6, i))
    possibilities7.push(game.cek_baris(7, i))
    possibilities8.push(game.cek_baris(8, i))
}
console.log(
    possibilities0.join('').split(''),
    possibilities1.join('').split(''),
    possibilities2.join('').split(''),
    possibilities3.join('').split(''),
    possibilities4.join('').split(''),
    possibilities5.join('').split(''),
    possibilities6.join('').split(''),
    possibilities7.join('').split(''),
    possibilities8.join('').split(''));

var possibilitiesKolom0 = [];
var possibilitiesKolom1 = [];
var possibilitiesKolom2 = [];
var possibilitiesKolom3 = [];
var possibilitiesKolom4 = [];
var possibilitiesKolom5 = [];
var possibilitiesKolom6 = [];
var possibilitiesKolom7 = [];
var possibilitiesKolom8 = [];
for (var i = 1; i < 10; i++) {
    possibilitiesKolom0.push(game.cek_kolom(0, i))
    possibilitiesKolom1.push(game.cek_kolom(1, i))
    possibilitiesKolom2.push(game.cek_kolom(2, i))
    possibilitiesKolom3.push(game.cek_kolom(3, i))
    possibilitiesKolom4.push(game.cek_kolom(4, i))
    possibilitiesKolom5.push(game.cek_kolom(5, i))
    possibilitiesKolom6.push(game.cek_kolom(6, i))
    possibilitiesKolom7.push(game.cek_kolom(7, i))
    possibilitiesKolom8.push(game.cek_kolom(8, i))
}
console.log(
    possibilitiesKolom0.join('').split(''),
    possibilitiesKolom1.join('').split(''),
    possibilitiesKolom2.join('').split(''),
    possibilitiesKolom3.join('').split(''),
    possibilitiesKolom4.join('').split(''),
    possibilitiesKolom5.join('').split(''),
    possibilitiesKolom6.join('').split(''),
    possibilitiesKolom7.join('').split(''),
    possibilitiesKolom8.join('').split(''));

    var possibilitiesBox0 = [];
    var possibilitiesBox1 = [];
    var possibilitiesBox2 = [];
    var possibilitiesBox3 = [];
    var possibilitiesBox4 = [];
    var possibilitiesBox5 = [];
    var possibilitiesBox6 = [];
    var possibilitiesBox7 = [];
    var possibilitiesBox8 = [];
    for (var i = 1; i < 10; i++) {
        possibilitiesBox0.push(game.cek_blok(0,0, i))
        possibilitiesBox1.push(game.cek_blok(0,1, i))
        possibilitiesBox2.push(game.cek_blok(0,2, i))
        possibilitiesBox3.push(game.cek_blok(1,0, i))
        possibilitiesBox4.push(game.cek_blok(1,1, i))
        possibilitiesBox5.push(game.cek_blok(1,2, i))
        possibilitiesBox6.push(game.cek_blok(2,0, i))
        possibilitiesBox7.push(game.cek_blok(2,1, i))
        possibilitiesBox8.push(game.cek_blok(2,2, i))
    }
    console.log(
        possibilitiesBox0.join('').split(''),
        possibilitiesBox1.join('').split(''),
        possibilitiesBox2.join('').split(''),
        possibilitiesBox3.join('').split(''),
        possibilitiesBox4.join('').split(''),
        possibilitiesBox5.join('').split(''),
        possibilitiesBox6.join('').split(''),
        possibilitiesBox7.join('').split(''),
        possibilitiesBox8.join('').split(''));
// var barisArr = []
// var kolomArr = []
// var blokArr = []
// for (var i = 0; i < 9; i++) {
//   for (var j = 1; j < 10; j++) {
//     console.log(game.cek_baris(i,j))
//     // game.cek_kolom(i,j)
//     // blokArr.push(game.cek_blok(0,0,i))
//   }
// }
// console.log(barisArr, kolomArr, blokArr)
// console.log(game.isi_angka())
// console.log(game.solve());
