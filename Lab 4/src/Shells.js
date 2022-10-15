import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default class Shells {
    constructor(x, z) {
        //console.log("I'm working!");
        this.group = new THREE.Group();
        this.createShells(x,z);

    }

    createShells(x,z) {
        const loader = new GLTFLoader();
        loader.load('assets/models/scene.gltf', (gltf) => {
            const shell = gltf.scene;
            shell.traverse((child) => {
                if (child.isMesh) {
                    child.material.color.set(0xffffff);
                }
            });
            shell.scale.set(0.1, 0.1, 0.1);
            shell.position.x = x;
            shell.position.z = z;
            shell.rotation.x = Math.PI / -2;
            this.group.add(shell);
        });
    }
}