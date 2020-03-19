export function revenueForecastPanelLabel(someKey) {
  switch (someKey) {
    case 'hours_payment':
      return 'Оплата за часы'
    case 'services_payment':
      return 'Оплата за подключенные услуги'
    default:
      return false
  }
}

export function sumOfRevenueForecastDetails(someArr) {
  let sum = 0
  if (someArr.length > 0) {
    someArr.forEach(el => {
      sum += el.value
    })
    return sum
  }
  return 0
}
