nosex = 0;
nosey = 0;

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	mario_jump = loadSound("jump.wav");
	coin_mario = loadSound("coin.wav");
	kick_mario = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	gameoversound = loadSound("game_over.wav");
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");
	instializeInSetup(mario);

	posenet = ml5.poseNet(video, mdl);
	posenet.on("pose", gotPoses);
}

function draw() {
	game();
}

function mdl(){
	console.log("Model loaded");
}

function gotPoses(results) {
	if(results.length > 0) {
		console.log(results);
		nosex = results[0].pose.nose.x;
		nosey = results[0].pose.nose.y;
		
	}
}
