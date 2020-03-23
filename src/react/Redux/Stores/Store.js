import { createStore } from 'redux'
import Reducer from '../Reducer'

// ///////////////////////////////////////////////////
// all hardcode data and functions for this shit here
// ///////////////////////////////////////////////////

// get session data if exist from sessionStorage and write it to the Redux-store
const loadState = () => {
  try {
    const serialisedState = sessionStorage.getItem('state')
    if (!serialisedState) return undefined
    
    return JSON.parse(serialisedState)
  } catch (err) {
    return undefined
  }
}

// identification system data (required)
export const defaultSysData = {
  // client_id: "12",  // 101 8080
  // client_secret: "AyKjlMvKZb9fyZBKKegGYDGnDySUE79JbuhNwnSB"
  client_secret: '23IzWSgkX5MUlpxSAYJr2o1sM8DRkLXI7vlZFExW',
  client_id: '2',
}

// result loadState function (session data or null)
const oldState = loadState()

// Redux-store initialization
export const Store = createStore(Reducer, oldState)
