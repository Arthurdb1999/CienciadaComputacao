"use strict";

var canvas = document.getElementById("tela");

var ctx = canvas.getContext("2d");

var x =200, y = 100, larg = 300, alt = 150;
var ai = 0, af = 2;
var raio = 25, vel = 3;

function desenhar(){
    var lado = 10
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height)
    ctx.save();
        ctx.translate(50, 50)
        ctx.fillStyle = "rgb(255, 128, 0)"
        ctx.fillRect(-lado/2, -lado/2, lado, lado)
        ctx.translate(100, 0)
        ctx.fillStyle = "rgb(255, 0, 0)"
        ctx.fillRect(-lado/2, -lado/2, lado, lado)
    ctx.restore()
    ctx.save()
        ctx.translate(10, 10)
        ctx.fillStyle = "rgb(0, 0, 200)"
        ctx.fillRect(-lado/2, -lado/2, lado, lado)
    ctx.restore()
    requestAnimationFrame(desenhar)
}
requestAnimationFrame(desenhar);