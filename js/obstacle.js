class Bird {
  constructor(image) {
    this.image = image;
    this.x = width;
    this.y = (Math.random() * height) / 2.5;
    this.width = 70;
    this.height = 50;
  }

  draw() {
    this.x--;
    image(this.image, this.x, this.y, this.width, this.height);

    if (frameCount % 30 === 0) {
      this.y = this.y + random(-30, 30);
    }
  }
  collision(playerInfo) {
    let birdX = this.x + this.width / 2;
    let birdY = this.y + this.height / 2;

    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;

    if (dist(birdX, birdY, playerX, playerY) > 20) {
      return false;
    } else {
      game.player.x = 0;
    }
  }
}

class Cow {
  constructor(image) {
    this.width = 200;
    this.height = 150;
    this.image = image;
    this.x = width - 20;
    this.y = height - this.height;
  }

  draw() {
    this.x--;
    image(this.image, this.x, this.y, this.width, this.height);
  }
  collision(playerInfo) {
    let cowX = this.x + this.width / 2;
    let cowY = this.y + this.height / 2;

    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;

    if (dist(cowX, cowY, playerX, playerY) > 50) {
      return false;
    } else {
      game.player.x = 0;
    }
  }
}

class Windmill {
  constructor(image) {
    this.height = 300;
    this.width = 200;
    this.image = image;
    this.x = width;
    this.y = height - this.height;
  }

  draw() {
    this.x--;
    image(this.image, this.x, this.y, this.width, this.height);
  }
  collision(playerInfo) {
    let windmillX = this.x + this.width / 2;
    let windmillY = this.y + this.height / 2;

    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;

    if (dist(windmillX, windmillY, playerX, playerY) > 60) {
      return false;
    } else {
      game.player.x = 0;
    }
  }
}
