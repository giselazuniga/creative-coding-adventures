var s = function(sketch){
    

var song;
var currentText = "";
var amp;
var volhistory = [];
var button;

sketch.preload(){
	song = loadSound("Ceremony.mp3");
};

sketch.setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	song.play();
	amp = new p5.Amplitude();
};

sketch.draw() {
	background(188, 108, 22);
	
	sketch.stripes();
	
	//Sun in the middle
	fill(239, 88, 144, 200);
	noStroke();
	ellipse(width/2, height/3, 200);
	
	//Lyrics
	updateText();
	textAlign(CENTER);
	textSize(48);
	//bright yellow text
	fill(255, 238, 2);
	text(currentText, width/2 - 3, height/1.3);
	//dark green text
	fill(6, 102, 12);
	text(currentText, width/2 - 2, height/1.3);
	//black text
	fill(0);
	text(currentText, width/2 -1, height/1.3);
	//white text
	fill(255);
	text(currentText, width/2, height/1.3 -2);
	
	//Wavelength
	var vol = amp.getLevel();
	volhistory.push(vol);
	stroke(255);
	noFill();
	
	//Radial Volume around Sun
	translate(width/2, height/3);
	beginShape();
		for(var i = 0; i < 360; i++) {
			var r = map(volhistory[i], 0, 1, 45, 450);
			var x = r * cos(i);
			var y = r * sin(i);
			vertex(x, y);
		}
	endShape();
	
	//Wavy wavelength
	if (volhistory.length > 360){
		volhistory.splice(0,1);	
	}
	
};

//Making the Sunrays
sketch.stripes() {
	for (var x = 0; x < width; x += 40){
			for (var y = 0; y < height; y += 40){
				stroke(245-(x/6), 197-(y/3), y+6, x-4);
				line(x+1, y+1, width/2, height/3);
			}
	}
};

//Making the Lyrics
sketch.updateText(){
	if(song.currentTime() > 0){
		currentText = "Ceremony";
	}
	if(song.currentTime() > 20){
		currentText = "~really rad instrumentals for about a minute~";
	}
	if(song.currentTime() > 64){
		currentText = "This is why events unnerve me";
	}
	if(song.currentTime() > 67){
		currentText = "They find it all, a different story";	
	}
	if(song.currentTime() > 71){
		currentText = "Notice whom for wheels are turning";
	}
	if(song.currentTime() > 74.5){
		currentText = "Turn again and turn towards this time";
	}
	if(song.currentTime() > 78){
		currentText = "All she asks is the strength to hold me";
	}
	if(song.currentTime() > 81.5){
		currentText = "Then again the same old story";
	}
	if(song.currentTime() > 85.5){
		currentText = "World will travel, oh so quickly";
	}
	if(song.currentTime() > 88.5){
		currentText = "Travel first and lean towards this time";
	}
	if(song.currentTime() > 98){
		currentText = "Oh, I'll break them down";
	}
	if(song.currentTime() > 101){
		currentText = "no mercy shown";
	}
	if(song.currentTime() > 103){
		currentText = "Heaven knows, it's got to be this time";
	}
	if(song.currentTime() > 106){
		currentText = "Watching her, these things she said";
	}
	if(song.currentTime() > 110){
		currentText = "The times she cried";
	}
	if(song.currentTime() > 112){
		currentText = "Too frail to wake this time";
	}
	if(song.currentTime() > 120){
		currentText = "~instrumentals~";	
	}
	if(song.currentTime() > 156){
		currentText = "Oh I'll break them down";
	}
	if(song.currentTime() > 158){
		currentText = "no mercy shown";
	}
	if(song.currentTime() > 160){
		currentText = "Heaven knows, it's got to be this time";
	}
	if(song.currentTime() > 164){
		currentText = "Avenues all lined with trees";
	}
	if(song.currentTime() > 168){
		currentText = "Picture me and then you start watching";
	}
	if(song.currentTime() > 174){
		currentText = "Watching forever";
	}
	if(song.currentTime() > 185){
		currentText = "Forever";
	}
	if(song.currentTime() > 188){
		currentText = "Watching love grow";
	}
	if(song.currentTime() > 192){
		currentText = "Forever";
	}
	if(song.currentTime() > 195){
		currentText = "Letting me know";
	}
	if(song.currentTime() > 199){
		currentText = "Forever";
	}
};

}
//put the frequency thing around the sun