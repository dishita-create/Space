var Iss,Space;

function preload(){
  back=loadImage("spacebg.jpg")
  rock=loadImage("iss.png")
  craft=loadAnimation("spacecraft1.png","spacecraft2.png","spacecraft3.png","spacecraft4.png")
}  
  
  
  
  
  function setup() {
  createCanvas(windowWidth,windowHeight);
 
  Space=createSprite(600,500,20,20)
  Space.addAnimation("flying","spacecraft1.png")
  Space.scale=0.2
  Iss=createSprite(600, 300, 50, 50);
  Iss.addImage(rock)
  Iss.scale=1.1
  dock=createSprite(528,322,30,30)
  dock.visible=false;
}

function draw() {
  background(back);  
  drawSprites();
  keyPressed()
}
function keyPressed(){
  if(keyDown(UP_ARROW)){
    Space.y=Space.y-2
    Space.addAnimation("flying","spacecraft2.png")
  }
  if(keyDown(DOWN_ARROW)){
    Space.y=Space.y+2
  }
  if(keyDown(RIGHT_ARROW)){
    Space.x=Space.x+2
    Space.addAnimation("flying","spacecraft4.png")
  }
  if(keyDown(LEFT_ARROW)){
    Space.x=Space.x-2
    Space.addAnimation("flying","spacecraft3.png")
  }
  if(dock.isTouching(Space)){
    fill("white")
    textSize(20)
    text("DOCKING SUCCESSFUL!!",700,500)
  }
}