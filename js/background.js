
let x1 = 0
let x2 = 1400
speed = 2
class Background {
  

  draw() {

    image(game.backgroundImage, x1, 0, width, height);
    image(game.backgroundImage, x2, 0, width, height);
    x1 -= speed
    x2 -= speed
    if (x1 < - width) {
        x1 = width
    }
   if (x2 < -width) {
       x2 = width
   }
  }
}

