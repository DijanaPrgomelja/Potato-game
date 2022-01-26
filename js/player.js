class Player {
  constructor() {
    this.width = 80;
    this.height = 140;
    this.x = 0;
    this.y = height - this.height;
    this.speed = 25;
  }

  move(direction) {
    if (direction === "right" && this.x < 1400) {
      this.x += this.speed;
    } else if (direction === "left" && this.x > 0) {
      this.x -= this.speed;
    } else if (direction === "up" && this.y > 0) {
      this.y -= this.speed;
    } else if (direction === "down" && this.y < 700) {
      this.y += this.speed;
    }
  }

  draw() {
    image(game.playerImage, this.x, this.y, this.width, this.height);
  }
}
