let npcs = [];

class NPC {
  constructor(scene, x, y, z, color=0xff0000){
    const mat = new THREE.MeshLambertMaterial({color});
    this.mesh = createCube(scene, x, y, z, mat);
    this.dirX = 1; this.dirZ = 0;
  }
  update(){
    this.mesh.position.x += this.dirX*0.05;
    this.mesh.position.z += this.dirZ*0.05;
    if(Math.random()<0.01){ this.dirX=Math.random()*2-1; this.dirZ=Math.random()*2-1; }
  }
}

function spawnNPC(scene, x, y, z){
  const npc = new NPC(scene, x, y, z);
  npcs.push(npc);
}
