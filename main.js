function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,340);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video , modelLoaded)
    poseNet.on('pose',gotPoses)
}
function gotPoses()
{
  if(results.length > 0)
  {
    console.log(results);
  }
  leftwristX= results[0].pose.leftWrist.x;
  rightwristX = results[0].pose.rightWrist.x;
  difference = floor(leftwristX - rightwristX);

}
function modelLoaded()
{
    console.log('PoseNet is Initialized!');
}
function draw()
{
    background('#ADD8E6');
    textsize(difference);
    fill( '#7FFFD4');
    text('Hanana',50,400);
}