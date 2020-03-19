export const SET_MODULE_DATA = 'SET_MODULE_DATA'
export const SET_ARM_CONTENT = 'SET_ARM_CONTENT'
export const SET_MENU_ITEMS = 'SET_MENU_ITEMS'

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case SET_MODULE_DATA:
      return (state = {
        ...state,
        moduleData: action.payload,
      })

    case SET_ARM_CONTENT:
      return (state = {
        ...state,
        armContent: action.payload,
      })

    case SET_MENU_ITEMS:
      return (state = {
        ...state,
        menuItems: action.payload,
      })

    default:
      return state
  }
}
