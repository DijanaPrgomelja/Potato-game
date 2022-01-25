class Game {
  constructor() {
    this.backgroundImage;
    // this.score = 0;
  }

  setup() {
    this.background = new Background();
    this.player = new Player();
     this.princess = new Princess();
    // this.obstacles = [];
  }

  preload() {
    this.backgroundImage = loadImage("assets/background/BG.png");
    this.playerImage = loadImage("assets/player/player02.png");
    this.princessImage = loadImage("assets/princess/princess02.png");
    // this.butterflyImage = loadImage("assets/obstacle/butterfly02.png");
    // this.bunnyImage = loadImage("assets/obstacle/bunny02.png");
    // this.birdImage = loadImage("assets/obstacle/bird02.png");
    // this.cowImage = loadImage("assets/obstacle/cow02.png");
    // this.windmillImage = loadImage("assets/obstacle/windmill.gif");
  }

  draw() {
    clear();
    this.background.draw()
    this.player.draw();
    this.princess.draw();

    // if (frameCount % 30 === 0) {
    //   this.obstacle.push(new Obstacle(this.butterflyImage));
    //   console.log(this.obstacles);
    // } else if (frameCount % 20 === 0) {
    //   this.obstacles.push(new Obstacle(this.bunnyImage));
    // } else if (frameCount % 30 === 0) {
    //   this.obstacles.push(new Obstacle(this.birdImage));
    // } else if (frameCount % 20 === 0) {
    //   this.obstacles.push(new Obstacle(this.cowImage));
    // } else if (frameCount % 10 === 0) {
    //   this.obstacles.push(new Obstacle(this.windmillImage));
    // }

    // this.obstacle.forEach(function (obstacle) {
    //   obstacle.draw();
    // });

    // this.obstacles = this.obstacles.filter((obstacle) => {
    //   if (obstacle.collision(this.player) || obstacle.x < 0) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // });
  }
}
