  //isTouching();

  var fixedRect,movingRect;


function setup() {
          createCanvas(800,400);

          //creating sprite objects 
          fixedRect=createSprite(200, 200, 50, 80);
          fixedRect.debug=true;
          fixedRect.shapeColor="green";
          
          movingRect=createSprite(400,200,80,30);
          movingRect.debug=true;
          movingRect.shapeColor="black"; 

} 


function draw() 
 {  
            
          background("lavender");
          //making moving rect move  
          movingRect.x= World.mouseX;
          movingRect.y=World.mouseY;
            
          if(movingRect.x-fixedRect.x<fixedRect.width/2 + movingRect.width/2
            
          && fixedRect.x-movingRect.x<fixedRect.width/2 + movingRect.width/2
          && movingRect.y-fixedRect.y<fixedRect.height/2 + movingRect.height/2
            
          && fixedRect.y-movingRect.y<fixedRect.height/2 + movingRect.height/2) 
          {
          movingRect.shapeColor="red"; 
          fixedRect.shapeColor="red";
            
          } 
          else{ 
            fixedRect.shapeColor="pink";
            movingRect.shapeColor="yellow"; 
          }

            drawSprites();
}  
//i love coding because i have an amazing teacher 


//love you more