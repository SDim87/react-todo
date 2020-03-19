import { requestMethod } from '../../Controller/Request'
import WidgetDataActions from '../../Redux/Actions'

const { setWidgetContent } = WidgetDataActions

export async function reportDataRequest(hookFunc, filters, reportData) {
  const requestResult = await requestMethod({
    method: 'POST',
    addURL: 'reports/efficiency/outbound',
    data: {
      ...filters,
    },
  })

  const { result, filter, total } = requestResult.data

  for (const key in filter) {
    filter[key].list = filter[key].list.map(el => (el = { ...el, selected: false }))
  }

  setWidgetContent({ filter: filters ? reportData.filter : filter })

  hookFunc({
    result,
    filter: filters ? reportData.filter : filter,
    total,
  })
}

export function convertDateToLocalString(date) {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  return date.toLocaleString('ru', options)
}
