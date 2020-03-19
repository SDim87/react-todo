import React, { useState, useEffect } from 'react'
import { selectFilter } from './../Filter/controller'

import './index.css'

const ExpandBlock = props => {
  const [trigger, setTrigger] = useState(false)

  // console.log(props)

  const {
    id,
    expandBlockId,
    setExpandBlockId,
    dataFilters,
    setDataFilters,
    currentFilter,
    filters,
    setFilters,
    setNewReportData,
    active
  } = props

  useEffect(() => {
    id === expandBlockId ? setTrigger(true) : setTrigger(false)
  }, [id, expandBlockId])

  const changeDataItem = (selectedStatus, id) => {
    const newObj = dataFilters
    const newArr = newObj.filter[currentFilter].list.map(el =>
      el.id === id ? (el = { ...el, selected: selectedStatus }) : el
    )

    newObj['filter'][currentFilter].list = newArr
    setDataFilters({ ...newObj })
  }

  const filterByActiveStatus = (active, data) => {
    return data.filter[currentFilter].list.filter(el => el.active === active)
  }

  /**
   * @param {Array} arr
   * @returns list checkbox, jsx
   */
  const setListCheckbox = arr => {
    return arr.map(el => (
      <div key={el.name} className="filter-second__group">
        <input
          className="filter-second__checkbox"
          type="checkbox"
          name={el.name}
          id={`company${el.id}`}
          checked={el.selected ? true : null}
          onChange={event => {
            changeDataItem(event.target.checked, el.id)
            selectFilter(
              currentFilter,
              dataFilters,
              event.target.checked,
              setNewReportData,
              el.name,
              setFilters,
              filters
            )
          }}
        />
        <label className="filter-second__label" htmlFor={`company${el.id}`}>
          {el.name}
        </label>
      </div>
    ))
  }

  return (
    <div className="expand-block">
      <div
        className={`expand-block__trigger ${trigger ? 'is-opened' : ''}`}
        onClick={() => setExpandBlockId(trigger ? false : id)}
      >
        {`Показать ${active ? 'активные' : 'неактивные'} (${
          filterByActiveStatus(active, dataFilters).length
        })`}
      </div>
      <div className={`expand-block__content ${trigger ? 'is-opened' : ''}`}>
        {setListCheckbox(filterByActiveStatus(active, dataFilters))}
      </div>
    </div>
  )
}

export default ExpandBlock
