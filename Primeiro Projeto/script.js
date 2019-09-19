"use strict";

var canvas = document.getElementById("tela");

var ctx = canvas.getContext("2d");

var x = 200,
    y = 100,
    larg = 300,
    alt = 150;
var ai = 0,
    af = 2;
var raio = 25,
    vel = 3;

/*function desenhar() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    ctx.fillStyle = "rgb(255, 128, 0)";
    ctx.fillRect (x, y, larg, alt);
    requestAnimationFrame(desenhar);

    //Indica ao navegador o que executar quando estiver pronto para realizar uma nova renderização
    
}*/


function desenhar() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    ctx.fillStyle = "rgb(255, 128, 0)";
    x += vel;
    if (x + raio >= canvas.width) {
        vel *= -1;
    }
    if (x - raio <= 0) {
        vel *= -1
    }
    ctx.beginPath();
    ctx.arc(x, y, raio, ai * Math.PI, af * Math.PI)
    //ctx.moveTo(x, y);
    //ctx.lineTo(x+25, y+25);
    //ctx.lineTo(x+25,y-25);
    ctx.fill();
    ctx.closePath();


    requestAnimationFrame(desenhar);
}
requestAnimationFrame(desenhar)





document.onkeydown = function (evt) {
    var i = event.keyCode;
    if (i == 39) {
        x += 5;
    }
    if (i == 37) {
        x -= 5;
    }
    if (i == 40) {
        y += 5;
    }
    if (i == 38) {
        y -= 5;
    }
}