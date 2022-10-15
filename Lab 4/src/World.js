import * as THREE from 'three';

export default class World {
    constructor() {
        this.group = new THREE.Group();
        this.createSky();
    }

    createSky() {
        console.log("It works");
    }
}