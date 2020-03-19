export const SET_DOG_STATUS = 'SET_DOG_STATUS'
export const SET_DOG_PATH = 'SET_DOG_PATH'
export const SET_DOG_NAME = 'SET_DOG_NAME'

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case SET_DOG_STATUS:
      return (state = {
        ...state,
        dogStatus: action.payload,
      })

    case SET_DOG_PATH:
      return (state = {
        ...state,
        dogPath: action.payload,
      })

    case SET_DOG_NAME:
      return (state = {
        ...state,
        dogName: action.payload,
      })
    default:
      return state
  }
}
