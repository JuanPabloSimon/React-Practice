import { useState } from "react";
import './powerBox.css'

const PowerBox = () => {
    const [on, setOn] = useState(true)

    const togglePower = () => {
        const buttons = document.querySelectorAll(".sound_button");
        const kitButton = document.querySelector("#kit_button");
        const volumeButton = document.querySelector("#volume");
        const powerButton = document.querySelector("#power_button");
        if (on) {
          kitButton.setAttribute("disabled", true)
          volumeButton.setAttribute("disabled", true)
          powerButton.classList.replace('action_button', 'action_button_off')
          buttons.forEach((element) => {
            element.setAttribute("disabled", true)
          })
          setOn(false);
        } else {
          powerButton.classList.replace('action_button_off', 'action_button')
          kitButton.removeAttribute("disabled", true)
          volumeButton.removeAttribute("disabled", true)
          buttons.forEach((element) => {
            element.removeAttribute("disabled", false)
          })
          setOn(true) 
        }
      }
    return (
        <div id='power_box'>
            <p>Power</p>
            <button 
                onClick={() => togglePower()}
                className='action_button '
                id="power_button">
            </button>
        </div>
    )
}
export default PowerBox