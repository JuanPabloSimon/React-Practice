import sounds from '../utils/sounds1.json'


export const changeKit = (type) => {
    return ({
        type: type,
    })
}


export const kitReducer = (state = sounds[0], action) => {
    switch (action.type) {
        case "CHANGE_TO_KIT_1":
            return sounds[0]
        case "CHANGE_TO_KIT_2":
            return sounds[1]
        default:
            return state
    }
}