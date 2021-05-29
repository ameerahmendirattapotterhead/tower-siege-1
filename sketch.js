const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingshot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);



  block17 = new Block(615, 100, 30, 40);
  block18 = new Block(645, 100, 30, 40);
  block19 = new Block(675, 100, 30, 40);
  block20 = new Block(610, 100, 30, 40);  
  block21 = new Block(300, 100, 30, 40);
  block22 = new Block(450, 100, 30, 40);

  slingshot = new slingshot(ball,{x:300,y:640})
  ball=Bodies.circle(52,100,20);
  World.add(world,ball)
  ball.x=World.mouseX
  ball.Y=World.mouseY
}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  imageMode(CENTER)
  image(polygon_img, ball.position.x,ball.position.y,40,40)
  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("purple")
  block17.display();
  fill("red")
  block18.display();
  fill("yellow")
  block19.display();
  fill("blue")
  block20.display();
  fill("green")
  block21.display();
  fill("yellow")
  block22.display();
  slingshot.display();
  
}
function mouseDragged() {
  Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  slingshot.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    Body.setPosition(ball.body, { x: 300, y: 640 });
    slingshot.attach(ball.body);
  }

}

