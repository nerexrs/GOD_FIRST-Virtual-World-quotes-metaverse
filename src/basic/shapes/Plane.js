const geometry = new THREE.PlaneGeometry( 100, 100 );
// const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.FrontSide} );
const material = new THREE.MeshPhongMaterial( {color: 0xffff00, side: THREE.FrontSide} );


const plane = new THREE.Mesh( geometry, material );

plane.rotation.x -= Math.PI *.5 
plane.castShadow = true;
plane.receiveShadow = true; 

export default plane