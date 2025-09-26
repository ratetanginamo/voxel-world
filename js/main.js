// Scene, Camera, Renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);
const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.set(30,50,50);

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(25,0,25);

// Lights
const sun = new THREE.DirectionalLight(0xffffff,1);
sun.position.set(50,100,50); sun.castShadow = true;
scene.add(sun);
scene.add(new THREE.AmbientLight(0x404040));

// Terrain
let currentBiome = 'grass';
generateTerrain(scene, currentBiome);

// NPCs
spawnNPC(scene,10,1,10);
spawnNPC(scene,30,1,40);

// Weather
let weatherOn = false;
spawnParticles(scene, 50, 'rain');

// UI interactions
document.getElementById('toggleWeather').addEventListener('click', ()=>{
  weatherOn = !weatherOn;
  document.getElementById('toggleWeather').textContent = weatherOn ? "Weather On" : "Weather Off";
});
document.getElementById('biomeSelect').addEventListener('change',(e)=>{
  currentBiome = e.target.value;
  generateTerrain(scene,currentBiome);
});

// Animate loop
let sunAngle = 0;
function animate(){
  requestAnimationFrame(animate);
  sunAngle += 0.002;
  sun.position.set(Math.sin(sunAngle)*100,100,Math.cos(sunAngle)*100);
  document.getElementById('info').textContent = Math.sin(sunAngle)>0?'Day':'Night';

  // Update NPCs
  npcs.forEach(n=>n.update());

  // Update weather particles
  if(weatherOn) particles.forEach(p=>p.update());

  renderer.render(scene,camera);
}
animate();

window.addEventListener('resize',()=>{camera.aspect=window.innerWidth/window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth,window.innerHeight);});
