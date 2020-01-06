class Drop {
    constructor() {
        this.x = random(width);
        this.y = random(-500, -50);
        this.z = random(0, 20);
        this.yspeed = map(this.z, 0, 20, 4, 10);
        this.len = map(this.z, 0, 20, 10, 20);
    }

    fall() {
        this.y = this.y + this.yspeed;
        let g = map(this.z, 0, 20, 0, 0.2)
        this.yspeed = this.yspeed + g;
        if (this.y > height) {
            this.y = random(-500, -50);
            this.yspeed = map(this.z, 0, 20, 4, 10);
        }
    }

    show() {
        stroke(138, 43, 226);
        let t = map(this.z, 0, 20, 1, 3);
        strokeWeight(t);
        line(this.x, this.y, this.x, this.y + this.len);
    }
}