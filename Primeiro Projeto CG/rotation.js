"use strict";

var canvas = document.getElementById("tela");

var ctx = canvas.getContext("2d");

var x = 200, y = 100, larg = 10, alt = 10
var ang = 0

var x2 = 100, y2 = 50, larg2 = 40, alt2 = 30
var ang2 = Math.PI/2

var teclas = []
for (var i = 0; i<256; i++){
    teclas[i] = false
}

function desenhar(){
    processaTeclas()
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "rgb(0, 0, 200)"
    ctx.strokeStyle = "rgb(255, 128, 0)"
    ctx.lineWidth = 2
    ctx.save()
        ctx.translate(x, y)
        ctx.rotate(ang)
        ctx.beginPath();
            ctx.moveTo(0, 0)
            ctx.lineTo(50, 0)
        ctx.stroke()
        ctx.fillRect(-larg/2, -alt/2, larg, alt)
    ctx.restore()

    ctx.fillStyle = "rgb(200, 255, 0)"
    ctx.save()
   
        ctx.translate(x2, y2)
        ctx.rotate(ang2)
        ctx.fillRect(-larg2/2, -alt2/2, larg2, alt2)
    ctx.restore()
    requestAnimationFrame(desenhar)
    }
    requestAnimationFrame(desenhar)

    document.onkeydown = function (evt) {
        teclas[evt.keyCode] = true
    }

    document.onkeyup = function (evt) {
        teclas[evt.keyCode] = false
    }

    function processaTeclas() {
        if (teclas[39]){ //seta esquerda
            x += 5
        }
        if (teclas[37]){ //seta direita
            x -= 5
        }
        if (teclas[38]){ //seta cima
            y -= 5
        }
        if (teclas[40]){ //seta baixo
            y += 5
        }
        if (teclas[90]){ //Z
            ang += Math.PI/45
        }
        if (teclas[88]){ //X
            ang -= Math.PI/45
        }
    }
        /*
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
        if (i == 65){
            ang -= Math.PI/45
        }
        if (i == 68){
            ang += Math.PI/45
        }
        if (i == 90){
            ang2 -= Math.PI/45
        }
        if (i == 67){
            ang2 += Math.PI/45
        }
    }*/