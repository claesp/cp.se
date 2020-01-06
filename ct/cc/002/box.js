class MyBox {
    constructor(x, y, z, r) {
        this.pos = createVector(x, y, z);
        this.r = r;
    }

    generate() {
        let boxes = [];
        for (let x = -1; x < 2; x++) {
            for (let y = -1; y < 2; y++) {
                for (let z = -1; z < 2; z++) {
                    let sum = abs(x) + abs(y) + abs(z);
                    let r = this.r / 3;
                    if (sum > 1) {
                        let b = new MyBox(this.pos.x + x * r, this.pos.y + y * r, this.pos.z + z * r, r);
                        boxes.push(b);
                    }
                }
            }
        }

        return boxes;
    }

    show() {
        push();
        translate(this.pos.x, this.pos.y, this.pos.z);
        fill(255);
        noStroke();
        box(this.r);
        pop();
    }
}