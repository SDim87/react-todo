import Widget from './Widget'

export default class Module {
  constructor(params) {
    this.name = params.name
    this.description = params.description
    this.acronim = params.acronim
    this.sort = params.sort
    this.widgets = this.setWidgets(params)
    this.route = this.setRoute()
  }

  // set route - parse this.acronim and replace "_" to "-"
  setRoute = () => {
    return '/' + this.acronim.split(this.acronim.match('_') ? '_' : '').join('-')
  }

  // connect request from server and WidgetConfiguration.json
  setWidgets = params => {
    return params['widgets'].map(el => {
      return new Widget(el)
    })
  }
}
