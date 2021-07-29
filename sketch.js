var pathImg, runner;
var boy, path;
var invisiblerightboundaries , invisibleleftboundaries;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runner = loadAnimation("Runner-1.png", "Runner-2.png");
  }

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,300);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;

  boy = createSprite(200,200,50,100);
  boy.addAnimation("running", runner);
  boy.scale = 0.1;

  invisibleleftboundaries = createSprite(50,200,20,400);
  invisibleleftboundaries.visible = false;

  invisiblerightboundaries = createSprite(350,200,20,400);
  invisiblerightboundaries.visible = false;
}

function draw() {
  //background(0);
  if(path.y > 400 ){
  path.y = height/2
  }

  if(mouseX<100 && mouseY>10){
    boy.x=90; 
  }

    if(mouseX>190 && mouseY>10){
      boy.x= 350;
  }

boy.collide(invisibleleftboundaries);
boy.collide(invisiblerightboundaries);
drawSprites();
}