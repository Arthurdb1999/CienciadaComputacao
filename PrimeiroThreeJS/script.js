var cena = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var render = new THREE.WebGLRenderer();
render.setSize(window.innerWidth, window.innerHeight);

var canvas = render.domElement;
document.body.appendChild(canvas);

var geometriaCubo = new THREE.BoxGeometry(1, 1, 1);
var materialCubo = new THREE.MeshLambertMaterial({ color: 0x59fd8b });
var cubo = new THREE.Mesh(geometriaCubo, materialCubo);
cena.add(cubo);


var luzAmbiente = new THREE.AmbientLight(0x333333);
cena.add(luzAmbiente);

var luzPonto = new THREE.PointLight(0x888888);
luzPonto.position.set(2, 2, 4);
cena.add(luzPonto);

camera.position.z = 5;

function desenhar(){
    render.render(cena, camera);
    requestAnimationFrame(desenhar);
    cubo.rotation.x=0.2;
}
requestAnimationFrame(desenhar);

var xi;
var yi;
canvas.addEventListener("mousedown", function(e) {
    xi = e.offsetX;
    yi = e.offsetY;
}, false);

canvas.addEventListener("mousemove", function(e) {
    if (e.buttons > 0){
        camera.position.x = 8 * (xi - e.offsetX) / canvas.width;
        camera.position.y = 8 * (e.offsetY - yi) / canvas.height;
    }
}, false);