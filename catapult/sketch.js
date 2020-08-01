
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Constraint = Matter.Constraint;

var backgroundimg;

function preload (){
	backgroundimg = loadImage("sprites/bg.png");
}
function setup() {
	createCanvas(1250, 600);


	engine = Engine.create();
	world = engine.world;


// forming 1st layers
	obs1 = new obs(1000,375);
	obs2 = new obs(1050,375);
	obs3 = new obs(900,375);
	obs4 = new obs(950,375);
	obs5 = new obs(1100,375);
    obs6 = new obs(600,275);
	obs7 = new obs(550,275);
	obs8 = new obs(500,275);
	obs9 = new obs(650,275);
	obs10 = new obs(700,275);

	// for creating the 2nd layer
	obs11 = new obs(1075,335);
	obs12 = new obs(1025,335);
	obs13 = new obs(975,335);
	obs14 = new obs(678,235);
	obs15 = new obs(625,235);
	obs16 = new obs(570,235);
	obs17 = new obs(520,235);
	obs22 = new obs(925,335);

	// for creating the 3rd layer
	obs18 = new obs(550,195);
	obs19 = new obs(600,195);
	obs20 = new obs(650,195);
	obs21 = new obs(1050,295);
	obs23 = new obs(950,295);

	// creating the ground and the launchers
	ground1 = new ground(1000,400,300,10);
	ground2 = new ground(600,300,300,10);
	ground3 = new ground(600,550,1295,10);
	shape1 = new shape(100,100);

	// creating the band
	band1 = new band(100,100);
	
	// creating the attachment 
	attach = new ConstraintBodies(band1.body,shape1.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundimg);
  ground1.display();
  ground2.display();
  ground3.display();
  obs23.display();
  band1.display();
  shape1.display();
  obs21.display();
  obs22.display();
  obs1.display();
  obs2.display();
  obs3.display();
  obs4.display();
  obs5.display();
  obs6.display();
  obs7.display();
  obs8.display();
  obs9.display();
  obs10.display();
  obs11.display();
  obs12.display();
  obs13.display();
  obs14.display();
  obs15.display();
  obs16.display();
  obs17.display();
  obs18.display();
  obs19.display();
  obs20.display();
  attach.display();

  drawSprites();
 
}

function mouseDragged(){
 Body.setPosition(shape1.body,{x : mouseX,y : mouseY });
}

function mouseReleased(){
	attach.fly();
}

