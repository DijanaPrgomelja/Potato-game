const game = new Game();

function preload() {
  game.preload();
}

function setup() {
  createCanvas(1400 , 750);
  game.setup();
  
}

function draw() {
  game.draw();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    console.log("up");
    game.player.move("up");
  } else if (keyCode === DOWN_ARROW) {
    console.log("down");
    game.player.move("down");
  }
  if (keyCode === LEFT_ARROW) {
    console.log("left");
    game.player.move("left");
  } else if (keyCode === RIGHT_ARROW) {
    console.log("right");
    game.player.move("right");
  }
}
