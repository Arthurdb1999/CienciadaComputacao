"use strict";
var cena = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);
var render = new THREE.WebGLRenderer({ antialias: true });
render.setSize(window.innerWidth, window.innerHeight);
var canvas = render.domElement;
document.body.appendChild(canvas);



function gerarCilindroLinhas (raio = 1, altura = 2, pRaio = 8) {
    var geometria = new THREE.Geometry();
    for(var a = 0; a <= Math.PI * 2; a += (Math.PI * 2) / pRaio) {
        var x = Math.sin(a) * raio;
        var z = Math.cos(a) * raio;
        var v = new THREE.Vector3(x, -altura/2, z);
        geometria.vertices.push(v);
        v = new THREE.Vector3(x, altura/2, z);
        geometria.vertices.push(v);
    }
    return geometria;
}

function gerarQuadro(larg = 1, alt = 1){
    var geo = new THREE.Geometry();
    geo.vertices.push(new THREE.Vector3(-larg/2, alt/2));
    geo.vertices.push(new THREE.Vector3(larg/2, alt/2));
    geo.vertices.push(new THREE.Vector3(-larg/2, -alt/2));
    geo.vertices.push(new THREE.Vector3(larg/2, -alt/2));
    geo.faces.push(new THREE.Face3(0, 2, 1));
    geo.faces.push(new THREE.Face3(1, 2, 3));
    geo.computeFaceNormals();
    return geo;
}

var forma = new THREE.Mesh(
    gerarQuadro(2, 2),
    new THREE.MeshPhongMaterial({ color: 0xffffff })
);

/*var forma = new LineSegments(
    gerarCilindroLinhas(1, 2, 360),
    gerarQuadro(2, 2),
    new THREE.MeshPhongMaterial({ color: 0xffffff })
);*/

//forma.material.wireframe = true;
forma.material.side = THREE.DoubleSide;

cena.add(forma);

var luzAmbiente = new THREE.AmbientLight(0x333333);
cena.add(luzAmbiente)
camera.position.z = 5;

var controles = new THREE.OrbitControls(camera, render.domElement);

function desenhar() {
    render.render(cena, camera);
    requestAnimationFrame(desenhar);
}
requestAnimationFrame(desenhar);