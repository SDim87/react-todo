import { requestMethod } from '../../Controller/Request'
import { Store } from '../../Redux/Stores/Store'

export async function getAlerts() {
  const userId = Store.getState().userData.id
  const requestResult = await requestMethod({
    method: 'POST',
    addURL: 'alerts/get',
    data: {
      user_ids: [userId],
    },
  })
  return requestResult
}

export function templateAlerts(template_id) {
  switch (template_id) {
    case 1:
      return 'userPanel__alarms-item_green'
    case 2:
      return 'userPanel__alarms-item_blue'
    case 3:
      return 'userPanel__alarms-item_red'
    default:
      return 'userPanel__alarms-item_red'
  }
}
