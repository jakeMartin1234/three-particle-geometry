import * as THREE from 'three';
import {MeshSurfaceSampler} from "three/addons/math/MeshSurfaceSampler";

const material = new THREE.PointsMaterial({
    color: "black",
});

const defaultOptions = {
    numParticles: 10000,
};

export const ParticleGeometry = (geometry, particleGeometry, particleMaterial, options = defaultOptions) => {

    const particles = new THREE.InstancedMesh(particleGeometry, particleMaterial, options.numParticles);
    const mesh = new THREE.Points(geometry, material);

    const sampler = new MeshSurfaceSampler(mesh).build();

    const tempPosition = new THREE.Vector3();
    const tempObject = new THREE.Object3D();
    let positions = [];
    for (let i = 0; i < options.numParticles; i++) {
        sampler.sample(tempPosition);
        positions.push(tempPosition.clone());
        tempObject.position.set(tempPosition.x, tempPosition.y, tempPosition.z);
        tempObject.scale.setScalar(Math.random() * 0.5 + 0.5);
        tempObject.updateMatrix();
        particles.setMatrixAt(i, tempObject.matrix);
    }

    return particles;


};
