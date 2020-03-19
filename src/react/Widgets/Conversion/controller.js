import { Store } from '../../Redux/Stores/Store'
import { requestMethod } from '../../Controller/Request'

export async function widgetContentFunction(widgetName) {
  const userId = Store.getState().currentUser
  const requestResult = await requestMethod({
    method: 'POST',
    addURL: 'widget/content',
    data: {
      fields: {
        [`${widgetName}`]: {
          user_id: userId,
        },
      },
    },
  })
  return requestResult
}
