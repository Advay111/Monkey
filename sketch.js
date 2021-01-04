var monkey , monkey_running
var bananaImage, obstacleImage
var FoodGroup, obstacleGroup
var ground
var score = 0
function preload(){ 
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600,300);
  monkey = createSprite(100,260,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(300,300,600,20);
  ground.velocityX = -6;
  
}

function draw() {
  background(300);
  if (ground.x < 500){
     ground.x = ground.width/2;
  }
  if(keyDown("space") && monkey.y >= 150) {
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  createObstacles();
  createBananas();
  drawSprites(); 
  text("Survival Time: " + score,270,30);
  score = score + Math.round(getFrameRate()/60);
}

function createObstacles() {
  if(frameCount % 100 == 0){
    var obstacles = createSprite(600,275,20,20);
    obstacles.addImage(obstacleImage);
    obstacles.velocityX = -6;
    obstacles.scale = 0.1
    obstacles.lifetime = 100;
  }
}

function createBananas() {
  if(frameCount % 80 == 0){
    var banana = createSprite(600,275,20,20);
    banana.addImage(bananaImage);
    banana.velocityX = -6;
    banana.scale = 0.1;
    banana.y = Math.round(random(120,200));
    banana.lifetime = 100;
  }
}