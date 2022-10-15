import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

//Classes
import House from "./src/House.js";
import World from "./src/World.js";


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

camera.position.z = 40;
camera.position.y = 20;

const house = new House();
scene.add(house.group);

const world = new World();
scene.add(world.group);

function animate() {
    requestAnimationFrame( animate );

    renderer.render( scene, camera );
};

animate();