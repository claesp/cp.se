let s;
function setup() {
    createCanvas(600, 600);
    s = new Planet(100, 0, 0);
    s.spawnMoons(5, 1);
    console.log(s);
}

function draw() {
    background(0);
    translate(width / 2, height / 2);
    s.orbit();
    s.show();
}