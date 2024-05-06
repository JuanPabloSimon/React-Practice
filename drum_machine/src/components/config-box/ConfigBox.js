import { nextDisplay } from "../../reducers/displayReducer";
import { changeKit } from "../../reducers/kitReducer";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import './configBox.css'

const ConfigBox = () => {
    const display = useSelector(state => state.display)
    const dispatch = useDispatch()
    const [currentKit, setCurrentKit] = useState(1)
    
    const toggleKit = () => {
      const kit_button = document.querySelector("#kit_button")
      if(currentKit === 1) {
        kit_button.classList.replace('action_button', 'action_button_off')
        dispatch(changeKit("CHANGE_TO_KIT_2"));
        dispatch(nextDisplay("Heater Kit"))
        setCurrentKit(2);
      } else {
        kit_button.classList.replace('action_button_off','action_button')
        dispatch(changeKit("CHANGE_TO_KIT_1"));
        dispatch(nextDisplay("Smooth Piano Kit"))
        setCurrentKit(1);
      }
    }

    useEffect(() => {
        const volumeSlider = document.getElementById("volume");
        const audios = document.querySelectorAll(".clips")
        volumeSlider.addEventListener("input", function (e) {
          dispatch(nextDisplay("Volume: " + e.currentTarget.value))
          audios.forEach((el) => {
            el.volume = e.currentTarget.value / 100;
          })
        });
        
        
        if(display !== '') {
          setTimeout(() => {
            dispatch(nextDisplay(''))
          }, 5000)
        }
        
      }, [display, dispatch])

    return (
        <div id="config_box">    
            <div id='display'>{display}</div>
            <input type='range' id='volume'></input>
            <div id='bank_box'>
            <p>Bank</p>
            <button 
                onClick={() => toggleKit()}
                id="kit_button"
                className='action_button'></button>
            </div>
        </div>
    ) 
}

export default ConfigBox