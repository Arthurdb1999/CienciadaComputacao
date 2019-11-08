"use strict";

var cena = new THREE.Scene;
var camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 0.1, 1000);
var render = new THREE.WebGLRenderer();

render.setSize(window.innerWidth, window.innerHeight);
var canvas = render.domElement;
document.body.appendChild(canvas);

var geometry = new THREE.BoxGeometry(0.07, 0.1, 0.07);
var material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
//var materiall = new THREE.MeshLambertMaterial( {color: 0xff1200} );

var materialLinha = new THREE.LineBasicMaterial({color: 0xFFFFFF});
var geometriaLinha = new THREE.Geometry();

var planoGeometria = new THREE.PlaneGeometry(3.5, 2.3);
var planoMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide });
var plano = new THREE.Mesh(planoGeometria, planoMaterial);

var curva = new THREE.SplineCurve([
    new THREE.Vector3(-1.4, 1, 2),
    new THREE.Vector3(0, 1, 3),
    new THREE.Vector3(0 , 0.8, 0),
    new THREE.Vector3(-0.8, 0.85, 0),
    new THREE.Vector3(-1, 0.8, 0),
    new THREE.Vector3(-1.3, 0.83, 0),
    new THREE.Vector3(-1.3, 0.7, 0),
    new THREE.Vector3(-0.7, 0.7, 0),
    new THREE.Vector3(-0.6, 0.3, 0),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0.4, 0, 0),
    new THREE.Vector3(0.4, -0.3, 0),
    new THREE.Vector3(-1.35, 0.6, 0),
    new THREE.Vector3(-1.7, 0.9, 0),
    new THREE.Vector3(-1.4, 1, 0)
]
);

var caminho = new THREE.Path(curva.getPoints(1000));
var geometriaLinha = caminho.createPointsGeometry(1000);
//var materialPonto = new THREE.PointsMaterial({size:5, sizeAttenuation:false});
/*
for(let p of curva.points){
    var geometriaPonto = new THREE.Geometry();
    geometriaPonto.vertices.push(new THREE.Vector3(p.x, p.y, p.z));
    var ponto = new THREE.Points(geometriaPonto, materialPonto);
    cena.add(ponto);
}
*/
var linha = new THREE.Line(geometriaLinha, materialLinha);

cena.add(linha, plano);
plano.position.z=-0.1;
camera.position.z=5;

var controles = new THREE.OrbitControls(camera, render.domElement);

var cube = new THREE.Mesh(geometry, material);
cena.add(cube);
//var cube2 = new THREE.Mesh(geometry, materiall);
//cena.add(cube2);

var p = 0;
var x_real = 0;
var y_real =0;

//var controls = new THREE.OrbitControls(camera, render);

function desenhar(){

    var pa = linha.geometry.vertices[p];
    var pa1 = linha.geometry.vertices[p + 1];
    cube.position.x = pa.x;
    cube.position.y = pa.y;
    p = p + 2;
    if (p == 1000) {
        p = 0;
    }
    y_real = pa1.y - pa.y;
    x_real = pa1.x - pa.x;
    var ang = Math.atan2(x_real, y_real);
    cube.rotation.z = -ang;
    render.render(cena, camera);
    requestAnimationFrame(desenhar);
    
    
}
requestAnimationFrame(desenhar);

var luzAmbiente = new THREE.AmbientLight(0x101010   );
cena.add(luzAmbiente);

var luzPonto = new THREE.PointLight(0x999999);
luzPonto.position.set(-1,-1,1);
cena.add(luzPonto);