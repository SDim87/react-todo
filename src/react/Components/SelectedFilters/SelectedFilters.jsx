import React, { useState } from 'react'
import { selectFilter } from '../Filter/controller'
import './index.css'

const SelectedFilters = props => {
  const { data, currentFilter, setNewReportData, filters, setFilters } = props
  const [openAkk, setOpenAkk] = useState(false)
  const getArraySelected = data.filter[currentFilter].list.filter(el => el.selected)

  // const options = {}

  // const newOptions = () => options.map(el => (el = { ...el, active: true }))

  const renderSelectedItems = getArraySelected.map(({ selected, name, id }) => {
    if (selected) {
      return (
        <li key={id} className="selected-filter__item">
          <span>{name}</span>
          <button
            className="selected-filter__close"
            onClick={() => {
              selectFilter(currentFilter, data, false, setNewReportData, name, setFilters, filters)
            }}
          ></button>
        </li>
      )
    } else {
      return null
    }
  })

  const renderBtnAccordeon = () => {
    if (getArraySelected.length >= 1) {
      return (
        <button className="selected-filter__btn" onClick={() => setOpenAkk(!openAkk)}>
          {openAkk ? 'Свернуть' : 'Развернуть'}
        </button>
      )
    }
  }

  return (
    <React.Fragment>
      <div className="selected-filter">
        <div className="selected-filter__head">
          <div className="selected-filter__title">
            {getArraySelected.length >= 1
              ? `${data.filter[currentFilter].name}(${getArraySelected.length}): `
              : null}
          </div>
          {renderBtnAccordeon()}
        </div>
        <div className={`selected-filter__dropdown ${openAkk ? 'is-opened' : 'is-close'}`}>
          <ol className="selected-filter__list">{renderSelectedItems}</ol>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SelectedFilters
