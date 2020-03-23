import React, { useState } from 'react'
import './index.css'
import AppCalendar from '../AppCalendar/AppCalendar'
import OutsideClickHandler from 'react-outside-click-handler'

const InputDateSelect = props => {
  const { identificator, type } = props

  const [openCalendar, setCalendar] = useState(false)

  return (
    <OutsideClickHandler onOutsideClick={() => setCalendar(false)}>
      <div className="date-select">
        <div
          className="date-select__inner"
          onClick={() => {
            setCalendar(!openCalendar)
          }}
        >
          <div className="date-select__icon"></div>
          {type === 'global' ? <div className="date-select__text">Выбор даты</div> : null}
        </div>
        {openCalendar ? (
          <AppCalendar
            type={type}
            setCalendar={setCalendar}
            openCalendar={openCalendar}
            identificator={identificator}
          />
        ) : null}
      </div>
    </OutsideClickHandler>
  )
}

export default InputDateSelect
