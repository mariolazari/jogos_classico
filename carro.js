//codigo do carro

let xcarros = [600, 600, 600, 600, 600, 600];
let  ycarros =[40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
    for(let i = 0; i < imagemCarros.length; i++) {
        image(imagemCarros[i], xcarros[i], ycarros[i], comprimentoCarro, alturaCarro);
    }
}

function movimentaCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        xcarros[i] -= velocidadeCarros[i];
    }
}

function voltaPosicaoInicialDoCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
            if(passouTodaATela(xcarros[i])){
                xcarros[i] = 600;
        }

    }
}

function passouTodaATela(xcarros){
    return xcarros < -50;
}