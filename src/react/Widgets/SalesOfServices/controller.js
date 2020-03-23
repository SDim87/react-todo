import * as d3 from 'd3'
import widgetContentFunction from '../../Controller/WidgetContent'

// const selectArm = JSON.parse(sessionStorage.getItem('state'))['selectedArm']
export const getDataFromAPI = async (widget_name, callback__hook) => {
  let data = {}
  const months = []
  const values = {}

  await widgetContentFunction(widget_name)
    .then(res => {
      data = res.data[widget_name].content
    })
    .then(() => {
      for (const key in data) {
        months.push(key)
      }
    })
    .then(() => {
      const isValid = (prevValue, nextValue) => {
        if (prevValue) {
          if (prevValue['extra-equipment'] !== undefined) {
            return prevValue['extra-equipment'] + nextValue
          }
        } else {
          return nextValue
        }
      }

      for (const key in data) {
        const dataKey = data[key]

        for (const dataKeyItem in dataKey) {
          switch (dataKeyItem) {
            case 'RGP_id':
              break
            case 'SHPD':
              values[key] = {
                ...values[key],
                SHPD: dataKey[dataKeyItem],
              }
              break
            case 'iptv':
              values[key] = {
                ...values[key],
                iptv: dataKey[dataKeyItem],
              }
              break
            case 'Telephony':
              values[key] = {
                ...values[key],
                Telephony: dataKey[dataKeyItem],
              }
              break
            default:
              values[key] = {
                ...values[key],
                'extra-equipment': isValid(values[key], dataKey[dataKeyItem]),
              }
              break
          }
        }
      }
    })
    .then(() => {
      const valueCalculate = (monthArr, valuesObj) => {
        for (const key in valuesObj) {
          if (monthArr === key) {
            // eslint-disable-next-line
            return valuesObj[key]
          }
        }
      }

      const arrMain = []
      const extraMain = []

      const objCounter = obj => {
        let counter = 0
        // eslint-disable-next-line
        for (let key in obj) {
          counter++
        }
        return counter
      }

      // eslint-disable-next-line
      // const fullValue = obj => {
      //   const arr = Object.values(obj)
      //   // console.log(arr)
      //   console.log(arr.length)
      //   for (let i = 0; i < arr.length; i++) {
      //     const a = Object.values(arr[i]).reduce((a, b) => a + b)
      //     console.log(a)
      //   }
      // }

      for (const key in data) {
        const wiType = data[key].service_type

        if (wiType === 'main_sevices') {
          arrMain.push([key])
        }
        if (wiType !== 'main_sevices') {
          extraMain.push([key])
        }
      }

      callback__hook(
        d3.range(objCounter(values)).map(index => ({
          name: months[index],
          value: valueCalculate(months[index], values),
          full: Object.values(valueCalculate(months[index], values)).reduce((elFirst, elSecond) => elFirst + elSecond),
        })),
      )
    })
}
