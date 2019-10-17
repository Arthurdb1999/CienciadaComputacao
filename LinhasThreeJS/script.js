"use strict";
var cena = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);
var render = new THREE.WebGLRenderer({ antialias: true });
render.setSize(window.innerWidth, window.innerHeight);
var canvas = render.domElement;
document.body.appendChild(canvas);

var materialLinha = new THREE.LineBasicMaterial({ color: 0xffffff });
var geometriaLinha = new THREE.Geometry();



var raio = 1;
/*for (var ang = 0; ang <= Math.PI * 2; ang += Math.PI / 5){
    var x = raio * Math.cos(ang);
    var y = raio * Math.sin(ang);
    geometriaLinha.vertices.push(new THREE.Vector3(x, y, 0));
}*/

/* Meio Círculo
for (var y = -1; y <= 1; y += 0.001){
    var x = Math.sqrt(raio * raio - y * y);
    geometriaLinha.vertices.push(new THREE.Vector3(x, y, 0));
}*/

/*var x = raio * Math.cos(ang);
var y = raio * Math.sin(ang);
geometriaLinha.vertices.push(new THREE.Vector3(x, y, 0));*/

//Curva de Hermite
//SÍMBOLO DA NIKE
/*
var p1 = new THREE.Vector3(-0.5, 0, 0);
var t1 = new THREE.Vector3(-3, -3, 0);
var p2 = new THREE.Vector3(0.5, 0, 0);
var t2 = new THREE.Vector3(-3, -1, 0);
var p3 = new THREE.Vector3(0.5, 0, 0);
var t3 = new THREE.Vector3(-2, -0.5, 0);
var p4 = new THREE.Vector3(-0.5, 0, 0);
var t4 = new THREE.Vector3(0.5, 1, 0);

for (var s = 0; s <= 1; s += 0.001){
    var s2 = s * s;
    var s3 = s2 * s;
    var h1 = 2 * s3 - 3 * s2 + 1;
    var h2 = -2 * s3 + 3 * s2;
    var h3 = s3 - 2 * s2 + s;
    var h4 = s3 - s2;
    var pt = new THREE.Vector3(0, 0, 0);
    pt.add(p3.clone().multiplyScalar(h1));
    pt.add(p4.clone().multiplyScalar(h2));
    pt.add(t3.clone().multiplyScalar(h3));
    pt.add(t4.clone().multiplyScalar(h4));
    geometriaLinha.vertices.push(pt);
}

for (var s = 0; s <= 1; s += 0.001){
    var s2 = s * s;
    var s3 = s2 * s;
    var h1 = 2 * s3 - 3 * s2 + 1;
    var h2 = -2 * s3 + 3 * s2;
    var h3 = s3 - 2 * s2 + s;
    var h4 = s3 - s2;
    var pt = new THREE.Vector3(0, 0, 0);
    pt.add(p1.clone().multiplyScalar(h1));
    pt.add(p2.clone().multiplyScalar(h2));
    pt.add(t1.clone().multiplyScalar(h3));
    pt.add(t2.clone().multiplyScalar(h4));
    geometriaLinha.vertices.push(pt);
}
*/
//Curvas de Bézier
/*
var curva = new THREE.CubicBezierCurve3(
    new THREE.Vector3(-1, 0, 0),
    new THREE.Vector3(-0.5, 1, 0),
    new THREE.Vector3(0.5, -1, 0),
    new THREE.Vector3(1, 0, 0),
);
geometriaLinha.vertices = curva.getPoints(50);
*/
//Curvas Splines
var curva = new THREE.SplineCurve([
    new THREE.Vector3(-1, 0, 0),
    new THREE.Vector3(-0.5, 0.5, 0),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0.5, -0.5, 0),
    new THREE.Vector3(1, 0, 0),
    new THREE.Vector3(1.5, 0.5, 0),
    new THREE.Vector3(2, 0, 0)
]);
var caminho = new THREE.Path(curva.getPoints(50));
var geometriaLinha = caminho.createPointsGeometry(50);

var materialPonto = new THREE.PointsMaterial({ size: 10, sizeAttenuation: false });
for (let p of curva.points) {
    var geometriaPonto = new THREE.Geometry();
    geometriaPonto.vertices.push(new THREE.Vector3(p.x, p.y, p.z));
    var ponto = new THREE.Points(geometriaPonto, materialPonto);
    cena.add(ponto);
}


var linha = new THREE.Line(geometriaLinha, materialLinha);
cena.add(linha);
camera.position.z = 5;

function desenhar() {
    render.render(cena, camera);
    requestAnimationFrame(desenhar);
}
requestAnimationFrame(desenhar);