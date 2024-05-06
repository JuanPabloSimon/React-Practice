import { getRandomIndex } from '../utils/randomNumber'
import quotes from '../utils/quotes.json'

export const nextNote = () => {
    return ({
        type: "CHANGE_QUOTE",
        payload: {
          index: getRandomIndex(quotes)
        }
    })
}


export const quoteReducer = (state = quotes[getRandomIndex(quotes)], action) => {
    if (action.type === 'CHANGE_QUOTE') 
      return quotes[action.payload.index]
    
    return state
  }
  