class Planet {
    constructor(r, d, o) {
        this.radius = r;
        this.angle = random(TWO_PI);
        this.distance = d;
        this.planets = [];
        this.orbitspeed = o || random(0.002, 0.01);
    }

    spawnMoons(n, l) {
        for (let i = 0; i < n; i++) {
            let newRadius = this.radius / (l * 2);
            let newDistance = this.radius + random(50, 150);
            let newOrbitSpeed = random(0.002, 0.01);
            this.planets[i] = new Planet(newRadius, newDistance, newOrbitSpeed);
            if (l < 2) {
                let numOfMoons = random(1, 4)
                this.planets[i].spawnMoons(numOfMoons, l + 1);
            }
        }
    }

    orbit() {
        this.angle = this.angle + this.orbitspeed;
        for (let i = 0; i < this.planets.length; i++) {
            this.planets[i].orbit();
        }
    }

    show() {
        push();
        rotate(this.angle);
        translate(this.distance, 0);
        noStroke();
        fill(255, 100);
        ellipse(0, 0, this.radius * 2, this.radius * 2);

        for (let i = 0; i < this.planets.length; i++) {
            this.planets[i].show();
        }
        pop();
    }
}