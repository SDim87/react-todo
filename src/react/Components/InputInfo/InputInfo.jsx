import React, { useState, useEffect } from 'react'
import './index.css'

const InputInfo = props => {
  const [isUsed, setIsUsed] = useState(false)
  const [value, setValue] = useState('')

  const { dataEl = [], labelText } = props

  useEffect(() => {
    if (dataEl.value !== undefined) {
      setValue(dataEl.value)
      setIsUsed(true)
    } else {
      return
    }
  }, [dataEl])

  const setDataValue = () => {
    if (dataEl.value !== undefined && dataEl) {
      return dataEl.value
    }
  }

  return (
    <div className={`input-info ${isUsed ? 'is-used' : ''}`}>
      <input
        className="input-info__field"
        type="text"
        autoComplete="false"
        onChange={evt => {
          if (dataEl['value'] !== undefined) {
            setValue(dataEl.value)
          } else {
            setValue(evt.target.value)
          }
        }}
        onFocus={() => setIsUsed(true)}
        onBlur={() => {
          if (value.length === 0) {
            setIsUsed(false)
          }
        }}
        value={setDataValue()}
      />
      <label className="input-info__label">
        {dataEl.label !== undefined ? dataEl.label : labelText}
      </label>
    </div>
  )
}

export default InputInfo
