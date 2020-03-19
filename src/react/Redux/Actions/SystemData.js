import * as SystemData from '../Reducer/SystemData'

export const setAuthStatus = payload => ({
  type: SystemData.SET_AUTH_STATUS,
  payload,
})

export const setTokenData = payload => ({
  type: SystemData.SET_TOKEN_DATA,
  payload,
})

export const setCurrentArm = payload => ({
  type: SystemData.SET_CURRENT_ARM,
  payload,
})

export const setCurrentRole = payload => ({
  type: SystemData.SET_CURRENT_ROLE,
  payload,
})

export const setCurrentUrl = payload => ({
  type: SystemData.SET_CURRENT_URL,
  payload,
})

export const setPopupData = payload => ({
  type: SystemData.SET_POPUP_DATA,
  payload,
})

export const setCurrentModule = payload => ({
  type: SystemData.SET_CURRENT_MODULE,
  payload,
})
