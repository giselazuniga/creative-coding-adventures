var s = function(sketch) {
    
sketch.setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
};

sketch.draw() {
	tetrisShape();
};

sketch.tetrisShape() {
		for (var x = 0; x < width; x += 40){
			for (var y = 0; y < height; y += 40){
				fill(255-(x/10), 197-(y/2), y+3, x-3);
				beginShape();
					//vertex(x, y-10);
					vertex(x+20, y-10);
					vertex(x+20, mouseY-10);
					vertex(x+40, y+10);
					vertex(mouseX+20, y+30);
					vertex(x, y+30);
				endShape();
			}
		}
};
};
var myp5 = new p5(s);