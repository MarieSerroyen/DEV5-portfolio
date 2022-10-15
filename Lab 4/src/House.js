import * as THREE from 'three';

export default class House {
    constructor() {
        //console.log("I'm working!");
		this.group = new THREE.Group();
        this.createWalls();
		this.createRoof();
		this.createRoofTower();
		this.createDoor();
		this.createFlag();
    }

    createWalls() {
        const textureLoader = new THREE.TextureLoader();
        const grainsTexture = textureLoader.load('assets/textures/grains.jpg');

		const geometry = new THREE.BoxGeometry( 20, 16, 1 );
		const material = new THREE.MeshBasicMaterial( { color: 0xF7D291 } );
		material.map = grainsTexture;	

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

		this.group.add( backWall, frontWall, leftWall, rightWall);		
		
    }

	createRoof() {
		const textureLoader = new THREE.TextureLoader();
        const grainsTexture = textureLoader.load('assets/textures/grains.jpg');

		const roofGeometry = new THREE.BoxGeometry( 20, 1, 21 );
		const roofMaterial = new THREE.MeshBasicMaterial( { color: 0xF7D291 } );
		roofMaterial.map = grainsTexture;
		const roof = new THREE.Mesh( roofGeometry, roofMaterial );
		roof.position.set(0, 16, 0);
		this.group.add( roof );
	}

	createRoofTower() {
		const textureLoader = new THREE.TextureLoader();
        const grainsTexture = textureLoader.load('assets/textures/grains.jpg');

		const towerGeometry = new THREE.CylinderGeometry( 3, 6, 9, 15 );
		const towerMaterial = new THREE.MeshBasicMaterial( { color: 0xF7D291 } );
		towerMaterial.map = grainsTexture;
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

	createDoor() {
		const textureLoader = new THREE.TextureLoader();
        const doorTexture = textureLoader.load('assets/textures/door.jpg');

		const doorGeometry = new THREE.PlaneGeometry( 8, 10 );
		const doorMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );
		doorMaterial.map = doorTexture;
		const door = new THREE.Mesh( doorGeometry, doorMaterial );
		door.position.set(0, 4.5, 10.7);
		this.group.add( door );
	}

	createFlag() {
		//create flag pole
		const poleGeometry = new THREE.CylinderGeometry( 0.2, 0.2, 6, 15 );
		const poleMaterial = new THREE.MeshBasicMaterial( { color: 0xD2D2D0} );
		const pole = new THREE.Mesh( poleGeometry, poleMaterial );
		pole.position.y = 25;

		//create flag
		const flagGeometry = new THREE.PlaneGeometry( 1, 1 );
		const flagMaterial = new THREE.MeshBasicMaterial( { color: 0x000000 } );
		const flag = new THREE.Mesh( flagGeometry, flagMaterial );
		flag.position.set(1.5, 27, 0);
		flag.scale.set(3, 2, 5);
		this.group.add( pole, flag );
	}
}