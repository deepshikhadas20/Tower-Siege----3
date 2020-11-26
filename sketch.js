const Engine = Matter.Engine;
const World = Matter.World; 
const Bodies = Matter.Bodies; 

const Constraint = Matter.Constraint;
var engine , world; 
var ground, table1, table2; 
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10; 
var box11,box12,box13,box14,box15,box16,box17,box18;
var slingshot;
var polygon, polygon_img; 
var score = 0; 

function preload(){ 
  polygon_img = loadImage("hexagon.png");
}



function setup() {
  createCanvas(1200,400);
  engine = Engine.create(); 
  world = engine.world; 

  Engine.run(engine); 

  ground = new Ground(600,390,1200,20); 
  table1 = new Ground(430,340,180,20);
  table2 = new Ground(750,250,180,20);

  box1 = new Box(370,300);
  box2 = new Box(400,300);
  box3 = new Box(430,300);
  box4 = new Box(460,300);
  box5 = new Box(490,300);   
  
  box6 = new Box(400,250);
  box7 = new Box(430,250);
  box8 = new Box(460,250);

  box9 = new Box(430,200);

  box10 = new Box(680,215);
  box11 = new Box(710,215);
  box12 = new Box(740,215);
  box13 = new Box(770,215);
  box14 = new Box(800,215);   
  
  box15 = new Box(710,165);
  box16 = new Box(740,165);
  box17 = new Box(770,165);

  box18 = new Box(740,115);

  polygon = Bodies.circle(50,200,20); 
  World.add(world,polygon); 
slingshot = new SlingShot(polygon,{x:100,y:200}); 




}

function draw() {
  background(255,255,255); 
  ground.display();  
  table1.display(); 
  table2.display();
  
  text("SCORE: "+score, 750,40); 

  box1.display();  
  box2.display();  
  box3.display();  
  box4.display();  
  box5.display();  

  box6.display(); 
  box7.display(); 
  box8.display(); 

  box9.display(); 

  box10.display();  
   box11.display();  
  box12.display();  
  box13.display();  
  box14.display();  

  box15.display(); 
  box16.display(); 
  box17.display(); 

  box18.display(); 
  
  box1.scoring();  
  box2.scoring();  
  box3.scoring();  
  box4.scoring();  
  box5.scoring();  

  box6.scoring(); 
  box7.scoring(); 
  box8.scoring(); 

  box9.scoring(); 

  box10.scoring();  
   box11.scoring();  
  box12.scoring();  
  box13.scoring();  
  box14.scoring();  

  box15.scoring(); 
  box16.scoring(); 
  box17.scoring(); 

  box18.scoring(); 

  imageMode(CENTER); 
  image(polygon_img, polygon.position.x,polygon.position.y,40,40); 

  slingshot.display(); 
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){ 
  if (keyCode === 32){ 
    slingshot.attach(polygon); 
  
  }
}

