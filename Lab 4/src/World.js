import * as THREE from 'three';

export default class World {
    constructor() {
        this.group = new THREE.Group();
        this.createSky();
        this.createSand();
    }

    createSky() {
        //console.log("It works");
        const skyGeometry = new THREE.SphereGeometry( 100, 32, 32 );
        const skyMaterial = new THREE.MeshBasicMaterial( {color: 0x00ffff} );
        skyMaterial.side = THREE.BackSide;
        const sky = new THREE.Mesh( skyGeometry, skyMaterial );
        this.group.add( sky );
    }

    createSand() {
        const textureLoader = new THREE.TextureLoader();
        const sandTexture = textureLoader.load('assets/textures/sand.jpg');

        const sandGeometry = new THREE.BoxGeometry( 70, 0.1, 70 );
        const sandMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff} );
        sandMaterial.map = sandTexture;
        const sand = new THREE.Mesh( sandGeometry, sandMaterial );
        sand.position.y = -0.05;
        this.group.add( sand );
    }
}