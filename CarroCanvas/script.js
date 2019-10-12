"use strict";

var canvas = document.getElementById("tela");
document.getElementById("tela").setAttribute("width", window.innerWidth);
document.getElementById("tela").setAttribute("height", window.innerHeight);
var ctx = canvas.getContext("2d");

var x = 320,
    y = 240,
    larg = 200,
    alt = 100,
    mod = 0,
	escala = 0.5,
    vel = 5;
var ang = 5;

var teclas = [];
for(var i = 0; i<256; i++){
    teclas[i] = false;
}

function desenhar() {
    processaTeclas();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    x+=(vel * mod) * Math.cos(Math.PI/180 * ang);
    y+=(vel * mod) * Math.sin(Math.PI/180 * ang);

    //pneu frente
    ctx.save();
    ctx.fillStyle = "rgb(10, 10, 10)";
    ctx.translate(x, y);
    ctx.rotate(Math.PI/180 * ang);
	ctx.scale(escala, escala);
    ctx.fillRect(40, -55, 40, 10);

    ctx.restore();
    ctx.save();

    //pneu frente
    ctx.save();
    ctx.fillStyle = "rgb(10, 10, 10)";
    ctx.translate(x, y);
    ctx.rotate(Math.PI/180 * ang);
	ctx.scale(escala, escala);
    ctx.fillRect(40, 45, 40, 10);

    ctx.restore();
    ctx.save();

    //pneu tras
    ctx.fillStyle = "rgb(10, 10, 10)";
    ctx.translate(x, y);
    ctx.rotate(Math.PI/180 * ang);
	ctx.scale(escala, escala);
    ctx.fillRect(-75, -55, 40, 10);

    ctx.restore();
    ctx.save();

    //pneu tras
    ctx.fillStyle = "rgb(10, 10, 10)";
    ctx.translate(x, y);
    ctx.rotate(Math.PI/180 * ang);
	ctx.scale(escala, escala);
    ctx.fillRect(-75, 45, 40, 10);

    ctx.restore();
    ctx.save();

    //chassi
    ctx.fillStyle = "rgb(0, 0, 150)";
    ctx.translate(x, y);
    ctx.rotate(Math.PI/180 * ang);
	ctx.scale(escala, escala);
    ctx.fillRect(-larg / 2, -alt / 2, larg, alt);

    ctx.restore();
    ctx.save();

    //parabrisa
    ctx.fillStyle = "rgb(180,180,180)";
    ctx.translate(x, y);
    ctx.rotate(Math.PI/180 * ang);
	ctx.scale(escala, escala);
    ctx.fillRect(25, -37.5, 40, 75);

    ctx.restore();
    ctx.save();

	//Teto
    ctx.fillStyle = "rgb(0, 0, 200)";
    ctx.translate(x, y);
    ctx.rotate(Math.PI/180 * ang);
	ctx.scale(escala, escala);
    ctx.fillRect(-61, -37.5, 85, 75);

    ctx.restore();
    ctx.save();

    //farol esquerda
    ctx.fillStyle = "rgb(200, 200, 255)"
    ctx.translate(x, y);
    ctx.rotate(Math.PI/180 * ang);
	ctx.scale(escala, escala);
    ctx.fillRect(93, -45, 7, 23);
    

    ctx.restore();
    ctx.save();

    //farol direita
    ctx.fillStyle = "rgb(200, 200, 255)"
    ctx.translate(x, y);
    ctx.rotate(Math.PI/180 * ang);
	ctx.scale(escala, escala);
    ctx.fillRect(93, 20, 7, 23);

    ctx.restore();
    ctx.save();

    //farol traseiro esquerda
    //Luz de Freio (fail)
        //if(teclas[40]){
        //    ctx.fillStyle = "red";
        //}else{
        //    ctx.fillStyle = "rgb(255, 0, 0)";
        //}
    ctx.fillStyle = "rgb(200, 0, 0)"
    ctx.translate(x, y);
    ctx.rotate(Math.PI/180 * ang);
	ctx.scale(escala, escala);
    ctx.fillRect(-100, -45, 5, 25);

    ctx.restore();
    ctx.save();

    //farol traseiro direita
    //Luz de Freio (fail)
        //if(teclas[40]){
        //    ctx.fillStyle = "red";
        //}else{
        //    ctx.fillStyle = "rgb(255, 0, 0)";
        //}
    ctx.fillStyle = "rgb(200, 0, 0)"
    ctx.translate(x, y);
    ctx.rotate(Math.PI/180 * ang);
	ctx.scale(escala, escala);
    ctx.fillRect(-100, 20, 5, 25);

    ctx.restore();
    ctx.save();

    //Luz de Ré Direita
    if(teclas[40]){
        ctx.fillStyle = "rgb(255, 255, 255)"
        ctx.translate(x, y);
        ctx.rotate(Math.PI/180 * ang);
	    ctx.scale(escala, escala);
        ctx.fillRect(-100, 25, 4, 5);
    }

    ctx.restore();
    ctx.save();

    //Luz de Ré Esquerda
    if(teclas[40]){
        ctx.fillStyle = "rgb(255, 255, 255)"
        ctx.translate(x, y);
        ctx.rotate(Math.PI/180 * ang);
        ctx.scale(escala, escala);
        ctx.fillRect(-100, -30, 4, 5);
    }

    ctx.restore();
    ctx.save();

    requestAnimationFrame(desenhar);

}
requestAnimationFrame(desenhar);

document.onkeydown = function (evt) {
    teclas[evt.keyCode] = true;
}
document.onkeyup = function (evt) {
    teclas[evt.keyCode] = false;
    if (evt.keyCode == 38 || evt.keyCode == 40) {
        mod = 0;
      }
}

function processaTeclas() {
    //baixo
    if (teclas[40]) {
        mod = -1;
    }
    //cimass
    if (teclas[38]) {
        mod = 3;
    }
    if (mod) {
        //direita
        if (teclas[39]) {
            ang += 5;
        }
        //esquerda
        if (teclas[37]) {
            ang -= 5;
        }
    }
	
	if(teclas[90] && escala > 0.01){
		escala -=0.01
	}
	if(teclas[88] && escala < 5){
			escala +=0.01
	}
}
