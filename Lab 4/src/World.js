import * as THREE from 'three';

export default class World {
    constructor() {
        this.group = new THREE.Group();
        this.createSky();
    }

    createSky() {
        //console.log("It works");
        const skyGeometry = new THREE.SphereGeometry( 100, 32, 32 );
        const skyMaterial = new THREE.MeshBasicMaterial( {color: 0x00ffff} );
        skyMaterial.side = THREE.BackSide;
        const sky = new THREE.Mesh( skyGeometry, skyMaterial );
        this.group.add( sky );
    }
}