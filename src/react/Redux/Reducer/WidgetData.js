export const SET_GLOBAL_DATES = 'SET_GLOBAL_DATES'
export const SET_WIDGET_DATA = 'SET_WIDGET_DATA'

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case SET_GLOBAL_DATES:
      return (state = {
        ...state,
        globalDates: {
          period_begin: action.payload.period_begin,
          period_end: action.payload.period_end,
        },
      })

    case SET_WIDGET_DATA:
      return (state = {
        ...state,
        [`${action.payload.widgetName}`]: {
          data: action.payload.widgetData,
          filtersByDates: action.payload.filtersByDates,
        },
      })

    default:
      return state
  }
}
