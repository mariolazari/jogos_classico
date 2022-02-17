function setup() {
    createCanvas(500, 400);
    somdaTrilha.loop();
}

function draw() {
    background(imagemdaestrada);
    mostraator();
    mostraCarro();
    movimentaCarro();
    movimentaator();
    voltaPosicaoInicialDoCarro();
    verificaColisao();
    incluiPontos();
    marcaPontos();
}