import { useDispatch, useSelector } from "react-redux"
import { nextDisplay } from "../../reducers/displayReducer";
import './soundBox.css'

const SoundBox = () => {
    const kit = useSelector(state => state.kit);
    const dispatch = useDispatch();

    const playSound = (id) => {
        const element = document.getElementById(id);
        const audio = element.childNodes[1];
        const name = kit.find(el => el.letter === id).name;
        audio.play()
        dispatch(nextDisplay(name))
      };

    return (
        <div id='sounds_box'>
        {
          kit.map((element, index) => {
            return <button
                      key={index} id={element.letter}
                      className='sound_button'
                      onClick={() => playSound(element.letter)}>
                        {element.letter}
                        <audio className="clips" src={element.sound}/>
                    </button>
          })
        }
      </div>
    )
}


export default SoundBox