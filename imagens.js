//imagems e sons do jogo
let imagemdaestrada;
let imagemdoator;
let imagemcarro;
let imagemcarro2;
let imagemcarro3;

//sons do jogo
let somdaTrilha;
let somdaColisao;
let somdoPonto;

function preload(){
    imagemdaestrada = loadImage("imagens/estrada.png");
    imagemator = loadImage("imagens/ator-1.png");
    imagemcarro = loadImage("imagens/carro-1.png");
    imagemcarro2 = loadImage("imagens/carro-2.png");
    imagemcarro3 = loadImage("imagens/carro-3.png");
    imagemCarros = [imagemcarro, imagemcarro2, imagemcarro3, imagemcarro, imagemcarro2, imagemcarro3];

    somdaTrilha =  loadSound("sons/trilha.mp3");
    somdaColisao = loadSound("sons/colidiu.mp3");
    somdoPonto = loadSound("sons/pontos.wav")
}
