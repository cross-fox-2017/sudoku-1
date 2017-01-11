"use strict"

class Sudoku {
  constructor(board_string) {
    this.arr_board = []
    this.string_split = board_string.split("") // digunakan untukmembuat matriks sudoku utama (berubah)
    this.string_split_copy_1 = board_string.match(/.{1,3}/g) // digunakan untuk membuat matriks pengecekan box (berubah)
    this.columnFormat = []
    this.boxFormat = []

  }

  // solve(){
  //   var board_temp = this.board()
  //   var x = 0
  //   var y = 0
  //
  //   if(board_temp[x][y] === "0"){
  //     while(board_temp ){
  //
  //     }
  //
  //   }
  //
  // }

  // solve(x = 0,y = 0) {
  //
  //   var board_temp = this.board()
  //   // var x = 0// x-coordinate
  //   // var y = 0// coordinate
  //   var num_random = ["1","2","3","4","5","6","7","8","9"]
  //   var counter = 0

  //   while(x<9 || y<9){
  //     if(board_temp[x][y] == "0"){
  //       this.arr_board[x][y] = num_random[counter]
  //       if((this.checkRow() && this.checkColumn() && this.checkBox()) === true){
  //         this.arr_board[x][y] = num_random[counter]
  //         this.solve()
  //         //balik untuk assign nomor baru ??
  //       }
  //       if((this.checkRow() || this.checkColumn() || this.checkBox()) === false){
  //         this.arr_board[x][y] = "0"
  //         counter++
  //         this.solve()
  //         //balik untuk assign nomor baru ??
  //       }
  //     }
  //     else{
  //       if(x<9){
  //         x++
  //         if(x == 9){
  //           x = 0
  //           y++
  //           if(y == 9){
  //             return this.arr_board
  //           }
  //         }
  //       }
  //     }
  //
  //   }
  //
  //
  // }

  // solve() {
  //
  //   var board_temp = this.board()
  //   var num_random = ["1","2","3","4","5","6","7","8","9"]
  //   var counter = 0
  //
  //   while(this.x<9 || this.y<9){
  //     if(this.arr_board[this.x][this.y] == "0"){
  //       var currentx = this.x
  //       this.arr_board[this.x][this.y] = num_random[counter]
  //       if((this.checkRow() && this.checkColumn() && this.checkBox()) === false){
  //         counter++
  //         this.arr_board[this.x][this.y] = "0"
  //         //return solve()??
  //         //balik untuk assign nomor baru
  //       }
  //       // else{
  //       //   this.x++
  //       //   counter = 0
  //       //
  //       // }
  //       // counter = 0
  //     }
  //     else{
  //       if(this.x<9){
  //         this.x++
  //         if(this.x == 9){
  //           this.x = 0
  //           this.y++
  //           if(this.y == 9){
  //             return this.arr_board
  //           }
  //         }
  //       }
  //     }
  //   }
  //
  // }

  solve() {

    var board_temp = this.board()
    var num_random = ["1","2","3","4","5","6","7","8","9"]
    var counter = 0
    var x = 0
    var y = 0

    while(x<9 || y<9){
      if(this.arr_board[x][y] == "0"){
        this.arr_board[x][y] = num_random[counter]
        if(this.checkRow() === true && this.checkColumn() === true && this.checkBox() === true){
          this.arr_board[x][y] = num_random[counter]
          counter = 0

          //return solve()??
          //balik untuk assign nomor baru
        }
        else{
        //if((this.checkRow() || this.checkColumn() || this.checkBox()) === true){
          this.arr_board[x][y] = "0"
          counter++
          console.log(counter)

        }
        // else{
        //   this.x++
        //   counter = 0
        //
        // }
        // counter = 0
      }
      else{
        if(x<9){
          x++
          if(x == 9){
            x = 0
            y++
            if(y == 9){
              return this.arr_board
            }
          }
        }
      }
    }

  }


  // Returns a string representing the current state of the board
  board() {
    for(var i=0; i<9;i++){
      this.arr_board[i] = []
      for(var j=0; j<9;j++){
        this.arr_board[i].push(this.string_split[0])
        this.string_split.shift()
      }
    }
    return this.arr_board
  }

  checkRow(){
    for(var i=0; i<9; i++){
      var temp_arr = this.arr_board[i]
      for(var j=0; j<9; j++){
        var temp = this.arr_board[i][j]
        if(temp != "0" && j != temp_arr.indexOf(temp)){// jika isi dari sudoku tidak sama dengan 0 dan indeksnya tidak sesuai dengan angka yang dibandingkan
          if(this.arr_board[i].includes(temp) === true){
            return false
          }
        }
      }
    }
    return true
  }

  checkColumn(){
    this.changetoColumn()
    for(var i=0; i<9; i++){
      var temp_arr = this.columnFormat[i]
      for(var j=0; j<9; j++){
        var temp = this.columnFormat[i][j]
        if(temp != "0" && j != temp_arr.indexOf(temp)){// jika isi dari sudoku tidak sama dengan 0 dan indeksnya tidak sesuai dengan angka yang dibandingkan
          if(this.columnFormat[i].includes(temp) === true){
            return false
          }
        }
      }
    }
    return true
  }

  checkBox(){
    this.changetoBox()
    for(var i=0; i<9; i++){
      var temp_arr = this.boxFormat[i]
      for(var j=0; j<9; j++){
        var temp = this.boxFormat[i][j]
        if(temp != "0" && j != temp_arr.indexOf(temp)){// jika isi dari sudoku tidak sama dengan 0 dan indeksnya tidak sesuai dengan angka yang dibandingkan
          if(this.boxFormat[i].includes(temp) === true){
            return false
          }
        }
      }
    }
    return true
  }

  changetoColumn(){
    for(var i = 0; i < 9; i++){
      this.columnFormat.push([]);
    }
    for(i = 0; i < 9; i++){
      for(var j = 0; j < 9; j++){
        this.columnFormat[j].push(this.arr_board[i][j]);
      }
    }
    return this.columnFormat
  }

  changetoBox(){
    var dumIndex1 = 0
    var dumIndex2 = 0
    var dumIndex3 = 0
    for(var i=0; i<9; i++){
      this.boxFormat[i] = []
      if(i%3 === 0){
        for(var j=0; j<3; j++){
          for(var k=dumIndex1; k<dumIndex1+3; k++){
            this.boxFormat[i].push(this.arr_board[j][k])
          }
        }
        dumIndex1 = dumIndex1+3
      }
      else if(i%3 === 1){
        for(var j=3; j<6; j++){
          for(var k=dumIndex2; k<dumIndex2+3; k++){
            this.boxFormat[i].push(this.arr_board[j][k])
          }
        }
        dumIndex2 = dumIndex2+3
      }
      else{
        for(var j=6; j<9; j++){
          for(var k=dumIndex3; k<dumIndex3+3; k++){
            this.boxFormat[i].push(this.arr_board[j][k])
          }
        }
        dumIndex3 = dumIndex3+3
      }
    }
    return this.boxFormat
  }


}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku("105802000090076405200400819019007306762083090000061050007600030430020501600308900")

// Remember: this will just fill out what it can and not "guess"
//console.log(game.board())
console.log(game.solve())
// console.log(game.string_split.length)
 //
 // console.log(game.checkRow())
 // console.log(game.checkColumn())
 // console.log(game.checkBox())
