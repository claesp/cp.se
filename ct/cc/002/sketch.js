let a = 0.0;
let b;
let sponge = [];

function setup() {
    createCanvas(400, 400, WEBGL);
    b = new MyBox(0, 0, 0, 200);
    sponge.push(b);
}

function mousePressed() {
    let next = [];
    for (let box of sponge) {
        let newBoxes = box.generate();
        next = next.concat(newBoxes);
    }
    sponge = next;
}

function draw() {
    background(51);
    stroke(255);
    noFill();
    lights();
    rotateX(a);
    rotateY(a * 0.4);
    rotateZ(a * 0.1)
    for (b of sponge) {
        b.show();
    }
    a += 0.01;
}