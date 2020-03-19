import { requestMethod } from '../../Controller/Request'
import { Store } from '../../Redux/Stores/Store'
import actions from '../../Redux/Actions'

const { setFiltersData } = actions

export async function getFilters() {
  const user_id = Store.getState().userData.id
  const requestResult = await requestMethod({
    method: 'POST',
    addURL: 'filters/get',
    data: {
      user_id,
    },
  })
  const { data } = requestResult
  const newResultData = {}
  for (const key in data) {
    const newArr = []
    data[key].forEach(el => {
      newArr.push({ ...el, selected: true })
    })
    newResultData[key] = newArr
  }
  setFiltersData(newResultData)
}
