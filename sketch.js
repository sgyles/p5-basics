var newWidth = 35; 
var newHeight = 35;

//if you have background with the same rgb for example 250,250,250 you only have to  write it once
function setup(){
    background(50);
    createCanvas(600,400);
}

//draw function loops forever
    function draw(){
    if(mouseIsPressed){
    noStroke();
    fill(14, 100, 239)
    rect(mouseX,mouseY,newWidth,newHeight)
    }
}