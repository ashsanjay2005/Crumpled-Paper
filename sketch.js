
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);
	paper = new Paper(100,320,10);
	rect1 = new Dustbin(700,320,70,70);
	rect2 = new Dustbin(920,320,70,70);
	rect3 = new Dustbin(700,240,70,70);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  rect1.display();
  rect2.display();
  rect3.display();

  keyPressed();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}




