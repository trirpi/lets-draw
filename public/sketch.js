var socket;
var lineThickness;
var lineColor;

function setup() {
    var canv = createCanvas(windowWidth, windowHeight);
    canv.parent('canvas');
    background(255,255,255);

    lineColor = [random(1,255), random(1,255), random(1,255)];

    socket = io.connect('http://localhost:3000');
    socket.on('mouse', newDrawing);

    rSlider = createSlider(0, 255, lineColor[0]);
    rSlider.parent('colors');
    gSlider = createSlider(0, 255, lineColor[1]);
    gSlider.parent('colors');
    bSlider = createSlider(0, 255, lineColor[2]);
    bSlider.parent('colors');

    tSlider = createSlider(2, 40, 20);
    tSlider.parent('thickness');

}

function newDrawing(data) {
    noStroke();
    fill(data.color[0], data.color[1], data.color[2]);
    ellipse(data.x, data.y, data.thickness, data.thickness);
}

function mouseDragged() {

    var data = {
        x: mouseX,
        y: mouseY,
        color: lineColor,
        thickness: lineThickness
    };

    socket.emit('mouse', data);

    lineThickness = tSlider.value();
    lineColor = [rSlider.value(), gSlider.value(), bSlider.value()];

    noStroke();
    fill(lineColor[0], lineColor[1], lineColor[2]);
    ellipse(mouseX, mouseY, lineThickness, lineThickness);


}

function draw() {
    if (mouseIsPressed) {
        mouseDragged();
    }
}

