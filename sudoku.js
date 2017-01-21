"use strict"
/*
class Sudoku {
  constructor(board_string) {
    this.board_string=board_string;
  }

  checkRow() {

  }
  checkColumn() {

  }
  checkBox() {

  }
  board() {


  }
  cekZero(string){
    var x='';
    for(var i=0;i<string.length;i++){
      if(string[i]===0){
        x += 'indeks'+ i + '\n'
      }
    }
    return x;
  }
}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_string)

// Remember: this will just fill out what it can and not "guess"
game.solve()

console.log(game.board())
*/
function cekZero(num){
  var x='';
  for(var i=0;i<num.length;i++){
    if(num ==='0'){
      x += 'indeks yang bisa diisi: '+ i + '\n'
    }
  }
  return x;
}

console.log(cekZero("105802000090076405200400819019007306762083090000061050007600030430020501600308900"))
var arr=[[],[],[],[],[],[],[],[],[]];
var arrcek=[];
function masukBox(num){
  var tanda=0;
  var akhir=9;
  for(var i=0; i< arr.length;i++){
    if(akhir<=81){
      for(var j=tanda;j<akhir;j++){
        arr[i].push(num[j]);
      }
      tanda +=9
      akhir +=9
    }
  }
  return arr;
}

function boxBoxs(array){

   var arr1=[];
   var arr2=[];
   var arr3=[];
    for(var l=0;l<array.length;l++ ){

       arr1.push(array[l][0]);
       arr1.push(array[l][1]);
       arr1.push(array[l][2]);

    }

    for(var m=0;m<array.length;m++){
     arr2.push(array[m][3]);
     arr2.push(array[m][4]);
     arr2.push(array[m][5]);
    }


     for(var n=0;n<array.length;n++){
     arr3.push(array[n][6]);
     arr3.push(array[n][7]);
     arr3.push(array[n][8]);
   }
   arrcek= [arr1,arr2,arr3];
  return arrcek

}

masukBox("105802000090076405200400819019007306762083090000061050007600030430020501600308900")

console.log(arr);
console.log(" ")

boxBoxs(arr);

function cekRow(x,y,nilai){
  var n= arr[x][y];
  if(n==='0'){
    for(var i=0;i<arr[x].length;i++){
      if(nilai === arr[x][i]){
        return false
      }
    }
  return true;
  }
  else{
    return "Angka ini tidak bisa dirubah! "
  }
}

function checkColumn(x,y,nilai){
  var n= arr[x][y];
  if(n==='0'){
    for(var i=0; i<arr.length;i++){
      if(nilai === arr[i][y]){
        return false;
      }
    }
    return true
  }
  else{
    return "Angka ini tidak bisa dirubah! "
  }
}

function cekBox(x,y,nilai){
  var n= arr[x][y];
  if(n==='0'){
    for(var i=0; i<arrcek.length;i++){
      if(nilai === arrcek[i][y]){
        return false;
      }
    }
    return true
  }
  else{
    return "Angka ini tidak bisa dirubah! "
  }
}
// function solve(arr){
//   var start=0;
//   var end=9;
//   for(var i=0; i< arr.length;i++){
//     for(var j=0;j<arr[i].length;j++){
//       if(end<=27){
//         for(var k=start;k<end;k++){
//           arr[i].push(num[j]);
//         }
//         start +=9
//         end +=9
//       }
//     }
//   }
// }
