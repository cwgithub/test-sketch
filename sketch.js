let angle = 0.03;
let coverBack;
let coverFront;
let clock;
let mp3;
let canvas;
let playing = false;
let scaler;

function preload() {
  coverBack = loadImage("./assets/DontShoutIt.jpg");
  coverFront = loadImage("./assets/DontShoutIt-front.jpg");
  clock = loadImage("./assets/clock.jpg");
  mp3 = loadSound("./assets/DontShoutIt.mp3");
}

function setup() {
  canvas = createCanvas(1000, 1000, WEBGL);
  scaler = width / 3800;
  canvas.mousePressed(canvasPressed);
}

function draw() {
  background(237, 206, 159);
  noStroke();

  let degY = map(mouseX, 0, width, PI / 6, -PI / 4);
  let degX = map(mouseY, 0, height, -PI / 6, PI / 4);
  rotateY(degY);
  rotateX(degX);

  texture(coverBack);

  let zPlane = 00;
  let zTint = 255;
  let tintAdj = 10;

  for (let layer = 0; layer <= 5; layer++) {
    push();
    tint(255, zTint);
    zTint -= tintAdj;
    tintAdj += tintAdj;
    translate(0, 0, zPlane);
    zPlane += 20;
    plane(750, 750);
    pop();
  }

  pop();

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
