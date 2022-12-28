import Loader from "../../basic/Loader.js"
import fileList from "./FileList.js"

const folder = "src/models/xbot/"

const list = []

Object.keys(fileList).forEach((key, index) => {
    list[key] = folder + "animations/" + fileList[key]
})

const Xbot = (new Loader(folder + 'xbot.fbx', list, 0.01)).getModel()

export default Xbot

