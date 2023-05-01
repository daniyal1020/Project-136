Status = "";
function preload(){

}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 300, 300);
}
function start(){
    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = 'Status: Detecting Objects';
    Input = document.getElementById('input').value;
}
function modelLoaded(){
    console.log('CoCoSSD is Initialised.');
    Status = true;
}