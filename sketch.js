
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse; 
const MouseConstraint = Matter.MouseConstraint; 
var ball1, ball2, ball3, ball4, ball5;
var roof1;
var rope1, rop2, rope3, rope4 , rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);
	engine = Engine.create();
  world = engine.world;
  
let canvasmouse = Mouse.create(canvas.elt);
canvasmouse.pixelRatio = pixelDensity();
let options = {
  mouse : canvasmouse};
mConstraint = MouseConstraint.create(engine , options);
World.add(world, mConstraint);

	ball1 = new Pendulum(340, 450, "white");
	ball2 = new Pendulum(390, 450,"white");
	ball3 = new Pendulum(440, 450, "white");
	ball4 = new Pendulum(490, 450," white");
	ball5 = new Pendulum(540, 450, "white");
	roof1 = new Roof();

  rope1 = new Rope(ball1.body, { x: 340, y: 200 });
  rope2 = new Rope(ball2.body, { x: 390, y: 200 });
  rope3 = new Rope(ball3.body, { x: 440, y: 200 });
  rope4 = new Rope(ball4.body, { x: 490, y: 200 });
  rope5 = new Rope(ball5.body, { x: 540, y: 200 });
	
  
}


function draw() {
  background(255, 255, 255)
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  roof1.visible = false;
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

 /* function keyPressed(){
    if(keyCode === UP_ARROW){
 //isStatic : false
      Matter.Body.applyForce(ball1.body, ball1.body.position, {x:-50, y:-45})
    }
  }*/

function mouseDragged(){
  Matter.Body.setPosition(ball1.body, {x : mouseX, y : mouseY});
}

