import { Store } from '../Redux/Stores/Store'
import { requestMethod } from './Request'

export default async function widgetContentFunction(widgetName, filters) {
  // const userId = Store.getState().userData.id
  // const organization = Store.getState().userData.organization_id
  const platform = Store.getState().userData.platform_id
  // const salegroup = Store.getState().userData.salegroup_id

  const requestResult = await requestMethod({
    method: 'POST',
    addURL: 'widget/content',
    data: {
      fields: {
        [`${widgetName}`]: {
          // id: userId,
          // arm: currentArm,
          object_id: platform,
          object_type: 'platform',
          ...filters,
        },
      },
    },
  })

  return requestResult
}
