img="";
status1="";
function preload(){
    img=loadImage("tvac.jpeg");
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
    text("TV",350,110);
    noFill();
    stroke("red");
    rect(200,69, 382 ,200);
    text("AC", 50,30);
    rect(20,30,200,60);
}