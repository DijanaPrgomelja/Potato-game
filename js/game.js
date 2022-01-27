class Game {
  constructor() {
    this.backgroundImage;
    this.obstacles = [];
    this.winningScreen;
  }

  setup() {
    this.background = new Background();
    this.player = new Player();
    this.princess = new Princess();
  }

  preload() {
    this.backgroundImage = loadImage("assets/background/BG.png");
    this.playerImage = loadImage("assets/player/player02.png");
    this.princessImage = loadImage("assets/princess/princess02.png");
    this.birdImage = loadImage("assets/obstacle/bird02.png");
    this.cowImage = loadImage("assets/obstacle/cow02.png");
    this.windmillImage = loadImage("assets/obstacle/windmill.gif");
    this.winningScreen= loadImage("assets/winningScreen.gif");
  }

  draw() {
    clear();
    this.background.draw();
    this.player.draw();
    this.princess.draw();

    if (frameCount % 200 === 0) {
      this.obstacles.push(new Bird(this.birdImage));
    }
    if (frameCount % 600 === 0) {
      this.obstacles.push(new Cow(this.cowImage));
    }
    if (frameCount % 1000 === 0) {
      this.obstacles.push(new Windmill(this.windmillImage));
    }

    this.obstacles.forEach(function (obstacle) {
      obstacle.draw();
    });

    this.obstacles = this.obstacles.filter((bird) => {
      if (bird.collision(this.player) || bird.x < 0) {
        return false;
      } else {
        return true;
      }
    });

    this.obstacles = this.obstacles.filter((cow) => {
      if (cow.collision(this.player) || cow.x < 0) {
        return false;
      } else {
        return true;
      }
    });

    this.obstacles = this.obstacles.filter((windmill) => {
      if (windmill.collision(this.player) || windmill.x < 0) {
        return false;
      } else {
        return true;
      }
    });

    this.princess = this.princess.filter((princess) => {
        if (princess.collision(this.player) || princess.x < 0) {
          return false;
        } else {
          return this.winningScreen;
        }
      });
  }
}
