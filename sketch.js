var catImage1, catImage2,catImage3, catImage4;
var mouseImage1, mouseImage2,mouseImage3, mouseImage4;
var score=0;
var bkground,cat,mouse;
function preload() {
    //load the images here 
    catImage1 = loadImage("cat1.png");
    catImage2 = loadImage("cat2.png");
    catImage3 = loadImage("cat3.png");
    catImage4 = loadImage("cat4.png");

    mouseImage1 = loadImage("mouse1.png");
    mouseImage2 = loadImage("mouse2.png");
    mouseImage3 = loadImage("mouse3.png");
    mouseImage4 = loadImage("mouse4.png");

    gardenImage1 = loadImage("garden.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bkground=createSprite(400,400);
    bkground.addImage(gardenImage1);
    //bkground.scale=0.9;
    //bkground.velocityX=-1;
    //bkground.X=bkground.width/2;

    cat=createSprite(700,500,50,10);
    cat.addImage(catImage1);
    cat.scale=0.2;
    //cat.shapeColor="green";

    mouse=createSprite(100,500,50,10);
    mouse.addImage(mouseImage1);
    mouse.scale=0.2;

}

function draw() {

    background(255);
    //text("Score: "+ score, 200,50);
    text(cat.x + ',' +mouse.x,10,45);
    text(cat.height + ',' +mouse.height,200,45);
    console.log(cat.x);
    //Write condition here to evalute if tom and jerry collide
    if(keyDown("Left_Arrow")){
        //keyPressed();
        cat.velocityX=-5;
        cat.addAnimation("catrunning",catImage2);
        cat.changeAnimation("catrunning");
      }
    if((cat.x-mouse.x)>(cat.width+mouse.width)/2){
        cat.addAnimation("catcollided",catImage4);
        cat.changeAnimation("catcollided");
        cat.velocityX=0;
    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
