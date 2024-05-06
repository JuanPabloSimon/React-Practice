import SoundBox from "../sound-box/SoundBox"
import ControlBox from "../control-box/ControlBox"
import './container.css'
const Container = () => {
    return (
        <div id='container_box'>
            <SoundBox />
            <ControlBox />
        </div>
    )
}

export default Container