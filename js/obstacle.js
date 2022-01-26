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
   
    if (frameCount % 30 === 0 ){
    this.y = this.y + random(-30, 30)
    }
}
collision(playerInfo) {
   
    let obstacleX = this.x + this.width / 2
    let obstacleY = this.y + this.height / 2
  
    let playerX = playerInfo.x + playerInfo.width / 2
    let playerY = playerInfo.y + playerInfo.height / 2
  
    if (dist(obstacleX, obstacleY, playerX, playerY) > 25) {
        return false
    } else {
    return this.player(this.x = 0, this.y = height - this.height)
    }
   }


}

// class Cow {
//   constructor(image) {
//     this.width = 200;
//     this.height = 100;
//     this.image = image;
//     this.x = width - 20;
//     this.y = height - this.height
    
//   }

//   draw() {
//     this.x--;
//     image(this.image, this.x, this.y, this.width, this.height);
//   }
// }

// class Windmill {
//   constructor(image) {
//     this.height = 300;
//     this.width = 200;
//     this.image = image;
//     this.x = width;
//     this.y = height - this.height
    
    
//   }

//   draw() {
//     this.x--;
//     image(this.image, this.x, this.y, this.width, this.height);
//   }


 