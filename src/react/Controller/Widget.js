import WidgetConfiguration from '../Widgets/WidgetConfiguration'

export default class Widget {
  constructor(params) {
    this.id = params.id
    this.description = params.description
    this.acronim = params.acronim
    this.name = params.name
    this.clientName = this.setClientName()
    this.coordinates = this.setCoordinates()
    this.isStatic = this.setIsStatic()
    this.submenu = this.setSubmenu()
    this.helper = this.setHelper()
    this.type = params.type
    this.sort = params.sort
    this.calendar = this.setCalendar()
    this.data = this.setData()
    this.addParams = this.setAddParams()
  }

  //// get some data from WidgetConfiguration.json
  // get helper status
  setHelper = () => {
    const newData = WidgetConfiguration.map(el => {
      if (el.serverName === this.acronim) {
        return el.configuration.settings.helper
      } else {
        return null
      }
    })
    return newData.filter(el => el !== null)[0]
  }
  // get calendar status
  setCalendar = () => {
    const newData = WidgetConfiguration.map(el => {
      if (el.serverName === this.acronim) {
        return el.configuration.settings.calendar
      } else {
        return null
      }
    })
    return newData.filter(el => el !== null)[0]
  }
  // get clientName
  setClientName = () => {
    const newData = WidgetConfiguration.map(el => {
      if (el.serverName === this.acronim) {
        return el.clientName
      } else {
        return null
      }
    })
    return newData.filter(el => el !== null)[0]
  }

  // get coordinates
  setCoordinates = () => {
    const newData = WidgetConfiguration.map(el => {
      if (el.serverName === this.acronim) {
        return el.configuration.coordinates
      } else {
        return null
      }
    })
    return newData.filter(el => el !== null)[0]
  }

  // get isStatic
  setIsStatic = () => {
    const newData = WidgetConfiguration.map(el => {
      if (el.serverName === this.acronim) {
        return el.configuration.settings.staticWidget
      } else {
        return null
      }
    })
    return newData.filter(el => el !== null)[0]
  }

  // get submenu
  setSubmenu = () => {
    const newData = WidgetConfiguration.map(el => {
      if (el.serverName === this.acronim) {
        return el.configuration.settings.submenu
      } else {
        return null
      }
    })
    return newData.filter(el => el !== null)[0]
  }

  // get data
  setData = () => {
    const newData = WidgetConfiguration.map(el => {
      if (el.serverName === this.acronim) {
        return el.configuration.data
      } else {
        return null
      }
    })
    return newData.filter(el => el !== null)[0]
  }

  // get additional params
  setAddParams = () => {
    const newData = WidgetConfiguration.map(el => {
      if (el.serverName === this.acronim) {
        return el.configuration.additional_params
      } else {
        return null
      }
    })
    return newData.filter(el => el !== null)[0]
  }
}
