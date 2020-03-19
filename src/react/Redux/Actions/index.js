import { bindActionCreators } from 'redux'

import * as SystemDataActions from './SystemData'
import * as ArmDataActions from './ArmData'
import * as WidgetDataActions from './WidgetData'
import * as UserDataActions from './UserData'
import * as DogAction from './DogAction'

import { Store } from '../Stores/Store'
import { RESET_STATE } from '../Reducer/index'

const logout = () => {
  return {
    type: RESET_STATE,
  }
}

export default bindActionCreators(
  {
    ...SystemDataActions,
    ...ArmDataActions,
    ...WidgetDataActions,
    ...UserDataActions,
    ...DogAction,
    logout,
  },
  Store.dispatch,
)
