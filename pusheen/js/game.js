var backgroundImage;



function setup() {
   createCanvas(250, 250);
   backgroundImage = loadImage("./img/grass00.png");
}

function draw() {
// background(0, 100, 0);

  background(backgroundImage);
}

