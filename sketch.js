const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ball, ground;


function setup(){
  var canvas = createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var option={
    restitution : 0.9
  }

  ball = Bodies.circle(200, 200, 15,option);
  World.add(world,ball);

  var hi = {
   isStatic : true
  }

  ground = Bodies.rectangle(200,390,400,10,hi);
  World.add(world,ground);

}

function draw(){
  background(0);

  Engine.update(engine);
  
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400,10);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 15,15);

}