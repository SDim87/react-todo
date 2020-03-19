import { Store } from '../Redux/Stores/Store'
import { defaultApiAdress } from './DefaultApiAdress'
import actions from '../Redux/Actions'

const { setPopupData } = actions

export function requestMethod(settings) {
  return new Promise((resolve, reject) => {
    async function conditionRequest() {
      const nextRequest = await request(settings)
      resolve(nextRequest)
    }

    conditionRequest()
  })
}

function request(settings) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    const baseURL = defaultApiAdress

    request.open(settings.method, baseURL + settings.addURL)
    request.setRequestHeader('Access-Control-Allow-Origin', '*')
    request.setRequestHeader('Content-Type', 'application/json')
    request.setRequestHeader('Accept', 'application/json')

    if (Store.getState().systemData.authStatus) {
      const tokenData = Store.getState().systemData.tokenData
      request.setRequestHeader(`Authorization`, `${tokenData.token_type} ${tokenData.access_token}`)
    }

    request.send(JSON.stringify(settings.data))

    request.onload = () => {
      const result = JSON.parse(request.response)

      if (result.status.code === 200) {
        resolve(result)
      } else {
        const popupData = {
          popupMessage: result.status.message,
          popupStatus: true,
          popupHeader: 'Ошибка',
        }
        setPopupData({ ...popupData })
        reject(result)
      }
    }
  })
}

export function sendFile(file) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    const defaultApiAdress = 'http://192.168.77.101:8090/'
    const baseURL = defaultApiAdress
    request.open('POST', baseURL + 'eissd/upload')
    request.setRequestHeader('Access-Control-Allow-Origin', '*')
    const newFormData = new FormData()
    newFormData.append('file', file)
    // check auth status
    // if true it means user have a access_token and refresh_token
    // so we can put it in the additional header
    if (Store.getState().systemData.authStatus) {
      const tokenData = Store.getState().systemData.tokenData
      request.setRequestHeader(`Authorization`, `${tokenData.token_type} ${tokenData.access_token}`)
    } else {
      // console.log("headers is not defined");
    }
    request.send(newFormData)
    request.onload = () => {
      const result = JSON.parse(request.response)
      if (result.status.code === 200) {
        resolve(result)
      } else {
        reject(result)
      }
    }
  })
}
