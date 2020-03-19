import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import FilterItems from '../FilterItems';
import { filterNameCyrillics } from './controller'

const FilterList = ({ filterName, items, setCurrentFilter, currentFilter }) => {

  const [openStatus, setOpenStatus] = useState(currentFilter === filterName ? true : false)
  const [searchValue, setSearchValue] = useState('')
  const [isAllChecked] = useState(items.filter(el => el.selected === false).length > 0 ? false : true)

  return (
    <OutsideClickHandler onOutsideClick={() => setOpenStatus(false)}>
      <div className='filter-second'>
        <div
          className={`filter-second__input ${openStatus ? 'is-opened' : null}`}
          onClick={() => {
            setOpenStatus(!openStatus)
            setCurrentFilter(filterName)
          }}>
          <input
            className='filter-second__search'
            type='search'
            name='search'
            id=''
            placeholder={filterNameCyrillics(filterName)}
            autoComplete='off'
            onChange={event => setSearchValue(event.target.value)}
            value={searchValue} />
        </div>

        <div className='filter-second__dropdown'>
          <div className='filter-second__group'>
            <input
              className='filter-second__checkbox'
              type='checkbox'
              name='allChecked'
              id={`allChecked ${filterName}`}
              checked={isAllChecked} 
              onChange={(event) => console.log(items, event.target.checked)}
            />

            <label className='filter-second__label filter-second__label_all' htmlFor={`allChecked ${filterName}`}>Выбрать все</label>
          </div>
          <FilterItems itemsArray={items} searchValue={searchValue} filterName={filterName} setOpenStatus={setOpenStatus} />
        </div>
      </div>
    </OutsideClickHandler >
  )
}


export default FilterList
