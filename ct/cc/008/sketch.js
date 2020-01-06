let s;
function setup() {
    createCanvas(600, 600, WEBGL);

    createEasyCam();
    document.oncontextmenu = function () { return false; }

    s = new Planet(100, 0, 0);
    s.spawnMoons(5, 1);
}

function draw() {
    background(0);
    //translate(width / 2, height / 2);
    lights();

    s.orbit();
    s.show();
    //noLoop();
}