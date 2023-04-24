// three.js
import * as THREE from 'https://cdn.skypack.dev/three@0.133.1/build/three.module';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.133.1/examples/jsm/controls/OrbitControls'
import * as BufferGeometryUtils from 'https://cdn.skypack.dev/three@0.133.1/examples/jsm/utils/BufferGeometryUtils.js';

const container = document.querySelector('.three-container');
const canvasEl = document.querySelector('#canvas');

let renderer, clock, texture, scenes = [];

const objects = [{
  geometry: new THREE.TorusKnotGeometry(.3, .12, 332, 32),
  mirrorSize: .02,
}, {
  geometry: new THREE.IcosahedronGeometry(.46, 21),
  mirrorSize: .02,
}]


initScene();
window.addEventListener('resize', updateSceneSize);
function initScene() {
  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    canvas: canvasEl
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  clock = new THREE.Clock();
  new THREE.TextureLoader().load(
    '/images/matcap-crystal.png',
    (t) => {
      texture = t;
      for (let i = 0; i < objects.length; i++) {
        scenes.push(createScene(i));
      }
      updateSceneSize();
      render();
    });
}

function createDiscoBall(idx) {
  const dummy = new THREE.Object3D();

  const mirrorMaterial = new THREE.MeshMatcapMaterial({
    matcap: texture
  });

  let geometryOriginal = objects[idx].geometry;
  geometryOriginal.deleteAttribute('normal');
  geometryOriginal.deleteAttribute('uv');
  geometryOriginal = BufferGeometryUtils.mergeVertices(geometryOriginal);
  geometryOriginal.computeVertexNormals();

  const mirrorGeometry = new THREE.PlaneGeometry(objects[idx].mirrorSize, objects[idx].mirrorSize);
  let instancedMirrorMesh = new THREE.InstancedMesh(
    mirrorGeometry,
    mirrorMaterial,
    geometryOriginal.attributes.position.count
  );

  const positions = geometryOriginal.attributes.position.array;
  const normals = geometryOriginal.attributes.normal.array;
  for (let i = 0; i < positions.length; i += 3) {
    dummy.position.set(positions[i], positions[i + 1], positions[i + 2]);
    dummy.lookAt(positions[i] + normals[i], positions[i + 1] + normals[i + 1], positions[i + 2] + normals[i + 2]);
    dummy.updateMatrix();
    instancedMirrorMesh.setMatrixAt(i / 3, dummy.matrix);
  }

  const obj = new THREE.Group();
  const innerGeometry = geometryOriginal.clone();
  const ballInnerMaterial = new THREE.MeshBasicMaterial({ color: 0x121212 });
  const innerMesh = new THREE.Mesh(
    innerGeometry,
    ballInnerMaterial
  );
  obj.add(innerMesh, instancedMirrorMesh);

  return obj;
}

function createScene(geometryIdx) {
  const scene = new THREE.Scene();

  const element = document.createElement('div');
  element.className = 'overlay-block';
  scene.userData.element = element;
  container.appendChild(element);

  const camera = new THREE.PerspectiveCamera(60, scene.userData.element.clientWidth / scene.userData.element.clientHeight, 1, 4);
  camera.position.z = 2;
  scene.userData.camera = camera;

  const controls = new OrbitControls(scene.userData.camera, scene.userData.element);
  controls.minDistance = 1.6;
  controls.maxDistance = 3.2;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 4;
  controls.enableZoom = true;
  controls.enableDamping = true;
  scene.userData.controls = controls;

  scene.add(createDiscoBall(geometryIdx));

  return scene;
}

function render() {

  renderer.setScissorTest(true);
  const delta = .2 * clock.getDelta();

  scenes.forEach((scene, idx) => {
    const rect = scene.userData.element.getBoundingClientRect();
    const width = rect.right - rect.left;
    const height = rect.bottom - rect.top;
    const left = rect.left;
    const bottom = renderer.domElement.clientHeight - rect.bottom;

    renderer.setViewport(left, bottom, width, height);
    renderer.setScissor(left, bottom, width, height);

    scene.userData.controls.update();

    if (idx === 0) {
      scene.children[0].rotateX(delta);
      scene.children[0].rotateZ(delta);
    } else if (idx === 2) {
      scene.children[0].rotateZ(-3 * delta);
    }

    renderer.render(scene, scene.userData.camera);
  });

  requestAnimationFrame(render);
}

function updateSceneSize() {
  scenes.forEach(scene => {
    scene.userData.camera.aspect = scene.userData.element.clientWidth / scene.userData.element.clientHeight;
    scene.userData.camera.updateProjectionMatrix();
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
}