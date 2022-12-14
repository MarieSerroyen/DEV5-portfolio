import * as THREE from 'three';

export default class Wall {
    constructor() {
        //console.log("I'm working!");
		this.group = new THREE.Group();
        this.createTowers();
        this.createTowerWindows();
        this.createWalls();
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

    createTowerWindows() {
        const windowGeometry = new THREE.BoxGeometry( 1.5, 1.5, 1 );
		const windowMaterial = new THREE.MeshBasicMaterial( { color: 0x000000 } );
		
        const window1 = new THREE.Mesh( windowGeometry, windowMaterial );
        const window2 = new THREE.Mesh( windowGeometry, windowMaterial );
		
        window1.position.set(-20, 8, 28.6);
        window2.position.set(20, 8, 28.6);
		
        this.group.add( window1, window2);
    }

    createWalls() {
        const textureLoader = new THREE.TextureLoader();
        const grainsTexture = textureLoader.load('assets/textures/grains.jpg');

        const geometryBack = new THREE.BoxGeometry( 36, 8, 1 );
        const geometrySide = new THREE.BoxGeometry( 44, 8, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0xF7D291 } );
        material.map = grainsTexture;	

        const backOuterWall = new THREE.Mesh( geometryBack, material );
        const leftOuterWall = new THREE.Mesh( geometrySide, material );
        const rightOuterWall = new THREE.Mesh( geometrySide, material );

        backOuterWall.position.set(0, 3.5, -25);
        leftOuterWall.position.set(-21, 3.5, 0);
        leftOuterWall.rotation.y = Math.PI / 2;
        rightOuterWall.position.set(21, 3.5, 0);
        rightOuterWall.rotation.y = Math.PI / 2;

        this.group.add( backOuterWall, leftOuterWall, rightOuterWall);

    }
}