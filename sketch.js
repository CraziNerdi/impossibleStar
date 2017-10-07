let angleX;
let angleY;
let angleA;
let angleB;
let amplitude;
let spacing;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);

  angleX = 1;
  angleY = 0;
  angleA = 1;
  angleB = 0;
  amplitude = 200;
  spacing = 360/20;
}

function draw() {

  background(50);

  noFill();
  strokeWeight(8);
  for (var i = 0; i < 360; i += spacing) {
    stroke(255, map(i, 0, 360, 0, 255), 127);
  rotatingLine(.03, 200, i*8, .2, 100, i*2);
}

}

function rotatingLine(f, a, p, ff, aa, pp) {
  angleX = cos(millis()*f/2.777778 + p);
  angleY = sin(millis()*f/2.777778 + p);
  angleA = cos(millis()*ff/2.777778 + pp);
  angleB = sin(millis()*ff/2.777778 + pp);
  line(width/2+angleX*a, height/2 + angleY*a, width/2+angleA*aa, height/2 + angleB*aa);
}
