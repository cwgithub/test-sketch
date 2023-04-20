let angle = 0.03;
let coverBack;
let coverFront;
let clock;
let megaphone;
let papersnakes;
let mp3;
let canvas;
let graphics;
let playing = false;

const path = "1000x1000";

function load(imageName) {
  return loadImage(`./assets/${path}/${imageName}`);
}

function preload() {
  coverBack = load("DontShoutIt.jpg");
  clock = load("DontShoutIt.Clock.Trans.png");
  megaphone = load("DontShoutIt.Megaphone.Trans.png");
  papersnakes = load("DontShoutIt.Papersnakes.Trans.png");
  mp3 = loadSound("./assets/DontShoutIt.mp3");
}

function setup() {
  canvas = createCanvas(1000, 1000, WEBGL);
  canvas.mousePressed(canvasPressed);

  graphics = createGraphics(1000, 1000);
  graphics.textAlign(CENTER, CENTER);
  graphics.textSize(64);
  graphics.fill(0, 255, 0);
  graphics.text("Click mouse to play/pause", 500, 500);
}

function draw() {
  background(237, 206, 159);
  noStroke();

  let degY = map(mouseX, 0, width, PI / 4, -PI / 4);
  let degX = map(mouseY, 0, height, -PI / 4, PI / 4);
  rotateY(degY);
  rotateX(degX);

  let zPlane = -100;
  let zTint = 255;
  let tintAdj = 25;

  for (let layer = 0; layer <= 3; layer++) {
    switch (layer) {
      case 0:
        texture(coverBack);
        break;
      case 1:
        texture(clock);
        break;
      case 2:
        texture(megaphone);
        break;
      case 3:
        texture(papersnakes);
        break;
    }

    push();

    // tint(255, zTint);
    // zTint -= tintAdj;
    // tintAdj += tintAdj;

    translate(0, 0, zPlane);
    zPlane += 20;
    plane(750, 750);
    pop();
  }

  if (!playing) {
    push();
    texture(graphics);
    plane(750, 750);
    pop();
  }

  angle += 0.02;
}

function canvasPressed() {
  if (!playing) {
    playing = true;
    mp3.play();
  } else {
    playing = false;
    mp3.pause();
  }
}
