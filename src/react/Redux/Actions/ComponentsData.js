import * as ComponentsData from '../Reducer/ComponentsData'

export const setFiltersStatus = payload => ({
  type: ComponentsData.SET_FILTERS_STATUS,
  payload,
})

export const setFiltersData = payload => ({
  type: ComponentsData.SET_FILTERS_DATA,
  payload,
})
