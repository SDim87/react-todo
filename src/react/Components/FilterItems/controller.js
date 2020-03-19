import actions from '../../Redux/Actions'
import { Store } from '../../Redux/Stores/Store'

const { setFiltersData } = actions

export function selectItem(filterName, identificator, checkedStatus) {
  const filtersData = Store.getState().componentsData.globalFilters.data
  const newFiltersData = filtersData[filterName].map(el => {
    return el.id === identificator ? { ...el, selected: checkedStatus } : el
  })
  setFiltersData({ ...filtersData, [`${filterName}`]: newFiltersData })
}
