var WEL = 1;
var SEL = 0;
var Info = 3;
var gameState = WEL;

var intro, iIMG;
var note, nIMG;
var spaceShip, IMG
var spaceShip2, IMG2
var spaceShip3, IMG3
var spaceShip4, IMG4
var welcome, welIMG
var select, selIMG;
var next,nIMG;
var back,bIMG;

var K1,K2,K3,K4,k1,k2,k3,k4;



function preload(){
IMG=loadImage("s1.png");
IMG2=loadImage("s2.png");
IMG3=loadImage("s3.png");
IMG4=loadImage("s4.png");
welIMG = loadImage("WEL2.png");
selIMG = loadImage("Select1.png");
nIMG =loadImage("NEXT.png");
bIMG =loadImage("BACK.png");
k1 = loadImage("K1.png");
k2 = loadImage("K2.png");
k3 = loadImage("K3.png");
k4 = loadImage("K4.png");
iIMG = loadImage("intro.png");
nIMG = loadImage("note.png");

}

function setup(){
  createCanvas(1600,850);
  
  
  
 
  
}

function draw(){
 // background(0);
  
  if(gameState==WEL){
  welcome = createSprite(800,425);
  welcome.addImage(welIMG);
  welcome.scale = 0.75;
  K1 = createSprite(800,253);
  K1.addImage(k1);
  K1.scale = 0.25;
  K2 = createSprite(800,380);
  K2.addImage(k2);
  K2.scale = 0.25;
  K3 = createSprite(800,500);
  K3.addImage(k3);
  K3.scale = 0.25;
  K4 = createSprite(800,618);
  K4.addImage(k4);
  K4.scale = 0.25;

  note = createSprite(430,700);
  note.addImage(nIMG);
  note.scale = 0.5;
  

  K1.visible = false;
  K2.visible = false;
  K3.visible = false;
  K4.visible = false;

  }
  
  if(mousePressedOver(K1) && gameState == WEL) {   
      gameState = Info;
      intro = createSprite(800,435);
      intro.addImage(iIMG);
      intro.scale = 1;
  }
  
  if(mousePressedOver(K3)&& gameState == WEL) {
    gameState = SEL;
    Select1();
  }
  
  if(mousePressedOver(back)&&gameState == SEL){
  gameState = WEL;  
  }
  
drawSprites();
  
}
function spaceShips(){
  spaceShip = createSprite(250,300,40,40);
  spaceShip.addImage("spaceCraft1",IMG);
  spaceShip.scale = 0.2;
  
  spaceShip2 = createSprite(100,400,40,40);
  spaceShip2.addImage("spaceCraft2",IMG2);
  spaceShip2.scale = 0.4;
  
  spaceShip3 = createSprite(370,300,40,40);
  spaceShip3.addImage("spaceCraft3",IMG3);
  spaceShip3.scale = 0.2;
  
  spaceShip4 = createSprite(480,300,40,40);
  spaceShip4.addImage("spaceCraft4",IMG4);
  spaceShip4.scale = 0.65;
}
/*function intro(){
  
    
}*/
function Select1(){
  
  if(gameState == SEL){
  select = createSprite(800,435);
  select.addImage(selIMG);
  select.scale = 0.8; 
  
  next = createSprite(1480,820);
  next.addImage(nIMG);
  next.scale = 0.9;

  back = createSprite(120,820);
  back.addImage(bIMG);
  back.scale = 0.9;
  }

}