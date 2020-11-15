var ball,img,paddle;
function preload() {
  ballImage = loadImage("ball.png")
  paddleImage = loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
   paddle = createSprite(380,200,20,20)
   ball = createSprite(30,200,10,10)
  
   paddle.addImage(paddleImage)
   ball.addImage(ballImage)
  
   ball.velocityX = 5
  

}

function draw() {
  background(205,153,0);
  edges = createEdgeSprites();
  
   ball.bounceOff(edges[0])
   ball.bounceOff(edges[2])
   ball.bounceOff(edges[3])
   ball.bounceOff(paddle,randomVelocity)
  

  
 
 
  paddle.collide(edges[0])
  paddle.collide(edges[2])
  
  
  if(keyDown(UP_ARROW))
  {
     paddle.y = paddle.y - 6
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y = paddle.y + 6
  }
  drawSprites();
  
}

function randomVelocity()
{
  
  ball.velocityY = random (-7,7)
}

