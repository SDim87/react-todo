import * as UserData from '../Reducer/UserData'

export const setUserData = payload => ({
  type: UserData.SET_USER_DATA,
  payload,
})

export const setPhoto = payload => ({
  type: UserData.SET_PHOTO,
  payload,
})
