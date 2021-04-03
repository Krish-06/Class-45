var boy;
var obstacle, boost;
var background,bg;

function preload(){
    boyImage = loadImage("Images/boy.png");
    backgroundImage = loadImage("Images/city.png");
    obstacleImage = loadImage("Images/obstacle.png");
    boostImage = loadImage("Images/arrow.png");
}


function setup(){
    canvas = createCanvas(1350,600);
    bg = createSprite(700,170);
    bg.addImage(backgroundImage);
    bg.velocityX = -7;
    bg.scale = 3;
    boy = createSprite(200,400,50,50);
    boy.addImage(boyImage);
    boy.scale = 0.2;
    obstacle = createSprite(300,400,70,40);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.3;
    boost = createSprite(350,440,77,50);
    boost.addImage(boostImage);
    boost.scale = 0.2;
    
}

function draw() {
    background("blue");
    boy.velocityX = 7;
    
    if(bg.x<0){
        bg.x = 1000;
    }
    

    drawSprites();
}
