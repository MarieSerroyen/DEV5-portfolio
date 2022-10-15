import * as THREE from 'three';

export default class Flag {
    constructor() {
        //console.log("I'm working!");
        this.group = new THREE.Group();
        this.createFlag();

    }

    createFlag() {
        const textureLoader = new THREE.TextureLoader();
        const nameTexture = textureLoader.load('assets/textures/name.jpg');

        //create flag
		const flagGeometry = new THREE.BoxGeometry( 1, 1, 0 );
		const flagMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff} );
		flagMaterial.map = nameTexture;
		const flag = new THREE.Mesh( flagGeometry, flagMaterial );
		flag.position.set(1.7, 27, 0);
		flag.scale.set(3, 2, 5);
		this.group.add( flag );
    }
}