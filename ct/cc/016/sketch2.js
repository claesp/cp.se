// variables: A B
// axiom: A
// rules: (A -> AB), (B -> A)

let axiom = "A";
let sentence = axiom;
let rules = [];
rules[0] = {
    in: "A",
    out: "AB"
};
rules[1] = {
    in: "B",
    out: "A"
};

function generate() {
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
}

function setup() {
    noCanvas();
    createP(axiom);
    var btn = createButton("generate");
    btn.mousePressed(generate);
}

function draw() {

}