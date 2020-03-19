import widgetContentFunction from '../../Controller/WidgetContent'

export const getDataFromAPI = async (widget_name, callback__hook, datesPeriod) => {
  let data = {}
  const res = []

  await widgetContentFunction(widget_name, datesPeriod)
    .then(res => {
      data = res.data[widget_name].content
    })
    .then(() => {
      const key = Object.keys(data)
      const values = Object.values(data)

      for (let i = 0; i < key.length; i++) {
        res.push({
          name: key[i],
          value: values[i].value,
          colors: values[i].colors,
          lastValue: values[i].last_value,
          valueType: values[i].value_type,
        })
      }
    })
    .then(() => {
      callback__hook(res)
    })
}
