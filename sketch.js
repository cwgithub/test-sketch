let angle = 0.03;
let cover;

function preload() {
  cover = loadImage("./assets/DontShoutIt.jpg");
}

function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  background(237, 206, 159);
  noStroke();

  let degY = map(mouseX, 0, width, PI / 6, -PI / 6);
  let degX = map(mouseY, 0, height, -PI / 6, PI / 6);
  rotateY(degY);
  rotateX(degX);

  texture(cover);

  box(750, 750, 100);

  angle += 0.02;
}
