var next;

function setup() {
  createCanvas(1500,400);
  
}

function draw() {
  background(255,255,255); 
  textSize(20)
  fill("lightgreen") 
  text("Welcome to  “GIZEM” game .",200,50)
  fill("blue") 
  text("Your friend has been Kidnapped by a robot in future and you  have to you save from the AI.",200,100)
  text("Complete the stages to finally  rescue your friends from the future.",200,150)
  text("First game is the  Runner games.Score 200 points to move to the next stage.",200,200)
  text("Continue till the end and  help recover your friends.",200,250)
  text("I wish you luck and hope you succeed.",200,300)
  end();
  drawSprites();
}
function end(){
  next=createButton("next");
  next.position(800,400)
  next.mousePressed(() => {
    window.open("https://gerisha.github.io/infi/", '_top')
    
  })
}

