let s;
let img;
function setup() {
    createCanvas(600, 600, WEBGL);

    createEasyCam();
    document.oncontextmenu = function () { return false; }

    img = loadImage("data/sun.jpg");

    s = new Planet(100, 0, 0);
    s.spawnMoons(5, 1);
}

function draw() {
    background(0);
    lights();

    s.orbit();
    s.show();
}