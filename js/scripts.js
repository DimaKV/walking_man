window.onload = function(){


    const go = document.querySelector('.go');
    const stop = document.querySelector('.stop');
    const div = document.querySelector('.fields');
    const matrix = new Matrix(div, 7, 7);
    let timerId = 0;

    matrix.create();
    matrix.setCell(4, 5, 'fruit', '<i class="fab fa-apple"></i>');

    const snake = new Snake(matrix, 2, 1, 'right');
    snake.show();

    document.onkeydown = function(e){
      switch (e.keyCode){
          case 37:
              snake.direct = 'left';
              snake.move();
              break;
          case 38:
              snake.direct = 'up';
              snake.move();
              break;
          case 39:
              snake.direct = 'right';
              snake.move();
              break;
          case 40:
              snake.direct = 'down';
              snake.move();
              break;
      }
    };


    go.onclick = function(){
        timerId = setInterval( () =>{
            snake.move();
        }, 500)
    };

    stop.onclick = function(){
        clearInterval(timerId);
    };



};