import { getRandomIndex } from "../utils/randomNumber"
import styles from '../utils/styles.json'

export const nextStyle = () => {
  return ({
    type: 'CHANGE_STYLES',
    payload: {
      index: getRandomIndex(styles)
    }
  })
}

export const stylesReducer = (state = styles[getRandomIndex(styles)],action) => {
    if (action.type === "CHANGE_STYLES")
      return styles[action.payload.index]
  
    return state
}