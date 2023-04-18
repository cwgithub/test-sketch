let angle = 0.03;
let cover;
let mp3;
let canvas;
let playing = false;

function preload() {
  cover = loadImage("./assets/DontShoutIt.jpg");
  mp3 = loadSound("./assets/DontShoutIt.mp3");
}

function setup() {
  canvas = createCanvas(1000, 1000, WEBGL);
  canvas.mousePressed(canvasPressed);
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

function canvasPressed() {
  if (!playing) {
    playing = true;

    // playing a sound file on a user gesture
    // is equivalent to `userStartAudio()`
    mp3.play();
  }
}
