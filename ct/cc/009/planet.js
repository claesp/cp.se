class Planet {
    constructor(r, d, o) {
        this.radius = r;
        this.angle = random(TWO_PI);
        this.distance = d;
        this.planets = [];
        this.orbitspeed = o || random(0.002, 0.01);

        this.v = p5.Vector.random3D();
        this.v.mult(this.distance);
    }

    spawnMoons(n, l) {
        for (let i = 0; i < n; i++) {
            let newRadius = this.radius / (l * 2);
            let newDistance = random(this.radius + newRadius, (this.radius + newRadius) * 2);
            this.planets[i] = new Planet(newRadius, newDistance);
            if (l < 3) {
                let numOfMoons = random(1, 4);
                this.planets[i].spawnMoons(numOfMoons, l + 1);
            }
        }
    }

    orbit() {
        this.angle += this.orbitspeed;
        for (let i = 0; i < this.planets.length; i++) {
            this.planets[i].orbit();
        }
    }

    show() {
        push();

        let v2 = createVector(1, 0, 1);
        let p = this.v.cross(v2);
        // doesn't work!?
        //rotate(this.angle, [p.x, p.y, p.z]);
        rotate(this.angle);

        translate(this.v.x, this.v.y, this.v.z);

        noStroke();
        fill(255);
        sphere(this.radius);

        for (let i = 0; i < this.planets.length; i++) {
            this.planets[i].show();
        }

        pop();
    }
}