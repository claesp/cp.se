let ship;
let flowers = [];
let drops = [];

function setup() {
    createCanvas(600, 400);
    ship = new Ship();
    for (let i = 0; i < 6; i++) {
        flowers[i] = new Flower(i * 80 + 80, 60);
    }
}

function draw() {
    background(51);
    ship.show();
    ship.move();

    for (let i = 0; i < drops.length; i++) {
        drops[i].show();
        drops[i].move();

        for (let j = 0; j < flowers.length; j++) {
            if (drops[i].hits(flowers[j])) {
                flowers[j].grow();
                drops[i].evaporate();

                console.log('hit');
            }
        }
    }

    let edge = false;
    for (let i = 0; i < flowers.length; i++) {
        flowers[i].show();
        flowers[i].move();

        if (flowers[i].x > width - flowers[i].r || flowers[i].x - flowers[i].r < 0) {
            edge = true;
        }
    }
    if (edge) {
        for (let i = 0; i < flowers.length; i++) {
            flowers[i].shiftDown();
        }
    }

    for (let i = drops.length - 1; i >= 0; i--) {
        if (drops[i].toDelete) {
            drops.splice(i, 1);
        }
    }
}

function keyReleased() {
    if (keyCode === RIGHT_ARROW) {
        ship.setDir(0);
    } else if (keyCode === LEFT_ARROW) {
        ship.setDir(0);
    }
}

function keyPressed() {
    if (key === ' ') {
        let d = new Drop(ship.x, height);
        drops.push(d);
    }

    if (keyCode === RIGHT_ARROW) {
        ship.setDir(1);
    } else if (keyCode === LEFT_ARROW) {
        ship.setDir(-1);
    }
}