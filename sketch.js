var caixa;
var ground;
function setup() {
  createCanvas(400,400);
  caixa=createSprite(200,200,20,20);
  ground=createSprite(200,400,400,10);
  fill("blue");
  ground.velocityX=-4;
}

function draw() 
{
  background(30);

  //movimenta a caixa
  if(keyIsDown(RIGHT_ARROW)){
    caixa.position.x=caixa.position.x+5;
  }

  if(keyIsDown(LEFT_ARROW)){
    caixa.position.x=caixa.position.x-5;
  }

  if(keyIsDown(DOWN_ARROW)){
    caixa.position.y=caixa.position.y+5;
  }
  
  if(keyIsDown(UP_ARROW)){
    caixa.position.y=caixa.position.y-5;
  }

  caixa.collide(ground);
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  drawSprites();
}




