class Background {
  draw() {
    console.log("this is a background");

    game.backgroundImage;
    image(img.src, img.x, 0, width, height);
    image(img.src, img.x + width, 0, height);
  }
}
