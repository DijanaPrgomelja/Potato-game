class Player {
  constructor() {
    this.width = 80;
    this.height = 140;
    this.x = 0;
    this.y = height - this.height;
  }

  move() {
    if (x >= 400) {
      x = 0;
    }
  }
  draw() {
    image(game.playerImage, this.x, this.y, this.width, this.height);
  }
}
