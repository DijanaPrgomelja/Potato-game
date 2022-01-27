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

  collision(playerInfo) {
    let princessX = this.x + this.width / 2;
    let princessY = this.y + this.height / 2;

    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;

    if (dist(princessX, princessY, playerX, playerY) > 20) {
      return false;
    } else {
      console.log(winningScreen);
      return true;
    }
  }
}
