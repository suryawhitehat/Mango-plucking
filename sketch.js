const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var tree;
var stone;
var ground;
var launcher;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world;
var boy;
var launcherForce=100;

function preload(){
  boy=loadImage ("boy.png");
}

function setup(){
  createCanvas (1300,600);
  engine = Engine.create();
  world = engine.world;

  stone = new Stone(235,420,30);

  mango1 = new Mango(1100,100,30);
  mango2 = new Mango(1170,130,30);
  mango3 = new Mango(1010,140,30);
  mango4 = new Mango(1000,70,30);
  
  mango5 = new Mango(1100,70,30);
  mango6 = new Mango(1000,230,30);
  mango7 = new Mango(900,230,30);
  mango8 = new Mango(1140,150,40);
  mango9 = new Mango(1100,230,40);
  mango10 = new Mango(1200,200,40);
  mango11 = new Mango(1120,50,40);
  mango12 = new Mango(900,160,40);

  tree = new Tree(1050,80,450,600);
  ground = new Ground(width/2,600,width,20);
  launcher = new Launcher(stone.body,{x:235,y:420});

  

}

function draw(){
  background(230);
  Engine.update(engine);
  textSize(25);
  text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY!!!",50,50);
  image(boy,200,340,200,300);

  tree.display();
 
  
  ground.display();
  launcher.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stone.display();
  
  detedtCollision(stone,mango1);
  detedtCollision(stone,mango2);
  detedtCollision(stone,mango3);
  detedtCollision(stone,mango4);
  detedtCollision(stone,mango5);
  detedtCollision(stone,mango6);
  detedtCollision(stone,mango7);
  detedtCollision(stone,mango8);
  detedtCollision(stone,mango9);
  detedtCollision(stone,mango10);
  detedtCollision(stone,mango11);
  detedtCollision(stone,mango12);


}
function detedtCollision(lStone,lMango){
  mangoBodyPosition=lMango.body.position;
  stoneBodyPosition=lStone.body.position;
   var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
   if(distance<=lMango.r+lStone.r){
     Matter.Body.setStatic(lMango.body,false);
   }

}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  launcher.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:235,y:425});
    launcher.attach(stone.body);
  }
}



