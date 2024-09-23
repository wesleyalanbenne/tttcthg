let cor;//cores
let circuloX; // horizontal
let circuloY; // vertical

function setup() {//configuracao
  createCanvas(1000,1000);//tamanho da tela
  background(color(100, 0 , 0));//cor do cenario
  cor = color(random(0, 255), random(0, 255), random(0, 255));//cor aleatoria
  
  circuloX = [0, 0, 0];
  circuloY = [random(height), random(height), random(height)];//altura aleatoria
}

function draw() {//desenhar
  
  fill(cor);//preencher dentro
  
  for(let contador in circuloX) {
    circle(circuloX[contador], circuloY[contador], 50);//posicao do item    
    circuloX[contador]+= random(0,3);//posicao di item
    circuloY[contador]+= random(-3,3);//poicao do item
    
    if(circuloX[contador] >= width){//verifica quantas bolinhas tem na tela 
      circuloX[contador] = 0;//quando as bolinhas saem da tela e zerado
      circuloY[contador] = random(height);//volta as bolinhas na tela
    }
  }
  
  if(mouseIsPressed){//presionar mause
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));//cor aleatoria
  }
}
