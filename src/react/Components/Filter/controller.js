export function searchItems(data, searchValue) {
  console.log()
  if (!searchValue.length) {
    return data
  }

  return data.filter(el => {
    if (el.name) {
      return el.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
    } else if (el.first_name) {
      return el.first_name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
    } else {
      return el
    }
  })
}

/**
 * @param {*} filterIdentificator { filter -> filterIdentificator }
 * @param {object} data object with data
 * @param {*} filterItemCheckedStatus event.target.checked
 * @param {*} setNewReportData function hook from Redux
 * @param {*} filterName { filter -> filterIdentificator -> name: }
 * @param {*} hookFuncFilters hook function
 * @param {*} filters hook variable
 */
export function selectFilter(
  filterIdentificator,
  data,
  filterItemCheckedStatus,
  setNewReportData,
  filterName,
  hookFuncFilters,
  filters,
) {
  const { result, filter, total } = data

  const newReportData = filter[filterIdentificator].list.map(el => {
    if (el.name === filterName) {
      return { ...el, selected: filterItemCheckedStatus }
    } else {
      return el
    }
  })

  setNewReportData({
    result: result,
    filter: {
      ...filter,
      [filterIdentificator]: {
        ...filter[filterIdentificator],
        list: newReportData,
      },
    },
    total: total,
  })

  const addFiltersFunction = data => {
    return data
      .map(el => (el.selected ? el.id : null))
      .filter(el => el !== null && el !== undefined)
  }

  hookFuncFilters({
    ...filters,
    [`${filterIdentificator}_id`]: addFiltersFunction(newReportData),
  })
}
