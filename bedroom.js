img="";
status1="";
function preload(){
    img=loadImage("bedroom.jpg");
}
function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects" 
}
function modelLoaded(){
    console.log("modelLoaded");
    status1=true;
    
    objectDetector.detect(img, gotResult);
    console.log(status1);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }console.log(status1);
    console.log(results);
}
function draw(){
    image(img,0,0,600,400);
    fill("#FF0000");
    textSize(24);
    text("Bed",100,210);
    noFill();
    stroke("red");
    rect(50,179, 382 ,200);
    text("Plant", 200, 210);
    rect(180,190,75,105);
}