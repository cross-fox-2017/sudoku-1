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

    solve() {
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                if (this._papan[i][j] == 0) {
                    this._tampung = []; //Reset Tampung Jadi Kosong
                    var k = 0;
                    var p = 0;
                    //Mengambil data this._board_string Dalam Bentuk Horizontal dan Vertikal
                    while (k < this._papan[0].length) {
                        this._tampung.push(this._papan[i][p]) //Horizontal
                        this._tampung.push(this._papan[p][j]) //Vertikal
                        k++
                        p++
                    }

                    // Mengambil data this._board_string dalam bentuk 3x3

                    if (i < 3 && j < 3) {
                        for (var m = 0; m < 3; m++) {
                            for (var n = 0; n < 3; n++) {
                                this._tampung.push(this._papan[m][n])
                            }
                        }
                    } else if (i < 3 && j < 6) {
                        for (var m = 0; m < 3; m++) {
                            for (var n = 0; n < 3; n++) {
                                this._tampung.push(this._papan[m][n + 3])
                            }
                        }
                    } else if (i < 3 && j < 9) {
                        for (var m = 0; m < 3; m++) {
                            for (var n = 0; n < 3; n++) {
                                this._tampung.push(this._papan[m][n + 6])
                            }
                        }
                    } else if (i < 6 && j < 3) {
                        for (var m = 0; m < 3; m++) {
                            for (var n = 0; n < 3; n++) {
                                this._tampung.push(this._papan[m + 3][n])
                            }
                        }
                    } else if (i < 6 && j < 6) {
                        for (var m = 0; m < 3; m++) {
                            for (var n = 0; n < 3; n++) {
                                this._tampung.push(this._papan[m + 3][n + 3])
                            }
                        }
                    } else if (i < 6 && j < 9) {
                        for (var m = 0; m < 3; m++) {
                            for (var n = 0; n < 3; n++) {
                                this._tampung.push(this._papan[m + 3][n + 6])
                            }
                        }
                    } else if (i < 9 && j < 3) {
                        for (var m = 0; m < 3; m++) {
                            for (var n = 0; n < 3; n++) {
                                this._tampung.push(this._papan[m + 6][n])
                            }
                        }
                    } else if (i < 9 && j < 6) {
                        for (var m = 0; m < 3; m++) {
                            for (var n = 0; n < 3; n++) {
                                this._tampung.push(this._papan[m + 6][n + 3])
                            }
                        }
                    } else if (i < 9 && j < 99) {
                        for (var m = 0; m < 3; m++) {
                            for (var n = 0; n < 3; n++) {
                                this._tampung.push(this._papan[m + 6][n + 6])
                            }
                        }
                    }
                    // Mengecek Menungkinan Nilai Yang Muncul
                    var tampungNilai = []
                    for (var l = 1; l < 10; l++) {
                        if (this._tampung.indexOf(l.toString()) == -1) {
                            tampungNilai.push(l.toString())
                        }
                    }
                    // Memasukkan Nilai ke dalam Array Kosong
                    if (tampungNilai.length == 1) {
                        this._papan[i][j] = tampungNilai[0]
                    } else if (tampungNilai.length > 1) {
                        var acak = Math.floor(Math.random() * tampungNilai.length)
                        this._papan[i][j] = tampungNilai[acak]
                            //  break;
                            // this._papan[i][j] = tampungNilai.join("")
                    }
                }
            }
        }
        //Mengecek Apakah Masih ada Nilai yang belum terisi
        var status = true;
        for (var m = 0; m < 9; m++) {
            if (this._papan[m].indexOf('0') >= 0) {
                status = false
                break;
            }
        }
        //Mencetak Hasil

        // console.log(this._papan);  //Aktifkan Untuk Mengecek Animasi Pengisian dan returnnya matikan
        // console.log(status); //Aktifkan Untuk Mengecek Animasi Pengisian dan returnnya matikan

        //Jika board masih belum solve sistem akan recrusive
        if (status == false) {
            this._ulang++
            // console.log(this._ulang); //Aktifkan Untuk Mengecek Animasi Pengisian dan returnnya matikan
            this._papan = []
            this.board()
            this.solve()
        }
        return this._papan
    }

}

var game = new Sudoku(board_string)
console.log(game.board())
console.log(game.solve())
