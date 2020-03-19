import React from 'react'
import { selectFilter } from '../Filter/controller'

const SelectedFilters = props => {
  const { data, currentFilter, setNewReportData, filters, setFilters } = props

  const renderSelectedItems = data.filter[currentFilter].list.map(
    // eslint-disable-next-line
    ({ selected, name, id }) => {
      if (selected) {
        return (
          <li key={id} className="filter-choise__item">
            {name}
            <button
              className="filter-choise__close"
              onClick={() => {
                selectFilter(
                  currentFilter,
                  data,
                  false,
                  setNewReportData,
                  name,
                  setFilters,
                  filters,
                )
              }}
            ></button>
          </li>
        )
      }
    },
  )

  return (
    <React.Fragment>
      <div className="filter-choise">
        <div className="filter-choise__title">
          {renderSelectedItems.filter(el => el !== null && el !== undefined).length >= 1
            ? `${props.data.filter[props.currentFilter].name}: `
            : null}
        </div>
        <ol>{renderSelectedItems}</ol>
      </div>
    </React.Fragment>
  )
}

export default SelectedFilters
