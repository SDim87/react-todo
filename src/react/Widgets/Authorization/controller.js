import { requestMethod } from '../../Controller/Request'
import { defaultSysData } from '../../Redux/Stores/Store'
import actions from '../../Redux/Actions'
import User from '../../Controller/User'
import Token from '../../Controller/Token'

// eslint-disable-next-line
const { setTokenData, setUserData, setAuthStatus, setGlobalDates } = actions

export async function authorization(login, password, event) {
  event.preventDefault()

  // get system information from Store.js (client_id and client_secret for identication system)
  const { client_id, client_secret } = defaultSysData

  // main request-function
  const requestResult = await requestMethod({
    method: 'POST',
    addURL: 'login',
    data: {
      grant_type: 'password',
      password: password,
      username: login,
      client_id: client_id,
      client_secret: client_secret,
    },
  })

  // set new user status = obj with authStatus(true/false)
  let authStatus = false
  // check status.code
  if (requestResult.status.code === 200) {
    // set new user = obj with userdata
    const userData = new User(requestResult.data.user_info)
    // set new token = obj with tokendata
    const tokenData = new Token(requestResult.data)

    // dispatch userData
    setUserData(userData)
    // dispatch tokenData
    setTokenData(tokenData)
    // dispatch userStatus (auth = true/false)
    setAuthStatus(!authStatus)
    // dispatch global dates
    const getPeriod = () => {
      const date = new Date()
      const startDate = new Date(date.getFullYear(), date.getMonth(), 1)
      const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0)
      return {
        period_begin: `${startDate.getFullYear()}-${
          startDate.getMonth() + 1 >= 10
            ? startDate.getMonth() + 1
            : '0' + (startDate.getMonth() + 1)
        }-${startDate.getDate() >= 10 ? startDate.getDate() : '0' + startDate.getDate()}`,
        period_end: `${endDate.getFullYear()}-${
          endDate.getMonth() + 1 >= 10 ? endDate.getMonth() + 1 : '0' + (endDate.getMonth() + 1)
        }-${endDate.getDate() >= 10 ? endDate.getDate() : '0' + endDate.getDate()}`,
      }
    }
    setGlobalDates(getPeriod())
    // setCurrentUser(userData.id)
  } else {
    setAuthStatus(authStatus)
  }
}
