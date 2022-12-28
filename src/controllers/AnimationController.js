import Animator from "../basic/Animator.js"

class AnimationController{
    constructor() {
        this.state = null
    }
    init(characterController) { 
        this.state = characterController.state
        this.animator = new Animator(characterController.character)
        this.animator.start()
    }
    tick() { 
        
        if (this.state.translation.y == 1){
            this.animator.action(4)
        } else if (this.state.translation.y == -1){
            this.animator.action(6)
        } else {
            this.animator.action(0)
        }
        // if (this.state.translation.x == 1){
           
        // }
        // if (this.state.translation.x == -1){
           
        // }
    }
}

const animationController = new AnimationController()

export default animationController