
const generateID = () => Math.floor(Math.random() * 99999999999999) + 1

export const createNote = content => {
    return {
      type: "NEW_NOTE",
      payload: {
        content,
        important: true,
        id: generateID()
      }
    }
  }

export const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_NOTE':
      return [...state, action.payload]
    case 'IMPORTANT_NOTES':
      return state.filter(note => note.important);
    case 'NOT_IMPORTANT_NOTES':
      return state.filter(note => !note.important);    
    case 'ALL_NOTES':
      return [...state];    
    default:
      return state
  }  
  }