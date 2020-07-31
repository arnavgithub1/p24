const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var dustbin1;
var ball1;
var groundobj;



function setup() {
	createCanvas(800, 700);
	engine=Engine.create();
	world=engine.world;


	engine = Engine.create();
	world = engine.world;

	dustbin1=new dustbin(700,320,70,70);
	dustbin2=new dustbin(920,320,70,70);
  ball1=new paper(200,100,40) ; 
  groundobj=new Ground(width/2,700,width,20);

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  dustbin1.display();
  dustbin2.display();
  ball1.display();
  groundobj.display();
  

  drawSprites();



}

	