const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var Dustbin;
var ball;
r = this.radius;

function setup() {
createCanvas(1200,700);
engine = Engine.create();
world = engine.world;
ground = new Ground(width/2,700,2000,10);


var ground_options ={
  isStatic: true
}

dustbinObj=new dustbin(1000,690)
Engine.run(engine);

ball = new Paper(200,660,30);

}


function draw() {
  rectMode(CENTER);
 
  
  background(0,0,0);
  

  ground.display();

  dustbinObj.display();
  
  ball.display();  

 drawSprites();
  
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:67,y:-67});
    

	}
    
} 




