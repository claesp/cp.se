let cols;
let rows;
let scl = 20;
let w = 2000;
let h = 1600;
let terrain = [];
let flying = 0.0;

function setup() {
    createCanvas(600, 600, WEBGL);

    cols = w / scl;
    rows = h / scl;
    /* createEasyCam();
    document.oncontextmenu = function () { return false; } */
}

function draw() {
    flying -= 0.1;
    let yoff = flying;
    for (let y = 0; y < rows; y++) {
        let xoff = 0;
        for (let x = 0; x < cols; x++) {
            if (!terrain[x]) {
                terrain[x] = [];
            }
            terrain[x][y] = map(noise(xoff, yoff), 0, 1, -50, 100);
            xoff += 0.2;
        }
        yoff += 0.2;
    }

    background(0);
    rotateX(PI / 3);
    stroke(255);
    noFill();
    translate(-w / 2, -h / 2);
    for (let y = 0; y < rows - 1; y++) {
        beginShape(TRIANGLE_STRIP);
        for (let x = 0; x < cols; x++) {
            vertex(x * scl, y * scl, terrain[x][y]);
            vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
        }
        endShape();
    }


}