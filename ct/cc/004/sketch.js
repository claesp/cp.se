// (138, 43, 226)
// (230, 230, 250)

let drops = [];
let noOfDrops = 500;

function setup() {
    createCanvas(640, 360);
    for (let i = 0; i < noOfDrops; i++) {
        drops[i] = new Drop();
    }
}

function draw() {
    background(230, 230, 250);
    for (let i = 0; i < noOfDrops; i++) {
        let d = drops[i];
        d.fall();
        d.show();
    }
}