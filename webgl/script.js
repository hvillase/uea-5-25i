// el caso de babylon.js
const bjs = document.createElement('script');
bjs.src = 'https://cdn.babylonjs.com/babylon.js';
bjs.async = false;
document.head.appendChild(bjs);

const assetsManager = new BABYLON.AssetsManager(scene);
const meshTask = assetsManager.addMeshTask('glb task', '', path[0], path[1]);
meshTask.onSuccess = function (task){
    task.loadedMeshes[0].position = BABYLON.Vector3.Zero();
}
...
assetsManager.load();

static get observedAttributes(){
    return ['src', 'background-color'];
}