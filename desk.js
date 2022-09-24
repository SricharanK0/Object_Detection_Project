img="";
status1="";
function preload(){
    img=loadImage("https://i5.walmartimages.com/asr/a41911a1-3a03-48e6-a719-da756a5251c8_1.a89df9ddadd85f216714b77a609e1cb1.jpeg");
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
    text("Desk",350,110);
    noFill();
    stroke("red");
    rect(70,69, 452 ,300);
    

}