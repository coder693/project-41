const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var umbrella1,thunderimg, thunder2,thunder3,thunder4;
var maxdrops=100;
function preload(){
  thunderimg=loadImage("1.png")  
}

function setup(){
   createCanvas(400,800);
   umbrella1=new unbrella(200,720); 
   thunder=createSprite(200,200);
   thunder.addImage(thunderimg)
   for(var i=0; i<maxdrops; i++)
   {
      drops.push(new createrain(random(0,400), random(0,400),10))

   }
}

function draw(){
   Engine.update(engine);
   background("black");
   umbrella1.display();
   drops.display();
   update();
   spawnThunder();
}   

function spawnThunder()
{
  if(frameCount%60==0)
  {
     thundersprite = createSprite(200,200,20,40);
    
    
    //generate random obstacles
    var rand2 = Math.round( random(1,4));
   switch(rand2)
   {
     case 1: obstaclesprite.addImage("1",thunderimg);
     case 2:obstaclesprite.addImage("2",thunder2);
     case 3: obstaclesprite.addImage("3",thunder3);
     case 4: obstaclesprite.addImage("4",thunder4);
     
    
   
    
    thundersprite.lifetime = 10;
    
    
  }
}
}
