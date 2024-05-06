import { useSelector, useDispatch } from "react-redux"
import './quote.css'
import tweeter from "../../utils/assets/brandico--twitter-bird.svg"
import tumblr from '../../utils/assets/uil--tumblr.svg'
import { nextNote } from "../../reducers/quoteReducer"
import { nextStyle } from "../../reducers/stylesReducer"

const Quote = () => {
    const quotesState = useSelector(state => state.quote)  
    const stylesState = useSelector(state => state.styles)
    const dispatch = useDispatch()

    const handleNext = () => {
      document.getElementById("data").style.opacity = 0; 
      setTimeout(() => {
        document.getElementById("data").style.opacity = 1; 
        dispatch(nextStyle())
        dispatch(nextNote())
      }, 1000)
    }
    
    return (
        <div id='container' style={{backgroundColor: stylesState.color}}>
          <div id="quote_container">
            <div id="data" style={{color: stylesState.color}}>
              <h1 id="frase">"{quotesState.frase}"</h1>
              <h3 id="author">-{quotesState.autor}</h3>
            </div>
            <div id="buttons">
              <section id="media_buttons">
                <button id="tweet_frase" className="button" style={{backgroundColor: stylesState.color}}><img src={tweeter} alt="bird"/></button>
                <button id="tumbl_frase" className="button" style={{backgroundColor: stylesState.color}}><img src={tumblr} alt="bird"/></button>
              </section>
              <button id="next_button" className="button" style={{backgroundColor: stylesState.color}} onClick={handleNext}>Next Quote</button>
            </div>
          </div>
        </div>
    )
}

export default Quote
