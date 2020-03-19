import React from 'react';
import { searchItems } from '../Filter/controller';
import { selectItem } from './controller';

const FilterItems = ({ itemsArray, searchValue, filterName, setOpenStatus }) => {

  const newItems = searchItems(itemsArray, searchValue)

  const items = newItems.map(el => {
    const elemName = el.first_name ? `${el.first_name} ${el.middle_name} ${el.surname}` : el.name
    const key = elemName + (el.first_name ? `${el.first_name} ${el.id}` : el.acronim)
    return (
      <div data-name={elemName} key={key} className='filter-second__group'>
        <input
          id={elemName}
          className='filter-second__checkbox'
          checked={el.selected ? true : null}
          type='checkbox'
          name={elemName}
          value={elemName}
          onChange={event => {selectItem(filterName, el.id, event.target.checked); setOpenStatus(true)}} />
        <label htmlFor={elemName} className='filter-second__label'>{elemName}</label>
      </div>
    )
  })

  return (
    <React.Fragment>
      {items}
    </React.Fragment>
  );
}

export default FilterItems;
