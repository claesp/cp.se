// variables: F-+[]
// axiom: F
// rules: (F -> FF+[+F-F-F]-[-F+F+F])

let angle;
let axiom = "F";
let sentence = axiom;
let rules = [];
rules[0] = {
    in: "F",
    out: "FF+[+F-F-F]-[-F+F+F]"
};
let len = 100;

function generate() {
    len *= 0.5;
    let nextSentence = "";
    for (let i = 0; i < sentence.length; i++) {
        let cur = sentence.charAt(i);
        let found = false;
        for (let j = 0; j < rules.length; j++) {
            if (cur == rules[j].in) {
                nextSentence += rules[j].out;
                found = true;
                break;
            }
        }
        if (!found) {
            nextSentence += cur;
        }
    }
    sentence = nextSentence;
    createP(sentence);
    turtle();
}

function turtle() {
    background(51);
    resetMatrix();
    stroke(255, 100);
    translate(width / 2, height);
    for (let i = 0; i < sentence.length; i++) {
        let cur = sentence.charAt(i);

        if (cur == "F") {
            line(0, 0, 0, -len);
            translate(0, -len);
        } else if (cur == "+") {
            rotate(angle);
        } else if (cur == "-") {
            rotate(-angle);
        } else if (cur == "[") {
            push();
        } else if (cur == "]") {
            pop();
        }
    }
}

function setup() {
    createCanvas(600, 600);
    background(51);

    createP(axiom);
    angle = radians(25);
    turtle();

    var btn = createButton("generate");
    btn.mousePressed(generate);
}