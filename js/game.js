class Game {
  constructor() {
    this.backgroundImage;
    this.obstacles = [];
    this.startingScreen;
    this.winningScreen;
    this.stage = 0;
    this.backgroundSound;
    this.winningSound;
  }

  setup() {
    this.background = new Background();
    this.player = new Player();
    this.princess = new Princess();
    this.backgroundSound.loop();
  }
  preload() {
    this.startingScreen = loadImage("assets/startScreen.png");
    this.backgroundImage = loadImage("assets/background/BG.png");
    this.winningScreen = loadImage("assets/winningScreen.gif");
    this.playerImage = loadImage("assets/player/player02.png");
    this.princessImage = loadImage("assets/princess/princess02.png");
    this.birdImage = loadImage("assets/obstacle/bird02.png");
    this.cowImage = loadImage("assets/obstacle/cow02.png");
    this.windmillImage = loadImage("assets/obstacle/windmill.gif");
    this.backgroundSound = loadSound("assets/sound/music-medieval.mp3");
    this.winningSound = loadSound("assets/sound/applause.wav");
  }

  draw() {
    if (this.stage === 0) {
      this.startScreen();
      image(this.startingScreen, 0, 0, width, height);
    }
    if (this.gameStart === "preStart") {
      textSize(width / 50);
      text("Help litle potato man to reach to his princess!", 350, 400);
      text("Use arrows to escape nasty birds, cows, and windmills.");
      textSize(width / 23);
      text("Press spacebar to play.", 450, 700);
    }

    if (this.stage === 1) {
      this.gamePlay();
    }

    if (this.stage === 2) {
      this.winScreen();
    }
  }

  gamePlay() {
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

    if (this.princess.collision(this.player) || this.princess.x < 20) {
      return false;
    } else {
      return true;
    }
  }

  startScreen() {
    this.stage = 0;
    image(this.startingScreen, 0, 0, width, height);
  }

  winScreen() {
    this.backgroundSound.stop();
    this.background.draw();
    if (this.winningSound.isPlaying() === false) {
      this.winningSound.play();
    }
    image(this.winningScreen, 0, 0, width, height);
  }
}
