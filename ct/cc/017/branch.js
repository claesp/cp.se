function Branch(parent, pos, dir) {
    this.pos = pos;
    this.parent = parent;
    this.dir = dir;
    this.orig_dir = this.dir.copy();
    this.count = 0;
    this.len = 5;

    this.reset = function () {
        this.dir = this.orig_dir.copy();
        this.count = 0;
    };

    this.next = function () {
        let next_dir = p5.Vector.mult(this.dir, this.len);
        let next_pos = p5.Vector.add(this.pos, this.dir);
        let next_b = new Branch(this, next_pos, this.dir.copy());
        return next_b;
    };

    this.show = function () {
        if (parent != null) {
            stroke(255);
            line(this.pos.x, this.pos.y, this.parent.pos.x, this.parent.pos.y);
        }
    };
}