let canvas = document.getElementById("snake");
//renderiza o desenho de dentro do canvas. 2d = o plano fica 2d
let context = canvas.getContext("2d");
//tamanho de cada quadrado
let box = 32;
//a cobra é um array de coordenadas
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
//a cobra começa andando para a direita
let direction = "rigth";

//inicia o canvas
function criarBG() {
    //define cor
    context.fillStyle = "lightgreen";
    //desenha o retangulo onde ocorre o jogo. 
    //trabalha com x e y. 
    //altura e largura de 16 quadrados
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo() {
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "rigth") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
    
}

//a cada 100 milisegundos ela chama a iniciarJogo
let jogo = setInterval(iniciarJogo, 100);