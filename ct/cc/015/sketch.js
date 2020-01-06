let a;
let s;
let root;
let tree = [];
let leaves = [];
let count = 0;

function setup() {
    createCanvas(600, 600);
    a = PI / 4;
    s = createSlider(0, PI / 2, PI / 4, 0.01);

    root = new Branch(
        createVector(width / 2, height),
        createVector(width / 2, height - 100)
    );

    tree[0] = root;
}

function mousePressed() {
    for (let i = tree.length - 1; i >= 0; i--) {
        if (!tree[i].finished) {
            tree.push(tree[i].branchRight());
            tree.push(tree[i].branchLeft());
            tree[i].finished = true;

        }
    }

    count++;

    if (count === 6) {
        for (var i = 0; i < tree.length; i++) {
            if (!tree[i].finished) {
                var leaf = tree[i].end.copy();
                leaves.push(leaf);
            }
        }
    }
}

function draw() {
    background(0);
    a = Number(s.value());

    for (let b of tree) {
        b.show();
        //b.jitter();
    }

    for (var i = 0; i < leaves.length; i++) {
        fill(255, 0, 100, 100);
        noStroke();
        ellipse(leaves[i].x, leaves[i].y, 8, 8);
        leaves[i].y += random(0, 1);
    }
}