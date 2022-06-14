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
let direction = "right";
let food = {
    //cria as coordenadas de maneira aleatória
    //floor - retira o ponto flutuante
    //random - cria um número entre 0 e 1
    //15 impede de criar fora do canvas
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

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

function drawFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

//acrescenta evento para ler o teclado
document.addEventListener('keydown', update);

function update (event) {
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo() {

    //condiciona para que ela não saia da tela
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    //retira rabo
    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    //coloca cabeça
    snake.unshift(newHead);

}

//a cada 100 milisegundos ela chama a iniciarJogo
let jogo = setInterval(iniciarJogo, 100);