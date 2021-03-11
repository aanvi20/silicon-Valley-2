/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;*/

var infant, infant_bg, infant_bg_2
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacle7, obstacle8, obstacle9
var infant_IMG
var invisibleGround

var health, happiness, wealth, social

function preload() {
   infant_bg_2 = loadImage("Infant bg.jpg")
   infant_IMG = loadImage("Images/Infant/infant.gif")

   obstacle1 = loadImage("Images/Infant/baby food.gif");
   obstacle2 = loadImage("Images/Infant/dirty hands.gif");
   obstacle3 = loadImage("Images/Infant/milk bottle.png");
   obstacle4 = loadImage("Images/Infant/parents.png");
   obstacle5 = loadImage("Images/Infant/rattle.png");
   obstacle6 = loadImage("Images/Infant/stroller.png");
   obstacle7 = loadImage("Images/Infant/toy 1.png");
   obstacle8 = loadImage("Images/Infant/Toy 2.gif");
   obstacle9 = loadImage("Images/Infant/vaccine.png");
   

}

function setup(){
    var canvas = createCanvas(1200,700);
    //engine = Engine.create();
    //world = engine.world;

     infant_bg = createSprite(600, 300);
    infant_bg. addImage(infant_bg_2);
    infant_bg.scale = 2;

    infant = createSprite(100, 520, 50, 50)
    infant.addImage(infant_IMG);
    infant.scale = 0.2

    invisibleGround = createSprite(600, 550, 1200, 20)
    invisibleGround.visible = false;

    health = 50
    happiness = 50
    wealth = 50
    social = 50
}

function draw(){
    background(0);
  //  Engine.update(engine);

  if( keyDown("space") && infant.y >= 450) {
   infant.velocityY = -12;
   
 }
 console.log(infant.y)

 infant.velocityY = infant.velocityY + 0.8

 infant.collide(invisibleGround);
   

     infant_bg.velocityX = -3

     if (infant_bg.x < 0){
        infant_bg.x = infant_bg.width/2;
      }

      drawSprites();
      
      textSize(20);
      fill ("black")
      text ("Health: " + health, 100, 100)
      text ("Happiness: " + happiness, 300, 100)
      text ("Wealth: " + wealth, 500, 100)
      text ("Social: " + social, 700, 100)
      spawnObstacles();
}

function spawnObstacles() {
   if(frameCount % 200 === 0) {
     var obstacle = createSprite(1250,height-200,10,40);
     //obstacle.debug = true;
     obstacle.velocityX = -5;
     
     //generate random obstacles
     var rand = Math.round(random(1,6));
     switch(rand) {
       case 1: obstacle.addImage(obstacle1);
               break;
       case 2: obstacle.addImage(obstacle2);
               break;
       case 3: obstacle.addImage(obstacle3);
               break;
       case 4: obstacle.addImage(obstacle4);
               break;
       case 5: obstacle.addImage(obstacle5);
               break;
       case 6: obstacle.addImage(obstacle6);
               break;
       default: break;
     }
     
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.2;
    // obstacle.lifetime = 300;
     //add each obstacle to the group
   //  obstaclesGroup.add(obstacle);
   }
 }
 

