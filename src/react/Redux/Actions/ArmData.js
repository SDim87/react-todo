import * as ArmData from '../Reducer/ArmData'

export const setModuleData = payload => ({
  type: ArmData.SET_MODULE_DATA,
  payload,
})

export const setArmContent = payload => ({
  type: ArmData.SET_ARM_CONTENT,
  payload,
})

export const setMenuItems = payload => ({
  type: ArmData.SET_MENU_ITEMS,
  payload,
})
