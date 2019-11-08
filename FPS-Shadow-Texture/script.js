"use strict";

var velocidade = 0.02, virarCamera = Math.PI*0.02;

var cena = new THREE.Scene;

var camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 0.1, 1000);



var teclas = [];
for(var i = 0; i<256; i++){
    teclas[i] = false;
}

var textureLoader = new THREE.TextureLoader();
var texturaPlano = new textureLoader.load("textura/floor_laminate_dirty_pine.png");

//Plano
var planoGeometry = new THREE.PlaneGeometry(2, 2, 100, 100);
var planoMaterial = new THREE.MeshPhongMaterial({color:0x4F6156, map:texturaPlano});
var plano = new THREE.Mesh(planoGeometry, planoMaterial);
plano.rotation.x-=Math.PI/2;
plano.receiveShadow = true;
cena.add(plano);

//Cubo
var cuboGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
var cuboMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
var cubo = new THREE.Mesh(cuboGeometry, cuboMaterial);
cubo.receiveShadow = true;
cubo.castShadow = true;
cubo.position.y = 0.1;
cena.add(cubo);

//Cubo2
var cuboGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
var cuboMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
var cubo2 = new THREE.Mesh(cuboGeometry, cuboMaterial);
cubo2.receiveShadow = true;
cubo2.castShadow = true;
cubo2.position.y = 0.1;
cubo2.position.x = 0.5;
cubo2.position.z = 0.5;
cena.add(cubo2);

//Cubo3
var cuboGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
var cuboMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
var cubo3 = new THREE.Mesh(cuboGeometry, cuboMaterial);
cubo3.receiveShadow = true;
cubo3.castShadow = true;
cubo3.position.y = 0.1;
cubo3.position.x = -0.5;
cubo3.position.z = 0.5;
cena.add(cubo3);

//Cubo4
var cuboGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
var cuboMaterial = new THREE.MeshPhongMaterial({ color: 0x0000ff });
var cubo4 = new THREE.Mesh(cuboGeometry, cuboMaterial);
cubo4.receiveShadow = true;
cubo4.castShadow = true;
cubo4.position.y = 0.1;
cubo4.position.x = 0.5;
cubo4.position.z = -0.5;
cena.add(cubo4);

//Cubo5
var cuboGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
var cuboMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
var cubo5 = new THREE.Mesh(cuboGeometry, cuboMaterial);
cubo5.receiveShadow = true;
cubo5.castShadow = true;
cubo5.position.y = 0.1;
cubo5.position.x = -0.5;
cubo5.position.z = -0.5;
cena.add(cubo5);

//Luzes
var luzAmbiente = new THREE.AmbientLight(0x101010);
cena.add(luzAmbiente);

var luzPonto = new THREE.PointLight(0xffffff, 1, 1000);
luzPonto.position.set(1,2,1);
luzPonto.castShadow = true;
luzPonto.shadow.camera.near = 0.1;
luzPonto.shadow.camera.far = 25;
luzPonto.shadow.mapSize.width = 2048;
luzPonto.shadow.mapSize.height = 2048;
cena.add(luzPonto);

camera.position.set(0, 0.15, 0.5);

var render = new THREE.WebGLRenderer();
render.setSize(window.innerWidth, window.innerHeight);
var canvas = render.domElement;
document.body.appendChild(canvas);

render.shadowMap.enabled = true;
render.shadowMap.type = THREE.BasicShadowMap;

var controles = new THREE.OrbitControls(camera, render.domElement);

function desenhar(){
	requestAnimationFrame(desenhar);
	cubo.rotation.x += 0.01;
	cubo.rotation.y += -0.01;
	cubo.rotation.z += 0.01;

	cubo2.rotation.x += 0.01;
	cubo2.rotation.y += 0.02;
	cubo2.rotation.z += 0.01;

	cubo3.rotation.x += -0.01;
	cubo3.rotation.y += -0.02;
	cubo3.rotation.z += -0.01;

	cubo4.rotation.x += -0.01;
	cubo4.rotation.y += 0.02;
	cubo4.rotation.z += -0.01;

	cubo5.rotation.x += 0.01;
	cubo5.rotation.y += -0.02;
	cubo5.rotation.z += 0.01;

	//W
    if(teclas[87]){
        camera.position.x -= Math.sin(camera.rotation.y) * velocidade;
		camera.position.z += -Math.cos(camera.rotation.y) * velocidade;
    }

	//S
    if(teclas[83]){
        camera.position.x += Math.sin(camera.rotation.y) * velocidade;
        camera.position.z -= -Math.cos(camera.rotation.y) * velocidade;  
    }
    
	//A
    if(teclas[65]){
        camera.rotation.y += virarCamera;
    }
    //Di
    if(teclas[68]){
        camera.rotation.y -= virarCamera;
    }


    render.render(cena, camera);
	//processaTeclas();
}

requestAnimationFrame(desenhar);

document.onkeydown = function (evt) {
    teclas[evt.keyCode] = true;
}

document.onkeyup = function (evt) {
    teclas[evt.keyCode] = false;
}

function processaTeclas(){

}