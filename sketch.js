var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var count = 0; 
var particle; 
var gameState = "start";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score "+score,50,30); 
 //text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
  text("500",20,520); 
  text("500",100,520);
  text("500",180,520); 
  text("500",260,520); 
  text("100",340,520); 
  text("100",420,520); 
  text("100",500,520); 
  text("200",580,520); 
  text("200",660,520); 
  text("200",740,520);  

  if(gameState==="end"){
    textSize(100); 
    text("GAME OVER",150,300); 
  }
   for (var i = 0; i < plinkos.length; i++) {

     
     plinkos[i].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
   if(particle!=null){
     particle.display(); 
     if(particle.body.position.y>700){
       if(particle.body.position.x<300){
         score = score+500; 
         particle=null; 
         if(count>=5){
           gameState = "end"; 

         }
       }
       else 
       if(particle.body.position.x>300 && particle.body.position.x<600){
        score = score+100; 
        particle=null; 
        if(count>=5){
          gameState = "end"; 
        }
      }
      else
      if(particle.body.position.x>600 && particle.body.position.x<900){
        score = score+200; 
        particle=null; 
        if(count>=5){
          gameState = "end"; 
        }
      }
     }
   }
 
  
   
}
function keyPressed(){
  if(gameState!="end"){
count++
  
  if(keyCode===32){
count++
particle = new Particle(mouseX,10,10); 
  }
}
}