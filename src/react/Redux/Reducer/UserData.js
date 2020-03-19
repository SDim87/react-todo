export const SET_USER_DATA = 'SET_USER_DATA'
export const SET_PHOTO = 'SET_PHOTO'

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return (state = action.payload)
    case SET_PHOTO:
      return (state = {
        ...state,
        photo: action.payload,
      })

    default:
      return state
  }
}
