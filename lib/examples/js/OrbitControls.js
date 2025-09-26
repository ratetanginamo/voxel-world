const THREE = require('three')
const OrbitControls = require('three-orbitcontrols')
// ES6 also works, i.e.
// import OrbitControls from 'three-orbitcontrols'

// Init THREE scene (add your code)

const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
camera.position.z = 5

const renderer = new THREE.WebGLRenderer({ canvas })

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.25
controls.enableZoom = false
