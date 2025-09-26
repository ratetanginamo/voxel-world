let particles = [];

class Particle {
  constructor(scene, x, y, z, type='rain'){
    this.type = type;
    this.geo = new THREE.BoxGeometry(0.1,0.5,0.1);
    this.mat = new THREE.MeshBasicMaterial({color: type==='rain'?0x0cf:0xffffff});
    this.mesh = new THREE.Mesh(this.geo,this.mat);
    this.mesh.position.set(x,y,z);
    scene.add(this.mesh);
  }
  update(){
    this.mesh.position.y -= this.type==='rain'?0.3:0.05;
    if(this.mesh.position.y < 0) this.mesh.position.y = 20 + Math.random()*10;
  }
}

function spawnParticles(scene, count=50, type='rain'){
  for(let i=0;i<count;i++){
    particles.push(new Particle(scene, Math.random()*50, Math.random()*20+5, Math.random()*50, type));
  }
}
