const loader = new THREE.GLTFLoader();

let policeCar = new Promise((res, rej) => {
  loader.load("src/models/police-car/police.gltf",
    function (gltf) {
      gltf.scene.scale.set(0.1, 0.1, 0.1);
      gltf.scene.traverse(function (node) {
        if (node.isMesh) {
          node.castShadow = true;
        }
      });
      res(gltf.scene);
    },
    // called while loading is progressing
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    // called when loading has errors
    function (error) {
      console.log("An error happened", error);
      rej();
    });
});

export default policeCar;
