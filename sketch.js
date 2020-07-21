var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(400,680,800,20);
ball1 = new Ball(200,650,40);
dustbin1 = new Dustbin(690,650,20,50);
dustbin2 = new Dustbin(560,650,20,50);
dustbin3 = new Dustbin(625,675,150,20);

	Engine.run(engine);
  
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:175,y:-185});
	}
}

function draw() {
  background(200);
  
  ground.display();
  ball1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}



