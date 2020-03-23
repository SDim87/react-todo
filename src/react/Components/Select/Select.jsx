import React, { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'

import './index.css'

const Select = props => {
  const { options, nameObj, arm, label } = props

  const [open, setOpen] = useState()
  const [dataLabel, setDataLabel] = useState(options[0].label)

  const addActiveToRole = () => {
    if (arm !== undefined && arm !== 'administrator') {
      return 'is-only-read'
    } else {
      return open ? 'is-opened' : ''
    }
  }

  const addLabel = () => {
    if (label !== undefined) {
      return (
        <label className="select__label" htmlFor="">
          {label}
        </label>
      )
    }
  }

  const getListOptions = () => {
    return options.map(el => (
      <li
        className="select__option"
        key={el.value}
        onClick={() => {
          setDataLabel(el.label)
          setOpen('')
        }}
        >
        {el.label}
      </li>
    ))
  }

  const getName = name => {
    switch (name) {
      case 'codes':
        return <span>Кодировка</span>
      case 'separator':
        return <span>Разделитель столбцов</span>
      
      default:
        break
    }
  }

  return (
    <OutsideClickHandler onOutsideClick={() => setOpen()}>
      <div className="select">
        {getName(nameObj)}
        <div className="select__box">
          {addLabel()}
          <div className={`select__input ${addActiveToRole()}`}>
            <input
              className="select__search"
              type="search"
              name="search"
              id=""
              readOnly
              autoComplete="false"
              placeholder={dataLabel}
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
        <div className={`select__dropdown ${addActiveToRole()}`}>
          <ul className="select__list">{getListOptions()}</ul>
        </div>
      </div>
    </OutsideClickHandler>
  )
}

export default Select
