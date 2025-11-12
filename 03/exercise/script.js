import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// * A Mesh is a combination of a geometry (shape) and a material (how it looks)

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({color: 'red'})
const mesh = new THREE.Mesh(geometry, material)

// Add the Mesh to the scene
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.setZ(3)
camera.position.setY(1)
camera.position.setX(1)

// Add camera to scene
scene.add(camera)

// * A Renderer will render the scene from the camera's point of view.
//   The result will be drawn into a canvas.
//   We can create the canvas or let the Renderer generate it and add it
//   to the page.

// Renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)