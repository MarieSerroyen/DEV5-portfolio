import * as THREE from 'three';

export default class Wall {
    constructor() {
        //console.log("I'm working!");
		this.group = new THREE.Group();
        this.createTowers();
    }

    createTowers() {
        const textureLoader = new THREE.TextureLoader();
        const grainsTexture = textureLoader.load('assets/textures/grains.jpg');

		const towerGeometry = new THREE.CylinderGeometry( 3, 6, 12, 15 );
		const towerMaterial = new THREE.MeshBasicMaterial( { color: 0xF7D291 } );
		towerMaterial.map = grainsTexture;

		const tower1 = new THREE.Mesh( towerGeometry, towerMaterial );
        const tower2 = new THREE.Mesh( towerGeometry, towerMaterial );
        const tower3 = new THREE.Mesh( towerGeometry, towerMaterial );
        const tower4 = new THREE.Mesh( towerGeometry, towerMaterial );
		
        tower1.position.set(-20, 5.5, 25);
        tower2.position.set(20, 5.5, 25);
        tower3.position.set(-20, 5.5, -25);
        tower4.position.set(20, 5.5, -25);
		
        this.group.add( tower1, tower2, tower3, tower4);
    }
}