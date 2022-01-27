class Game {
  constructor() {
    this.backgroundImage;
    this.obstacles = [];
    this.startingScreen;
    this.winningScreen;
    this.stage = 0;
    //this.backgroundSound;
    //this.winningSound;
    //this.loosingSound;
  }

  setup() {
    this.background = new Background();
    this.player = new Player();
    this.princess = new Princess();
    //this.backgroundSound.loop();
  }
  preload() {
    this.backgroundImage = loadImage("assets/background/BG.png");
    this.winningScreen = loadImage("assets/winningScreen.gif");
    this.startingcreen = loadImage("assets/startScreen.png");
    this.playerImage = loadImage("assets/player/player02.png");
    this.princessImage = loadImage("assets/princess/princess02.png");
    this.birdImage = loadImage("assets/obstacle/bird02.png");
    this.cowImage = loadImage("assets/obstacle/cow02.png");
    this.windmillImage = loadImage("assets/obstacle/windmill.gif");
    //this.backgroundSound = loadSound("assets/sound/music-music-medieval.mp3");
    //this.winningSound = loadSound("assets/sound/applause.wav");
    //this.loosingSound = loadSound("assets/sond/Metal Gong.wav");
  }

  draw() {
    this.gamePlay();

    if ((this.stage = 0)) {
      this.gameStart();
    }

    if (this.stage == 1) {
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
      this.stage = 2;
      return true;
    }
  }

  startScreen() {
    this.background.draw();
    this.stage = 0;
    image(this.startingScreen, 250, 100, width, height);
    textFont();
    textSize(20);
    text(
      "Help our poor potato man to get to his princess. Use arrows to guide him around nasty birds, cows, and windmills.",
      50,
      50
    );
    //this.backgroundSound;
  }

  winScreen() {
    this.background.draw();
    image(this.winningScreen, 0, 0, width, height);
    console.log("winnScreen");
    //this.backgroundSound.stop();
  }
}
