img="";
status1="";
function preload(){
    img=loadImage("https://http2.mlstatic.com/D_NQ_NP_2X_867855-MLM45082355461_032021-F.jpg");
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
    text("Bottle",100,210);
    noFill();
    stroke("red");
    rect(100,79, 242 ,300);
    text("Bottle", 400, 210);
    rect(350,79,242,300 );
}