export const SET_AUTH_STATUS = 'SET_AUTH_STATUS'
export const SET_TOKEN_DATA = 'SET_TOKEN_DATA'
export const SET_POPUP_DATA = 'SET_POPUP_DATA'
export const SET_CURRENT_ARM = 'SET_CURRENT_ARM'
export const SET_CURRENT_ROLE = 'SET_CURRENT_ROLE'
export const SET_CURRENT_URL = 'SET_CURRENT_URL'
export const SET_CURRENT_MODULE = 'SET_CURRENT_MODULE'

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case SET_AUTH_STATUS:
      return (state = {
        ...state,
        authStatus: action.payload,
      })

    case SET_TOKEN_DATA:
      return (state = {
        ...state,
        tokenData: action.payload,
      })

    case SET_CURRENT_ROLE:
      return (state = {
        ...state,
        currentRole: action.payload,
      })

    case SET_CURRENT_URL:
      return (state = {
        ...state,
        currentUrl: action.payload,
      })

    case SET_POPUP_DATA:
      return (state = {
        ...state,
        popupData: {
          popupMessage: action.payload.popupMessage,
          popupStatus: action.payload.popupStatus,
          popupHeader: action.payload.popupHeader,
        },
      })

    case SET_CURRENT_ARM:
      return (state = {
        ...state,
        currentArm: action.payload,
      })

    case SET_CURRENT_MODULE:
      return (state = {
        ...state,
        currentModule: action.payload,
      })

    default:
      return state
  }
}
