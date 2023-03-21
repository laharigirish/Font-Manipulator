function setup(){
  video= createCapture(VIDEO);
  video.size(550,500);
  
  canvas= createCanvas(550,550);
  canvas.position(560,100);
  posenet= ml5.poseNet(video,modelloaded);
  posenet.on('pose', gotposes);
}
function draw(){
  background("white");
}

function modelloaded(){
  console.log("Model Loaded");
}

function gotposes(results){
if(results.length>0){
  console.log(results);
}
else{
  
}
}
