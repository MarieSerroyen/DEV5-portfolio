import * as THREE from 'three';

export default class House {
    constructor() {
        //console.log("I'm working!");
		this.group = new THREE.Group();
        this.createHouse();
    }

    createHouse() {
        console.log('yep');
		const geometry = new THREE.BoxGeometry( 1, 1, 1 );
		const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		const cube = new THREE.Mesh( geometry, material );
		this.group.add( cube );		
    }
}