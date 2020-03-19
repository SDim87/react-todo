import React from 'react'
import './index.css'
import { InputDateSelect } from '../InputDateSelect/InputDateSelect'
import { FilterSecond } from '../FilterSecond/FilterSecond'
import SalesTable from '../../Widgets/SalesTable/SalesTable'

const itemList = [
  { id: 1, text: 'Исходящие проекты эффективности' },
  { id: 2, text: 'Сводный отчет по исходящим проектам' },
  { id: 3, text: 'Утилизация рабочих мест' },
  { id: 4, text: 'Исходящие проекты ПФ' }
]

export const TabsTable = () => {
  const items = itemList.map((elem, index) => {
    return (
      <li
        className={`tabs-table__item ${index === 0 ? 'is-active' : ''}`}
        key={elem.id}
      >
        {elem.text}
      </li>
    )
  })

  return (
    <div>
      <div className="tabs-table">
        <ol className="tabs-table__list">{items}</ol>
        <div className="tabs-table__content">
          <div className="tabs-table__row">
            <InputDateSelect />
            <FilterSecond />
            <FilterSecond />
          </div>
          <div className="tabs-table__row">
            <div className="tabs-table__date">1 дек - 15 дек 2019</div>
            <div className="filter-choise">
              <div className="filter-choise__title">Площадка:</div>
              <ol className="filter-choise__list">
                <li className="filter-choise__item">
                  Теле2
                  <button className="filter-choise__close"></button>
                </li>
              </ol>
            </div>
          </div>
          <SalesTable />
        </div>
      </div>
    </div>
  )
}
