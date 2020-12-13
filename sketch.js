var car,wall;
var speed,weidth;


function setup() {
  createCanvas(800,400);
  speed = random(55,90);
 weidth = random(400,1500);
 car = createSprite(200, 200, 20, 20);
car.velocityX = speed;
  wall = createSprite(750,200,10,300);
  
  
}

function draw() {
  background("blue");
  
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    
    car.velocityX = 0;
    var deformation = 0.5 * weidth * speed * speed/22509;
    if(deformation>180)
    {
      car.shapeColor = "red";
    }
   if(deformation<180 && deformation>100)
   {
     car.shapeColor = "yellow";
   }
   if(deformation<100)
   {
     car.shapeColor="green";
   }
  }  
  
drawSprites();
}