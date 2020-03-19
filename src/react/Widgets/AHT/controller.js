import widgetContentFunction from '../../Controller/WidgetContent'

export const getDataFromAPI = async (widget_name, callback__hook) => {
  await widgetContentFunction(widget_name).then(res => {
    callback__hook(res.data[widget_name].content)
  })
}
