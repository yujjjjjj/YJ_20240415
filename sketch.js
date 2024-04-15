let x = [];
let y = [];
let sx = [];
let sy = [];
let d = [];
let c = [];
let angle = [];
let p = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];
let num = 50;
let score = 0; // 步驟 1：新增計分變數

function setup() {
  createCanvas(windowWidth, windowHeight); // 步驟 1：將畫布大小設置為填滿全螢幕
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);

  for (let i = 0; i < num; i++) {
    x[i] = random(width);
    y[i] = random(height);
    d[i] = random(60, 150);
    sx[i] = random(-3, 3);
    sy[i] = random(-3, 3);
    c[i] = random(p);
    angle[i] = random(360);
  }
}

function draw() {
  background("#FFFFFF");

  // 步驟 2：在畫面左上方加入一個計分欄，大小為40*25
  
  for (let i = 0; i < num; i++) {

    // 步驟 3：物件碰到螢幕邊框時分數由0往上遞增0.5
    if (x[i] <= 0 || x[i] >= width || y[i] <= 0 || y[i] >= height) {
      score += 0.5;
    }

    // 步驟 4：修改程式碼，使每個物件碰到螢幕邊框時都會反彈
    if (x[i] <= 0 || x[i] >= width) {
      sx[i] *= -1;
    }
    if (y[i] <= 0 || y[i] >= height) {
      sy[i] *= -1;
    }

    x[i] += sx[i];
    y[i] += sy[i];

    angle[i] += 1.5;

    push();
    translate(x[i], y[i]);
    rotate(angle[i]);

    fill(c[i]);

    fill("#FFFFFF");
    strokeWeight(d[i] / 15);

    circle(0, 0, d[i]);

    noStroke();
    fill("#000000");
    circle(0 - d[i] / 9, 0 + d[i] / 7, d[i] / 11);
    circle(0 + d[i] / 9, 0 + d[i] / 7, d[i] / 11);

    noFill();
    stroke("#000000");
    arc(0, 0 + d[i] / 5, d[i] / 5, d[i] / 5, 40, 140);

    strokeWeight(d[i] / 15);
    fill(c[i]);
    arc(0, 0, d[i], d[i], 180, 360, PIE);


    
    pop();

  }
  fill("#000000");
  textSize(50);
  text("Score: " + score, 40, 50);
}



