import * as THREE from 'three';

export default class House {
    constructor() {
        //console.log("I'm working!");
		this.group = new THREE.Group();
        this.createWalls();
    }

    createWalls() {
        //console.log('yep');
		const geometry = new THREE.BoxGeometry( 20, 16, 1 );
		const material = new THREE.MeshBasicMaterial( { color: 0xF7D291 } );
		const backWall = new THREE.Mesh( geometry, material );
		const frontWall = new THREE.Mesh( geometry, material );

		backWall.position.set(0, 7.5, -10);
		frontWall.position.set(0, 7.5, 7.5);

		this.group.add( backWall, frontWall );		
    }
}