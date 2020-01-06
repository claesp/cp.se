
function Cell(pos, r, c) {
    if (pos) {
        this.pos = pos.copy()
    } else {
        this.pos = createVector(random(width), random(height));
    }
    this.r = r || 60;
    this.c = c || color(random(100, 255), 0, random(100, 255), 100);

    this.clicked = function (x, y) {
        let d = dist(this.pos.x, this.pos.y, x, y);
        if (d < this.r) {
            return true;
        }

        return false;
    };

    this.mitosis = function () {
        let np = createVector(this.pos.x + random(-30, 30), this.pos.y);
        let cell = new Cell(np, this.r / 2, this.c);

        return cell;
    };

    this.move = function () {
        let vel = p5.Vector.random2D();
        this.pos.add(vel);
    };

    this.show = function () {
        noStroke();
        fill(this.c);
        ellipse(this.pos.x, this.pos.y, this.r, this.r);
    }
}