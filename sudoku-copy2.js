checkPossibilities() {
    let possibilities = []
    let totalZero = 0;
    let str = ''

    for(let i = 0; i < 9; i++) {
      for(let j = 0; j < 9; j++){
        if(this.board[i][j] == 0) {
          totalZero += 1 
          let status = true;
          while(status){
            for(let k = 1; k < 10; k++){
              if(this.checkAll(i,j,k)){
                str += k.toString();
              } 
            }
            status = false;
            possibilities.push(str)
          }
          str = '';
        }
      }
    }
    return possibilities;
  }

solve() {
    let arrIndex = [];
    let angka = 0;
    for(let i = 0; i < 9; i++){
      let arrIndex2 = []
      arrIndex.push(arrIndex2)
      for(let j = 0; j < 9; j++){
        if(this.board[i][j] == 0) {
          angka = 0;
          let status = true;
          let x = 0;

          while(status){
            let random = this.randomNumber();
            if(this.checkAll(i,j,random)){
              angka = random;
              arrIndex[i].push(j);
              status = false;
              console.log(arrIndex);
            } else if(x > 50){
              this.board = this.makeBoard(board_string);
              this.solve()
              x = 0
            }
            x++
          }
          this.board[i][j] = angka;
          console.log(this.board);
          console.log('\n');
        }
      }
    }
    return this.board;
  }

  randomNumber(){
    return Math.floor(Math.random() * 9) + 1;
  }


  for(let k = i; k >= 0; k--){
                for(let l = j; l >= 0; l--){
                  let status2 = true
                  while(status2){
                    randomPossibilities = randomPossible(this.checkPossibilities()[i][j]);
                    if(this.checkAll(k,i,randomPossibilities)){
                      angka = randomPossibilities;
                      status2 = false
                    } else if(x > 10) {
                      this.board = this.makeBoard(board_string);
                      this.solve();
                    }
                  }
                }
              }


  solve() {
    let angka = 0;
    for(let i = 0; i < 9; i++){
      for(let j = 0; j < 9; j++){
        if(this.board[i][j] === 0){
          angka = 0;
          let status = true;
          let x = 0;
          while(status){
            var newArray = this.checkPossibilities().map(function(arr) {return arr.slice()});
            let randomPossibilities = randomPossible(newArray[i][j]);
            if(this.checkAll(i,j,randomPossibilities)){
              angka = randomPossibilities;
              status = false
            } else if(x > 10) {
              this.board = this.makeBoard(board_string);
              this.solve()
              x = 0
            }
            x++
          }
          this.board[i][j] = angka;
          console.log(this.board);
          console.log('\n');
        }
      }
    }
    return this.board;
  }