//Variables que contienen Información
var trex, trex_running, trex_collided;

var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;



var newImage;

//P5 libreria de Js
//Functio Preload Precargar todos los Archivos Necesarios en el Codigo

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");


obstacle1 = loadImage("obstacle1.png");
obstacle2 = loadImage("obstacle2.png");
obstacle3 = loadImage("obstacle3.png");
obstacle4 = loadImage("obstacle4.png");
obstacle5 = loadImage("obstacle5.png");
obstacle6 = loadImage("obstacle6.png");

 
}

//function setup Configura El Entorno Del Juego

function setup() {

  //Canvas Coloca La Pantalla del Juego

  createCanvas(600, 200);
//createSprite - genera un objeto en el canvas
  trex = createSprite(50,160,20,50);
  //addAnimation - asigna una animacion al sprite:
  trex.addAnimation("running", trex_running);
 //scale - asigna el tamaño del sprite
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
   //ground.x - posición en eje x (horizontal) del sprite:
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hola"+ 5)
  
}
//function draw - dibujar los elementos en el canvas:
function draw() {
  background(180);
  
    //Condicion if - una acción se realiza si una condición se cumple
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  //Añade la gravedad al trex
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
   //collide - colocar interacción entre 2 sprites
  trex.collide(invisibleGround);
  
  //aparecer nubes
  //Llamamos a la función que hace aperecer las nubes:
  spawnClouds();
  
  drawSprites();
}

function spawnClouds() {
  //escribir aquí el código para aparecer las nubes
  
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //asignar tiempo de vida a una variable
    cloud.lifetime = 134
    
    //ajustar la profundidad
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

