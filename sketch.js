var movingrect,fixedrect ;



function setup() {
  createCanvas(800,400);
 movingrect =createSprite(400, 200, 50, 50);
fixedrect = createSprite (200,200,50,50) ;
movingrect.velocityX =-10
fixedrect.velocityX = 5

movingrect.shapeColor = "yellow"
fixedrect.shapeColor = "blue"
}

function draw() {
  background(0);  
  drawSprites();

if(movingrect.x - fixedrect.x <= movingrect.width/2 + fixedrect.width/2 &&
fixedrect.x - movingrect.x <= movingrect.width/2 + fixedrect.width/2 &&
  movingrect.y - fixedrect.y<= movingrect.height/2 + fixedrect.height/2&&
   fixedrect.x - movingrect.x<= movingrect.height/2 + fixedrect.height/2 ){
    movingrect.velocityX =movingrect.velocityX *-1
    fixedrect.velocityX = fixedrect.velocityX *-1
   }




}