const game = new Game();

function preload() {
  game.prelode();
}

function setup() {
  createCanvas(1000, 1000);
  game.setup();
}

function draw() {
  game.draw();
}

function keyPressed() {
  if (keyCode === 38) {
    game.playerImage.moveUp();
  } else if (keyCode === 40) {
    game.playerImage.moveDown();
  } else if (keyCode === 37) {
    game.playerImage.moveLeft();
  } else if (keyCode === 39) {
    game.playerImage.moveRight();
  }
}
