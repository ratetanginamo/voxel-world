const materials = {
  grass: new THREE.MeshLambertMaterial({color:0x228B22}),
  sand: new THREE.MeshLambertMaterial({color:0xFFF5BA}),
  snow: new THREE.MeshLambertMaterial({color:0xFFFFFF}),
  water: new THREE.MeshLambertMaterial({color:0x1E90FF, transparent:true, opacity:0.6})
};

let terrainBlocks = [];

function generateTerrain(scene, biome='grass'){
  // Remove old terrain
  terrainBlocks.forEach(b => scene.remove(b));
  terrainBlocks = [];

  const width = 50, depth = 50;
  for(let i=0;i<width;i++){
    for(let j=0;j<depth;j++){
      let height = Math.floor((noise.perlin2(i/10,j/10)+1)*3);
      let mat = materials[biome];
      if(height<2 && biome==='grass') mat = materials['water'];

      for(let y=0;y<height;y++){
        terrainBlocks.push(createCube(scene,i,y,j,mat));
      }
    }
  }
}
