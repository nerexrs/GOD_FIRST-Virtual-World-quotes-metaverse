import loopMachine from "./LoopMachine.js"

class Animator {
    constructor(mesh) {
        this.mixer = new THREE.AnimationMixer(mesh);
        this.clock = new THREE.Clock();
        this.clips = mesh.animations.map(animation => {
            return this.mixer.clipAction(animation)
        })
        this.lastClip = null
        this.interpolationTime = 0.2
        this.inProgress = false
    }
    run = () => {
        this.mixer.update(this.clock.getDelta())
    }
    start() {
        loopMachine.addCallback(this.run)
    }
    stop() {
        loopMachine.removeCallback(this.run)
    }
    onCycleFinished = () => {
        this.inProgress = false
    }
    action(animationId, timeScale = 1, cycleFlag = false) {
        if (this.inProgress) return
        if (cycleFlag) {
            this.mixer.addEventListener('loop', this.onCycleFinished)
            this.inProgress = true
        }
        this.mixer.timeScale = timeScale
        if (this.lastClip === null) {
            console.log(animationId);
            this.clips[animationId].play()
            this.lastClip = animationId
            return
        }
        if (this.lastClip == animationId) {
            return
        }
        this.clips[animationId].reset()
        this.clips[animationId].play()
        this.clips[this.lastClip].crossFadeTo(this.clips[animationId], this.interpolationTime, true)
        this.lastClip = animationId
    }
}
export default Animator