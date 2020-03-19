import React, { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import ExpandBlock from '../ExpandBlock/ExpandBlock'
import { selectFilter } from '../Filter/controller'

import './index.css'

const FilterSecond = props => {
  const [classOpened, setOpen] = useState('')
  const [expandBlockId, setExpandBlockId] = useState()
  const [searchValue, setSearchValue] = useState('')

  const {
    currentFilter,
    dataFilters,
    setDataFilters,
    setNewReportData,
    filters,
    setFilters
  } = props

  // useEffect(() => {
  //   document.getElementById('root').addEventListener('click', evt => {
  //     if (!classOpened && !evt.target.closest('.filter-second')) {
  //       setOpen(false)
  //     }
  //   })
  // })

  const changeAllDataSelectedStatus = selectStatus => {
    const newObj = dataFilters
    // eslint-disable-next-line
    const newArr = dataFilters.filter[currentFilter].list.map(
      el => (el = {...el, selected: selectStatus})
    )

    newObj['filter'][currentFilter].list = newArr
    setDataFilters({...newObj})
  }

  const getCheckSelectAll = () => {
    const arrCurrentFilters = dataFilters.filter[currentFilter].list
    const arrChecked = arrCurrentFilters.filter(el => el.selected === true)

    return arrChecked.length === arrCurrentFilters.length
  }

  return (
    <OutsideClickHandler onOutsideClick={() => setOpen('')}>
      <div className='filter-second'>
        <div className={`filter-second__input ${classOpened}`} onClick={() => setOpen(!classOpened ? 'is-opened' : '')}>
          <input className='filter-second__search' type='search' name='search' placeholder={dataFilters.filter[currentFilter].name} id='' autoComplete='false' onChange={event => setSearchValue(event.target.value)} value={searchValue}/>
        </div>

        <div className='filter-second__dropdown'>
          <div className='filter-second__group'>
            <input className='filter-second__checkbox' type='checkbox' name='allChecked' id='allChecked' onChange={event => {
              changeAllDataSelectedStatus(event.target.checked)
              selectFilter(
                currentFilter,
                dataFilters,
                event.target.checked,
                setNewReportData,
                dataFilters.filter[currentFilter].name,
                setFilters,
                filters
              )
            }}
              checked={getCheckSelectAll()}/>

            <label className='filter-second__label filter-second__label_all' htmlFor='allChecked'>Выбрать все</label>
          </div>

          <ExpandBlock id={1} {...props} active={true} expandBlockId={expandBlockId} setExpandBlockId={setExpandBlockId}/>
          <ExpandBlock id={2} {...props} active={null} expandBlockId={expandBlockId} setExpandBlockId={setExpandBlockId}/>
        </div>
      </div>
    </OutsideClickHandler>
  )
}

export default FilterSecond
