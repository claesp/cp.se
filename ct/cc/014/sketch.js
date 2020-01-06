let a;
let s;

function setup() {
    createCanvas(600, 600);
    a = PI / 4;
    s = createSlider(0, PI / 2, PI / 4, 0.01);
}

function draw() {
    background(0);
    a = Number(s.value());

    stroke(255);
    translate(300, height);
    branch(100);
}

function branch(len) {
    line(0, 0, 0, - len);

    translate(0, -len);

    if (len > 4) {
        push();
        rotate(a);
        branch(len * 0.67);
        pop();

        push();
        rotate(-a);
        branch(len * 0.67);
        pop();
    }
}