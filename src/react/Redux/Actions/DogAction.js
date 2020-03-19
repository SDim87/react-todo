import * as DogReducer from '../Reducer/DogReducer'

export const setDogStatus = payload => ({
  type: DogReducer.SET_DOG_STATUS,
  payload,
})

export const setDogPath = payload => ({
  type: DogReducer.SET_DOG_PATH,
  payload,
})

export const setDogName = payload => ({
  type: DogReducer.SET_DOG_NAME,
  payload,
})
