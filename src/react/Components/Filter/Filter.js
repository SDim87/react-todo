import React, { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
// import { searchItems } from './controller'
import './index.css'

const Filter = () => {
  const [openStatus, setOpenStatus] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  // const selectItems = () => {
  //   const searchedItems = searchItems(
  //     dataFilters.filter[currentFilter].list,
  //     searchValue
  //   )

  //   return searchedItems.map(({ selected, id, name }) => {
  //     return (
  //       <div data-name={name} key={id} className='filter-second__group'>
  //         <input
  //           id={name}
  //           className='filter-second__checkbox'
  //           checked={selected ? true : null}
  //           type='checkbox'
  //           name={name}
  //           value={name}
  //           onChange={event => selectFilter(
  //             currentFilter,
  //             dataFilters,
  //             event.target.checked,
  //             setNewReportData,
  //             name,
  //             setFilters,
  //             filters
  //           )} />

  //         <label htmlFor={name} className='filter-second__label'>{name}</label>
  //       </div>
  //     )
  //   })
  // }

  return (
    <OutsideClickHandler onOutsideClick={() => setOpenStatus(false)}>
      <div className="filter-second">
        <div className={`filter-second__input ${openStatus ? 'is-opened' : null}`}>
          <input
            className="filter-second__search"
            type="search"
            name="search"
            id=""
            // placeholder={dataFilters.filter[currentFilter].name}
            autoComplete="false"
            onClick={() => setOpenStatus(!openStatus ? 'is-opened' : null)}
            onChange={event => setSearchValue(event.target.value)}
            value={searchValue}
          />
        </div>

        <div className="filter-second__dropdown">{/* {selectItems()} */}</div>
      </div>
    </OutsideClickHandler>
  )
}

export default Filter
