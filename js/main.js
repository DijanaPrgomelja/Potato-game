const game = new Game();

function preload() {
  game.preload();
}

function setup() {
  createCanvas(1200, 700);
  game.setup();
}

function draw() {
  game.draw();
}

 function keyPressed() {
    if (keyCode === UP_ARROW) {
      y = y - 10;
    } else if (keyCode === DOWN_ARROW) {
      y = y + 10;
     }
     if (keyCode === LEFT_ARROW) {
      x = x - 5;
    } else if (keyCode === RIGHT_ARROW) {
     x = x + 5;
    }
 }