const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let bombImg,coinImg,happyImg,sadImg,stoneImg,walkingImg,backgroundImg;
var person,bomb,coin,stone;

var engine,body;


function preload(){
  bombImg = loadImage("bomb.png");
  coinImg = loadImage("coin.png");
  happyImg = loadImage("happy.png");
  sadImg = loadImage("sad.png");
  stoneImg = loadImage("stone.png");
  walkingImg = loadImage("walking.png");
  backgroundImg = loadImage("nature.jpg");
}

function setup() {
  createCanvas(1000,500);

  ground = new Ground(500,490,1200,20);

  engine = Engine.create();
  world = engine.world;

 person = createSprite(200,200,20,20);
 person.addImage("walking",walkingImg);
 person.scale = 0.8;
 person.addImage("happy",happyImg);
 person.addImage("sad",sadImg);


 
 


  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  image(backgroundImg,0,0,1000,500);

  ground.display();
  
  //spawnStones();
  //spawnCoins();

  var rand=Math.round(random(1,2))
  if(rand===1){
    spawnStones();
  }
  else{
    spawnCoins();
  }

  drawSprites(); 
}

function spawnStones(){
  if(frameCount%100===0){
  stone = createSprite(300,460,30,30);
  stone.addImage("stone",stoneImg);
  stone.scale=0.2;
  stone.velocityX=5;

  }
}

function spawnCoins(){
  if(frameCount%100===0){
  coin = createSprite(100,460,40,40);
  coin.addImage("coin",coinImg);
  coin.x = Math.round(random(10,300));
  coin.velocityX = 5;
  coin.scale=0.2
  }
}

function spawnBombs(){
  if(frameCount%100===0){
    bomb = createSprite(200,300,20,20);
    bomb.addImage("bomb",bombImg);   
  //coin.x = Math.round(random(10,300));
  bomb.velocityX = 2;
  }
}
