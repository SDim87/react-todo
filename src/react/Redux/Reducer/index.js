import { combineReducers } from 'redux'
import { reducer as SystemDataReducer } from './SystemData'
import { reducer as ArmDataReducer } from './ArmData'
import { reducer as WidgetDataReducer } from './WidgetData'
import { reducer as UserDataReducer } from './UserData'
import { reducer as DogReducer } from './DogReducer'

export const RESET_STATE = 'RESET_STATE'

const appReducer = combineReducers({
  systemData: SystemDataReducer,
  armData: ArmDataReducer,
  widgetData: WidgetDataReducer,
  userData: UserDataReducer,
  dogReducer: DogReducer,
})

const reducer = (state, action) => {
  switch (action.type) {
    case RESET_STATE:
      return (state = {})

    default:
      return appReducer(state, action)
  }
}

export default reducer
