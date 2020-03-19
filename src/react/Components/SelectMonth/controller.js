import actions from '../../Redux/Actions'

const { setGlobalDates } = actions

export function options() {
  const monthArr = []
  const day = new Date()
  for (let i = 0; i <= 11; i++) {
    day.setMonth(i)
    monthArr.push(day.getMonth())
  }
  const currentMonth = new Date().getMonth() + 1
  const currentYear = monthArr.slice(0, currentMonth)
  const pastYear = monthArr.slice(currentMonth, monthArr.length)
  return currentYear.reverse().concat(pastYear.reverse())
}

export function setDatePeriod(month) {
  const date = new Date()
  date.setMonth(month)
  date.getMonth() > new Date().getMonth()
    ? date.setFullYear(date.getFullYear() - 1)
    : date.setFullYear(date.getFullYear())
  const startDate = new Date(date.getFullYear(), date.getMonth(), 1)
  const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  const period = {
    period_begin: `${startDate.getFullYear()}-${
      startDate.getMonth() + 1 >= 10 ? startDate.getMonth() + 1 : '0' + (startDate.getMonth() + 1)
    }-${startDate.getDate() >= 10 ? startDate.getDate() : '0' + startDate.getDate()}`,
    period_end: `${endDate.getFullYear()}-${
      endDate.getMonth() + 1 >= 10 ? endDate.getMonth() + 1 : '0' + (endDate.getMonth() + 1)
    }-${endDate.getDate() >= 10 ? endDate.getDate() : '0' + endDate.getDate()}`,
  }
  setGlobalDates({ ...period })
}

export function currentMonthByPeriod(period_begin) {
  const date = new Date(period_begin)
  return date.getMonth()
}

export function setCurrentPeriod() {
  const currentPeriod = new Date().getMonth()
  setDatePeriod(currentPeriod)
}
