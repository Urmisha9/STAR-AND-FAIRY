var fairy, fairyImage;
var backG, backImage;
var star, starImage;
var music; 
var starBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
   //preload the images here
   fairyImage=loadAnimation("images/fairy1.png","images/fairy2.png");
   backImage=loadImage("images/starnight.png");
   music=loadSound("sound/JoyMusic.mp3");
   starImage=loadImage("images/star.png");




}

function setup() {
  var canvas = createCanvas(800, 750);
   music.play();
   fairy = createSprite(130,520);
   fairy.addAnimation("fairyflying",fairyImage);
   fairy.scale = 0.25;

   star = createSprite(650,30);
   star.addImage(starImage);
   star.scale = 0.3;
  
   engine = Engine.create();
   world = engine.world;
 
   starBody = Bodies.circle(650,30,5,{restitution:0.5,isStatic:true});
   World.add(world,starBody);
   Engine.run(engine);
}


function draw() {
  background(backImage);

  star.x= starBody.position.x;
  star.y= starBody.position.y;
  console.log(star.y);


  if(starBody.position.y>470){
    Matter.Body.setStatic(starImage,true);
  }

  drawSprites();
}
  function keyPressed(){
    if(keyCode === LEFT_ARROW){
     fairy.velocityX = -0.5;
    
  }
   else if(keyCode === RIGHT_ARROW){
    fairy.velocityX = 0.5;
  
  }
   if(keyCode === DOWN_ARROW){
    
      Matter.Body.setStatic(starBody,false);
  
    }
  }   

