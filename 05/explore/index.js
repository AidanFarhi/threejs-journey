import * as THREE from 'three'

// constants
const HEIGHT = 600
const WIDTH = 800
const ASPECT_RATIO = WIDTH / HEIGHT
const FIELD_OF_VISION = 75

// get the canvas
const canvas = document.querySelector('canvas.webgl')

// create the scene
const scene = new THREE.Scene()

// create the camera
const camera = new THREE.PerspectiveCamera(FIELD_OF_VISION, ASPECT_RATIO)
camera.position.set(0, 0, 10)

// create a group
const group = new THREE.Group()

// create a cube
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 'white'})
)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 'red'})
)
cube2.position.x = 2

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 'red'})
)

cube3.position.x = -2

const cube4 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 'red'})
)

cube4.position.y = -2

const cube5 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 'red'})
)

cube5.position.y = 2

const cube6 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 'red'})
)

cube6.position.z = -2

const cube7 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 'red'})
)

cube7.position.z = 2

// add the cubes to the group
group.add(cube1, cube2, cube3, cube4, cube5, cube6, cube7)

// create a renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas})
renderer.setSize(WIDTH, HEIGHT)

// add everything to the scene
scene.add(camera, group)

// do some animations
const clock = new THREE.Clock()
const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    group.rotation.x = elapsedTime
    group.rotation.y = elapsedTime
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()
