

export const nextDisplay = (value) => {
    return ({
      type: "CHANGE",
      payload: {
        sound: value
      }
    })
  }

export const displayReducer = (state = '', action) => {
    if (action.type === 'CHANGE') { 
      return action.payload.sound
    }
    return state;
  }