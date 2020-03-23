import React, { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import './index.css'

const SelectSecond = ({ data, setFileType }) => {
  const { name, options } = data

  const defaultDataInputValue = options[0] ? options[0] : options.name
  const [dataInput, setDataInput] = useState(defaultDataInputValue)
  const [open, setOpen] = useState(false)

  if (options.length > 0) {
    setFileType(dataInput)
  }

  const getListOptions = () => {
    if (options[0]) {
      return options.map(el => {
        return (
          <li
            className="select__option"
            key={el}
            onClick={() => {
              setDataInput(el)
              setOpen(false)
            }}
            >
            {el}
          </li>
        )
      })
    } else {
      return null
    }
  }

  return (
    <OutsideClickHandler onOutsideClick={() => setOpen()}>
      <div className="select">
        <span>{name}</span>

        <div className={`select__box-wrapper ${options[0] ? '' : 'with-no-icons'}`}>
          <div className="select__box">
            <div className={`select__input ${open && options[0] ? 'is-opened' : ''}`}>
              <input
                className="select__search"
                type="search"
                name="search"
                id=""
                readOnly
                autoComplete="false"
                placeholder={dataInput}
                onClick={() => setOpen(!open)}
              />
            </div>
          </div>

          <div className={`select__dropdown ${open && options[0] ? 'is-opened' : ''}`}>
            <ul className="select__list">{getListOptions()}</ul>
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  )
}

export default SelectSecond
