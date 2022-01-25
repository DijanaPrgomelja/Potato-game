class Princess {
  constructor() {
    this.width = 100;
    this.height = 300;
    this.x = width - this.width;
    this.y = height - this.height;
  }

  draw() {
    image(game.princessImage, this.x, this.y, this.width, this.height);
}
}