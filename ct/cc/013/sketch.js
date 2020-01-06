let grid = [];
let next = [];

let da = 1.0;
let db = 0.5;
let fd = 0.055;
let k = 0.062;

function setup() {
    createCanvas(200, 200);
    pixelDensity(1);

    for (let x = 0; x < width; x++) {
        grid[x] = [];
        next[x] = [];
        for (let y = 0; y < height; y++) {
            grid[x][y] = { a: 1, b: 0 };
            next[x][y] = { a: 1, b: 0 };
        }
    }

    for (let i = 100; i < 110; i++) {
        for (let j = 100; j < 110; j++) {
            grid[i][j].b = 1;
        }
    }
}

function draw() {
    background(0);

    for (let x = 1; x < width - 1; x++) {
        for (let y = 1; y < height - 1; y++) {
            let old_a = grid[x][y].a;
            let old_b = grid[x][y].b;
            let new_a = old_a +
                (da * laplaceA(x, y)) -
                (old_a * old_b * old_b) +
                (fd * (1 - old_a));
            let new_b = old_b +
                (db * laplaceB(x, y)) +
                (old_a * old_b * old_b) -
                ((k + fd) * old_b);

            next[x][y].a = constrain(new_a, 0, 1);
            next[x][y].b = constrain(new_b, 0, 1);
        }
    }

    loadPixels();
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let pix = (x + y * width) * 4;
            var a = next[x][y].a;
            var b = next[x][y].b;
            var c = floor((a - b) * 255);
            c = constrain(c, 0, 255);
            pixels[pix + 0] = c;
            pixels[pix + 1] = c;
            pixels[pix + 2] = c;
            pixels[pix + 3] = 255;
        }
    }
    updatePixels();

    swap();
}

function swap() {
    let tmp = grid;
    grid = next;
    next = tmp;
}

function laplaceA(x, y) {
    let sum = 0.0;
    sum += grid[x][y].a * -1;
    sum += grid[x - 1][y].a * 0.2;
    sum += grid[x + 1][y].a * 0.2;
    sum += grid[x][y + 1].a * 0.2;
    sum += grid[x][y - 1].a * 0.2;
    sum += grid[x - 1][y - 1].a * 0.05;
    sum += grid[x + 1][y - 1].a * 0.05;
    sum += grid[x + 1][y + 1].a * 0.05;
    sum += grid[x - 1][y + 1].a * 0.05;

    return sum;
}

function laplaceB(x, y) {
    let sum = 0.0;
    sum += grid[x][y].b * -1;
    sum += grid[x - 1][y].b * 0.2;
    sum += grid[x + 1][y].b * 0.2;
    sum += grid[x][y + 1].b * 0.2;
    sum += grid[x][y - 1].b * 0.2;
    sum += grid[x - 1][y - 1].b * 0.05;
    sum += grid[x + 1][y - 1].b * 0.05;
    sum += grid[x + 1][y + 1].b * 0.05;
    sum += grid[x - 1][y + 1].b * 0.05;

    return sum;
}