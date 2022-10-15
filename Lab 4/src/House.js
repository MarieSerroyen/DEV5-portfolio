import * as THREE from 'three';

export default class House {
    constructor() {
        //console.log("I'm working!");
		this.group = new THREE.Group();
        this.createWalls();
		this.createRoof();
		this.createRoofTower();
    }

    createWalls() {
        //console.log('yep');
		const geometry = new THREE.BoxGeometry( 20, 16, 1 );
		const material = new THREE.MeshBasicMaterial( { color: 0xF7D291 } );

		const backWall = new THREE.Mesh( geometry, material );
		const frontWall = new THREE.Mesh( geometry, material );
		const leftWall = new THREE.Mesh( geometry, material );
		const rightWall = new THREE.Mesh( geometry, material );

		backWall.position.set(0, 7.5, -10);
		frontWall.position.set(0, 7.5, 10);
		leftWall.position.set(-9.5, 7.5, 0);
		leftWall.rotation.y = Math.PI / 2;
		rightWall.position.set(9.5, 7.5, 0);
		rightWall.rotation.y = Math.PI / 2;

		this.group.add( backWall, frontWall, leftWall, rightWall );		
    }

	createRoof() {
		//create flat roof
		const roofGeometry = new THREE.BoxGeometry( 20, 1, 21 );
		const roofMaterial = new THREE.MeshBasicMaterial( { color: 0xF7D291 } );
		const roof = new THREE.Mesh( roofGeometry, roofMaterial );
		roof.position.set(0, 16, 0);
		this.group.add( roof );
	}

	createRoofTower() {
		//create tower
		const towerGeometry = new THREE.CylinderGeometry( 3, 6, 9, 15 );
		const towerMaterial = new THREE.MeshBasicMaterial( { color: 0xF7D291 } );
		const tower = new THREE.Mesh( towerGeometry, towerMaterial );
		tower.position.set(0, 20, 0);
		this.group.add( tower );

		//add window
		const windowGeometry = new THREE.BoxGeometry( 1, 1, 1 );
		const windowMaterial = new THREE.MeshBasicMaterial( { color: 0x000000 } );
		const window = new THREE.Mesh( windowGeometry, windowMaterial );
		window.position.set(0, 21, 4);
		this.group.add( window );
	}
}