export const SET_FILTERS_STATUS = 'SET_FILTERS_STATUS'
export const SET_FILTERS_DATA = 'SET_FILTERS_DATA'

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case SET_FILTERS_STATUS:
      return (state = {
        ...state,
        globalFilters: {
          ...state.globalFilters,
          status: action.payload,
        },
      })

    case SET_FILTERS_DATA:
      return (state = {
        ...state,
        globalFilters: {
          ...state.globalFilters,
          data: action.payload,
        },
      })

    default:
      return state
  }
}
