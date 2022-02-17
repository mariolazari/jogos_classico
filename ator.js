//ator
let yator = 366;
let xator = 70;
let colisao = false;
let meusPontos = 0;

function mostraator(){
    image(imagemator, xator, yator, 30, 30);
}

function movimentaator(){
    if(keyIsDown(UP_ARROW)){
        yator -= 3;
    }
    if(keyIsDown(DOWN_ARROW)){
        if(podeSeMover()) {
            yator += 3;
        }
    }
}

function verificaColisao(){
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter);
    for(let i = 0; i < imagemCarros.length; i++){
        colisao = collideRectCircle(xcarros[i], ycarros[i], comprimentoCarro, alturaCarro, xator, yator, 15)
        if(colisao) {
            voltaAtorParaPosicaoInicial();
            somdaColisao.play();
            if (pontosMaiorQueZero())
                meusPontos -= 1
        }
    }
}

function voltaAtorParaPosicaoInicial(){
    yator  = 366;
}

function incluiPontos() {
    textAlign(CENTER);
    textSize(25);
    fill(color(255,240,60))
    text(meusPontos, width / 5, 27);
}

function marcaPontos(){
    if(yator < 15){
        meusPontos += 1;
        somdoPonto.play();
        voltaAtorParaPosicaoInicial();
    }
}

function pontosMaiorQueZero(){
    return meusPontos > 0;
}

function podeSeMover(){
    return yator < 366;
}