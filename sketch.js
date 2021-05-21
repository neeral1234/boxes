var canvas;
var music;
var block1,block2,block3,block4,ball;

function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(800,600);
    block1=createSprite(0,580,400,30);
    block1.shapeColor="red";
    block2=createSprite(340,580,400,30);
    block2.shapeColor="purple";
    block3=createSprite(600,580,400,30);
    block3.shapeColor="blue";
    block4=createSprite(790,580,400,30);
    block4.shapeColor="green";
    ball=createSprite(100,40,50,50);
    ball.shapeColor="yellow";
    ball.velocityX=4;
    ball.velocityY=4;

    //create 4 different surfaces

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    music.play();
    //create edgeSprite
    if(block1.isTouching(ball)&&ball.bounceOff(block1)){
        ball.shapeColor="red";
    }
    if(block2.isTouching(ball)&&ball.bounceOff(block2)){
        ball.shapeColor="purple";
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop();
    }
    if(block3.isTouching(ball)&&ball.bounceOff(block3)){
        ball.shapeColor="blue";
    }
    if(block4.isTouching(ball)&&ball.bounceOff(block4)){
        console.log("green");
        ball.shapeColor="green";
    }
    
    //add condition to check if box touching surface and make it box
    drawSprites();
}
