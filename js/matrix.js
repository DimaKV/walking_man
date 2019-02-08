class Matrix {
  constructor(elem, cols  = 7, rows = 7){
      this.elem = elem;
      this.cols = cols;
      this.rows = rows;
      this.cell = [];
  }

  create(){
      for(let i = 0; i < this.cols * this.rows; i++){
          const elem = document.createElement('div');
          //console.log(this.cols);
          elem.setAttribute('data-game', ' ');
          if (i % this.cols == 0) {
              elem.className = 'first-column';
          }
          this.elem.appendChild(elem);
      }
  }

  getCell(){

  }

  setCell(x, y, name, icon){
     const num =  this._calcNum(x, y);
     this.cell[num] = name;
     this.elem.children[num].setAttribute('data-game', name);
     this.elem.children[num].innerHTML = icon;
  }

  _calcNum(x, y){
      return (y - 1) * this.cols + x - 1;
  }

};