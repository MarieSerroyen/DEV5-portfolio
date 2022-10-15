import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

//Classes
import House from "./src/House.js";
import World from "./src/World.js";
import Wall from "./src/Wall.js";
import Shells from "./src/Shells.js";
import Flag from "./src/Flag.js";


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

//add ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

//add directional light
const directionalLight = new THREE.DirectionalLight( 0xFFFFFF, 0.5 );
directionalLight.position.set(30,35,10);
scene.add( directionalLight );

// add directional light helper
/*const directionalLightHelper = new THREE.DirectionalLightHelper( directionalLight, 4 ); //2 grote van uw helper
scene.add( directionalLightHelper );*/

camera.position.z = 150;
camera.position.y = 20;

const house = new House();
scene.add(house.group);


const world = new World();
scene.add(world.group);

const wall = new Wall();
scene.add(wall.group);

const flag = new Flag();
scene.add(flag.group);

//for loop shells
for (let i = 0; i < 15; i++) {
    const x = Math.random() * 60 - 40;
    const z = Math.random() * 60 - 40;
    if (x > 10 || x < -10 || z > 10 || z < -10) {
        const shells = new Shells(x, z);
        scene.add(shells.group);
    }
}

function animate() {
    requestAnimationFrame( animate );

    if (camera.position.z > 5){
        camera.position.z -= 0.1;
    } else {
        camera.position.z = 150;
    } 

    flag.group.rotation.y += 0.01;

    //console.log(camera.position);
    renderer.render( scene, camera );
};

animate();