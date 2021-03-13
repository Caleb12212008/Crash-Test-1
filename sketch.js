var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(300,200,100,30)
  car.shapeColor = "blue"
  wall = createSprite(600,200,30,200)
  wall.shapeColor = "yellow"
  car.velocityX = 2
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
if(isTouching(car,wall)){
car.shapeColor = "red"
wall.shapeColor = "red"

}
else{
car.shapeColor = "blue"
wall.shapeColor = "yellow"
}

  drawSprites();




}





