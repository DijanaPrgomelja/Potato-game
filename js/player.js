class Player {
  constructor() {
    this.width = 80;
    this.height = 140;
    this.x = 0;
    this.y = height - this.height;
  }

  move() {}
  draw() {
    if (this.y >= this.height - this.height) {
      this.Y = this.height - this.height;
    }
    console.log(game.playerImage, this.x, this.y, this.width, this.height);
  }
}
