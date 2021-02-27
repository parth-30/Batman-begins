const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world;
var drops = []
var maxDrops = 100


function preload(){
    
}

function setup(){
    var canvas = createCanvas(400,700);

    engine=Engine.create();
    world=engine.world;

    for(var i=0; i<maxDrops; i++){
        drops.push(new Drops(random(0,400), random(0,400)));
    }
   
    
}

function draw(){
    Engine.update(engine);
    background(0);
    for(var i=0; i<maxDrops; i++){
        drops[i].display();
        drops[i].display();
    }
    
}   

