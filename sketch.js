var form;
var formbackground, level1, level1sprite;

function setup() {
  createCanvas(windowWidth,windowHeight);
  createSprite(400, 200, 50, 50);

  formbackground=loadImage("./assets/bg1.jpg");
  level1=loadImage("./assets/level1.png");

  

}

function draw() {
 //background(formbackground);  

  start();
 

  drawSprites();

  //form.display();
  


}


function windowResized() {

 resizeCanvas(windowWidth,windowHeight);


 
}


    
function start() {



}
