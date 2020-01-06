let cells = [];
function setup() {
    createCanvas(700, 700);
    cells.push(new Cell());
    cells.push(new Cell());
}

function draw() {
    background(51);
    for (let i = 0; i < cells.length; i++) {
        cells[i].move();
        cells[i].show();
    }
}

function mousePressed() {
    for (let i = cells.length - 1; i >= 0; i--) {
        let c = cells[i];
        if (c.clicked(mouseX, mouseY)) {
            cells.push(c.mitosis());
            cells.push(c.mitosis());
            cells.splice(i, 1);
        }
    }
}
