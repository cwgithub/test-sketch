let angle = 0.03;
let coverBack;
let coverFront;
let clock;
let megaphone;
let papersnakes;
let mp3;
let canvas;
let textLine1;
let textLine2;
let playing = false;

function load(imageName) {
  return loadImage(`assets/${imageName}`);
}

function preload() {
  unionJack = load("union-jack.gif");
  papersnakes = load("papersnakes.png");
  mp3 = loadSound("/assets/DontShoutIt.mp3");
}

function setup() {
  pixelDensity(1);
  canvas = createCanvas(1000, 500, WEBGL);
  canvas.mousePressed(canvasPressed);

  textLine1 = createGraphics(1000, 1000);
  textLine1.textAlign(CENTER, CENTER);
  textLine1.textSize(32);
  textLine1.fill(255, 255, 255);
  const str1 = `Greenwood Park Coronation Festival`;
  textLine1.text(str1, 500, 500);

  textLine2 = createGraphics(1000, 1000);
  textLine2.textAlign(CENTER, CENTER);
  textLine2.textSize(32);
  textLine2.fill(255, 255, 255);
  const str2 = `Sat 6th May 3pm-10pm`;
  textLine2.text(str2, 500, 500);
}

function draw() {
  background("white");
  noStroke();

  push();
  texture(unionJack);
  translate(0, 0, -10);
  box(640, 400, 25);
  pop();

  push();
  texture(papersnakes);
  translate(0, 0, 100);
  plane(500, 250);
  pop();

  push();
  texture(textLine1);
  translate(0, 5, 20);
  plane(750, 750);
  pop();

  push();
  texture(textLine2);
  translate(0, 55, 20);
  plane(750, 750);
  pop();

  rotateY((angle += 0.01));
  // if (angle > 0.1) {
  //   angle -= 0.02;
  // } else {
  //   angle += 0.02;
  // }
}

function canvasPressed() {
  // if (!playing) {
  //   playing = true;
  //   mp3.play();
  // } else {
  //   playing = false;
  //   mp3.pause();
  // }
}
