let angle = 0.03;
let cover;
let coverFront;
let clock;
let megaphone;
let papersnakes;
let mp3;
let canvas;
let textLine1;
let playing = false;

let offsetX;
let offsetY;
let direction;

const path = "1000x1000";

function load(imageName) {
  return loadImage(`./assets/${path}/${imageName}`);
}

function preload() {
  cover = load("DontShoutIt.jpg");
  clock = load("DontShoutIt.Clock.Trans.png");
  megaphone = load("DontShoutIt.Megaphone.Trans.png");
  papersnakes = load("DontShoutIt.Papersnakes.Trans.png");
  mp3 = loadSound("./assets/DontShoutIt.mp3");
}

function setup() {
  pixelDensity(1);
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);

  // canvas.mousePressed(canvasPressed);

  textLine1 = createGraphics(1000, 1000);
  textLine1.textAlign(CENTER, CENTER);
  textLine1.textSize(64);
  textLine1.fill(0, 255, 0);

  // graphics.text("Click mouse to play/pause", 500, 500);
  const str = `Pixel density ${pixelDensity()} Dsp density ${displayDensity()}`;
  textLine1.text(str, 500, 500);

  offsetX = 500;
  offsetY = 500;
  direction = "left";
}

function mousePressed() {
  alert("Fullscreen!");
  let fs = fullscreen();
  fullscreen(!fs);
}

function draw() {
  background(237, 206, 159);
  noStroke();
  //  offsetX = mouseX;
  //  offsetY = mouseY;

  if (offsetX >= width && direction === "right") {
    direction = "left";
  }
  if (offsetX <= 0 && direction === "left") {
    direction = "right";
  }

  if (direction === "right") {
    offsetX += 0.5;
    offsetY += 0.5;
  }

  if (direction === "left") {
    offsetX -= 0.5;
    offsetY -= 0.5;
  }

  let degY = map(offsetX, 0, width, PI / 4, -PI / 4);
  let degX = map(offsetX, 0, height, -PI / 4, PI / 4);
  rotateY(degY);
  rotateX(degX);

  let zPlane = -100;
  let zTint = 255;
  let tintAdj = 25;

  for (let layer = 0; layer <= 0; layer++) {
    switch (layer) {
      case 0:
        texture(cover);
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
    plane(width * 0.75, width * 0.75);
    pop();
  }

  // if (!playing) {
  //   push();
  //   texture(textLine1);
  //   plane(750, 750);
  //   pop();
  // }

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
