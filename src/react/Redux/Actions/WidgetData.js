import * as WidgetData from '../Reducer/WidgetData'

export const setWidgetData = payload => ({
  type: WidgetData.SET_WIDGET_DATA,
  payload,
})

export const setGlobalDates = payload => ({
  type: WidgetData.SET_GLOBAL_DATES,
  payload,
})
