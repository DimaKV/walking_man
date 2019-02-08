class Snake {
    constructor(matrix, x, y, direct){
        this.matrix = matrix;
        this.x = x;
        this.y = y;
        this.direct = direct;
    }
    show(){
        this.matrix.setCell(this.x, this.y, 'snake', '<i class="fas fa-running"></i>');
    }

    move(){
        let icon = '<i class="fas fa-running"></i>';
        let oldX = this.x;
        let oldY = this.y;
        this.matrix.setCell(this.x, this.y, ' ', ' ');
        //console.log('кол-во колонок = ' + this.matrix.cols, 'координата х = ' + this.x);
        switch(this.direct){
            case 'left':
                this.x--;
                icon = '<i class="fas fa-running fa-flip-horizontal"></i>';
                break;
            case 'up':
                this.y--;
                icon = '<i class="fas fa-running fa-rotate-270"></i>';
                break;
            case 'right':
                this.x++;
                break;
            case 'down':
                this.y++;
                icon = '<i class="fas fa-running fa-rotate-90"></i>';
                break;
        }
        if (this._checkWall() == false){
            this.x = oldX;
            this.y = oldY;
            return this.matrix.setCell(this.x, this.y, 'snake', icon)};
        this.matrix.setCell(this.x, this.y, 'snake', icon);
    }

    _checkWall(x){

        return this.x >= 1 && this.x <= this.matrix.cols &&
                this.y >= 1 && this.y <= this.matrix.rows;
    }
}