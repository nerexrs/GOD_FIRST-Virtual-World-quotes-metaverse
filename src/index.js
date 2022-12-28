import camera from './basic/Camera.js';
import cube from './basic/shapes/Cube.js';
import keyCode from './basic/KeyCode.js';
import keyListener from './basic/KeyListener.js';
import light from './basic/Light.js';
import plane from './basic/shapes/Plane.js';
import renderer from './basic/Renderer.js';
import scene from './basic/Scene.js'
import loopMachine from './basic/LoopMachine.js';
import keyController from './controllers/KeyController.js';
import moveController from './controllers/MoveController.js';
import rotationController from './controllers/RotationController.js';
import shadowController from './controllers/ShadowController.js';
// import animationController from './controllers/AnimationController.js';
import characterController from './controllers/CharacterController.js';
import policeCar from './models/police-car/PoliceCar.js';
import Xbot from './models/xbot/Xbot.js';
import animationController from './controllers/AnimationController.js';


scene.add( cube );
scene.add( light );
scene.add( plane );
camera.position.set(2,3,-4)

camera.lookAt(cube.position)

Xbot.then(model=>{
    scene.add(model)
    characterController.addCharacter(model)
    characterController.addController(keyController)//#1
    characterController.addController(moveController)//#2
    characterController.addController(rotationController)//#3
    shadowController.setDirectionalLight(light.children[0])
    shadowController.setVector(new THREE.Vector3(0, 5, -5))
    characterController.addController(shadowController)//#4
    loopMachine.addCallback(() => {
        camera.lookAt(model.position)
    })
    characterController.addController(animationController)//#5
    characterController.start()
})

loopMachine.addCallback(() => {
    if(keyListener.isPressed(keyCode.ENTER)) cube.rotation.y += .01
    renderer.render(scene, camera)
});

loopMachine.start()
keyListener.start()


console.log(scene, camera, renderer);