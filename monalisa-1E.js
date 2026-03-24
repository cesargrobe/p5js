function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("blue");
  
  fill("red"); //face
  circle(200,200,250 );
  fill("white"); //olho
  circle(150, 160, 50);
  circle(250, 160, 50);
  
  fill("black"); //pupila
  olhoX = map(mouseX, 0, 400, 145, 185 );
  olhoY = map(mouseY, 0, 400, 145, 185 );
  circle( olhoX, olhoY, 10 );
  circle( olhoX+100, olhoY, 10);
  
  //nariz
  fill("green");
  triangle(175,225,200,200,225,225 );
  
  //boca
  fill("rgb(246,106,130)");
  ellipse(200,257,100,30);
  line(170,260,240,260);
  
  //como descobrir coordenadas
  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}
