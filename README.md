# three-particle-geometry

An npm package that allows users to represent threeJS geometry instances as a system of customizable particles.
Feel free to clone and use the [demo](https://github.com/jakeMartin1234/three-particle-geometry-test).

![Sphere and Cube](./sphereAndCube.png)



## Prerequisites

1. Have [threeJS](https://threejs.org/) installed in your project.
2. Have a threeJS scene set up that is runnable on the browser.

## Installation

```bash
npm install three-particle-geometry
``` 

## Code Snippets

Import the Library into your file.

```javascript
import { ParticleGeometry } from 'three-particle-geometry';
```

1. Define the geometry that you want to represent as particles. This can be any threeJS geometry instance.
2. Define the geometry and material you want to assign to each of the particles. 
3. Call the ParticleGeometry constructor and add the particles to the scene.

```javascript
// 1. The geometry instance to be represented as particles
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

// 2.
// The geometry instance to be used for each of the particles
const particleGeometry = new THREE.SphereGeometry(0.005);
// The material to be used for each of the particles
const particleMaterial = new THREE.MeshBasicMaterial({
    color: "yellow",
});

// 3. Call to the ParticleGeometry constructor and add to the scene
const particles = new ParticleGeometry(boxGeometry, particleGeometry, particleMaterial, { numParticles: 20000 });
scene.add(particles);
```
