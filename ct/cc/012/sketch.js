let x = 0.01;
let y = 0.0;
let z = 0.0;

const a = 10.0;
const b = 28.0;
const c = 8.0 / 3.0;

let points = [];

let angle = 0.0;

function setup() {
    createCanvas(600, 600, WEBGL);
    colorMode(HSB);
}

function draw() {
    background(0);

    let dt = 0.01;
    let dx = (a * (y - x)) * dt;
    let dy = (x * (b - z) - y) * dt;
    let dz = (x * y - c * z) * dt;

    x = x + dx;
    y = y + dy;
    z = z + dz;

    points.push(createVector(x, y, z));


    angle += 0.01;
    rotateY(angle);

    translate(0, 0, -80);
    scale(5);
    noFill();

    let hue = 0.0;
    beginShape();
    for (let p of points) {
        stroke(hue, 255, 255);
        vertex(p.x, p.y, p.z);

        let off = p5.Vector.random3D();
        off.mult(0.1);
        //p.add(off);

        hue += 0.1;
        if (hue > 255) {
            hue = 0.0;
        }
    }
    endShape();
}