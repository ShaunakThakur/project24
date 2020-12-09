const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

  paper = new Paper(100,300,30);
  
  ground = new Ground(600,height+10,1200,20);
  
  trashBin1 = new trashBin1 (1000,390,100,20);
  trashBin2 = new trashBin2 (950,320,20,100);
  trashBin3 = new trashBin3 (1050,320,20,100);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  
  paper.display();

  ground.display(); 

  trashBin1.display();
  trashBin2.display();
  trashBin3.display();

  trowing();

  drawSprites();
}

function trowing(){
  if (keyWentDown("UP_ARROW")){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:190,y:-190});
  }
}