import { requestMethod } from '../../Controller/Request'
import actions from '../../Redux/Actions'

const { logout } = actions

export async function userLogout() {
  const requestResult = await requestMethod({
    method: 'POST',
    addURL: 'auth/logout',
    data: {},
  })
  if (requestResult.status.code === 200) {
    logout()
  }
}
