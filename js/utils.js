// Create a voxel cube
function createCube(scene, x, y, z, material){
  const geo = new THREE.BoxGeometry(1,1,1);
  const mesh = new THREE.Mesh(geo, material);
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  scene.add(mesh);
  return mesh;
}

// Color helpers
function lighten(color, amt){ 
  const c = parseInt(color.slice(1),16);
  return `rgb(${Math.min(255,(c>>16)+255*amt)},${Math.min(255,((c>>8)&0x00FF)+255*amt)},${Math.min(255,(c&0x0000FF)+255*amt)})`;
}
function darken(color, amt){
  const c = parseInt(color.slice(1),16);
  return `rgb(${Math.max(0,(c>>16)-255*amt)},${Math.max(0,((c>>8)&0x00FF)-255*amt)},${Math.max(0,(c&0x0000FF)-255*amt)})`;
}
