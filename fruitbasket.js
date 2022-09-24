img="";
status1="";
function preload(){
    img=loadImage("fruitbasket.jpeg");
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
    text("FruitBasket",350,110);
    noFill();
    stroke("red");
    rect(70,69, 452 ,300);
    

}