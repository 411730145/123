function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  rectMode(CENTER) //設方塊中心點為座標
  background(0); //背景顏色 要為黑色
  noFill(0) //不充滿顏色 
  stroke("#7A9E9F") //線條顏色為白色
  // ellipse(25,25,50) //在座標(x,y)產生一個直徑50的圓
  // rect(25,25,50)
  // ellipse(50,50,25) //右下角的小圓
   
  for(var i=0;i <width/50;i++) { //
    ellipse(25+(i*50),25,mouseX/7) //形成一個圓
    rect(25+(i*50),25,50) //形成一個方形
    ellipse(50+(i*50),50,20) //形成一個圓
    for(var j=0;j <height/50;j++) { //
      ellipse(25+(i*50),25+(j*50),mouseX/7) 
      rect(25+(i*50),25+(j*50),50) 
      ellipse(50+(i*50),50+(j*50),20) 
      ellipse(25+(i*50),25+(j*50),30)
      rect(25+(i*50),25+(j*50),25)
      rect(50+(i*50),25+(j*50),mouseY/7)
      rect(25+(i*50),50+(j*50),50)
      ellipse(50+(i*50),50+(j*50),40)
    }
  }
  }


