import ConfigBox from "../config-box/ConfigBox";
import PowerBox from "../power-box/PowerBox";
import './controlBox.css'
const ControlBox = () => {
   
    return (
        <div id='control_box'>
            <PowerBox />
            <ConfigBox />
        </div>
    )
}

export default ControlBox;