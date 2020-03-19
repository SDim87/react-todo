export function filterNameCyrillics(acronim) {
  switch (acronim) {
    case 'platforms':
      return 'Выберите площадку'
    case 'salegroups':
      return 'Выберите бригаду'
    case 'users':
      return 'Выберите оператора'
    default:
      break
  }
}
