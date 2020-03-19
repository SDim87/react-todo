export default class ReportIndicator {
  constructor(params) {
    this.minutes = this.getMinutes(params)
    this.hours = this.getHours(params)
  }

  getMinutes(value) {
    if (typeof value === 'number') {
      return `${Math.floor(value / 60)}:${value % 60 >= 10 ? value % 60 : `0${value % 60}`}`
    }
    return value
  }

  getHours(value) {
    if (typeof value === 'number') {
      return (value / 3600).toFixed(2)
    }
    return value
  }
}
