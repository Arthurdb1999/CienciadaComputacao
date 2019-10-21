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

function gerarCilindro(r = 1, alt = 1, pRaio = 4, pAlt = 1){
    var geo = new THREE.Geometry();
    var nc = 0, nl = 0
    for(var y = -alt / 2; y <= alt/2; y += alt/pAlt){
        nl++; nc = 0;
        for(var a = 0; a <= Math.PI * 2; a += (Math.PI * 2) / pRaio) {
            nc++;
            var x = Math.sin(a) * r;
            var z = Math.cos(a) * r;
            var v = new THREE.Vector3(x, y, z);
            geo.vertices.push(v);
        }
    }
    for (var L = 0; L < nl - 1; L++) {
        for (var c = 0; c < nc - 1; c += 1) {
            geo.faces.push(new THREE.Face3( L*nc+c,
                                            L*nc+c+1,
                                            (L+1)*nc+c));
            geo.faces.push(new THREE.Face3( (L+1)*nc+c+1,
                                            (L+1)*nc+c,
                                             L*nc+c+1));
        }
    }
    geo.computeFaceNormals();
    return geo
}

    function gerarSuperficiePlana(lar = 1, alt = 1, p = 1) {
        var geo = new THREE.Geometry()
        var nc = 0, nl = 0;
        for (var y = -alt / 2; y <= alt / 2; y += alt / p) {
            nl++;
            nc = 0;
            for (var x = -lar / 2; x <= lar / 2; x += lar / p){
                nc++;
                var v = new THREE.Vector3(x, y, 0);
                geo.vertices.push(v);
            }
        }
        for (var L = 0; L < nl - 1; L++){
            for (var c = 0; c < nc - 1; c += 1) {
                geo.faces.push(new THREE.Face3(
                    L*nc + c, L*nc + c + 1, (L+1) * nc + c
                ));
                geo.faces.push(new THREE.Face3(
                    (L+1)*nc + c + 1, (L+1)*nc + c, L*nc + c + 1
                ));
            }
        }
        geo.computeFaceNormals();
        return geo;
    }

    var icosaedro = new THREE.IcosahedronGeometry();
    var material = new THREE.MeshBasicMaterial({color: 0xffffff});
    var icosaedrofinal = new THREE.Mesh(icosaedro, material);
    icosaedrofinal.material.wireframe=true
    //cena.add(icosaedrofinal);

    var bola = new THREE.SphereGeometry(0.3, 16, 16);
    var material = new THREE.MeshBasicMaterial({color: 0xff9942})
    var sphere = new THREE.Mesh(bola, material);
    sphere.material.wireframe=true;
    //cena.add(sphere);

    var geometry = new THREE.TorusKnotBufferGeometry(0.5, 0.5, 0.5, 0.5);
    var material = new THREE.MeshBasicMaterial( { color: 0x009900 } );
    var torusKnot = new THREE.Mesh( geometry, material );
    torusKnot.position.x = -2
    torusKnot.material.wireframe=true
    //cena.add( torusKnot );

    //Torus Knot não é uma superficie de revolução, é uma superfície de deslocamento

var forma = new THREE.Mesh(
    //gerarQuadro(2, 2),
    //gerarCilindro(1, 2, 35, 4),
    //new THREE.IcosahedronGeometry(),
    gerarSuperficiePlana(2, 3, 5),
    new THREE.MeshPhongMaterial({ color: 0xffffff })
);

// var forma = new LineSegments(
//     gerarCilindroLinhas(1, 2, 360),
//     gerarQuadro(2, 2),
//     new THREE.MeshPhongMaterial({ color: 0xffffff })
// );

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