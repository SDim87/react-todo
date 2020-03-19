import React from 'react'
import Input from '../Input'
import Label from '../Label'
import './index.css'

const InputAndLabel = props => {
  const { ...parentProps } = props.props
  const { id } = parentProps

  return (
    <div className={`input input_${id}`}>
      <Input className={`input__src`} props={parentProps} />
      <label className="input__icon material-icons">check_box_outline_blank</label>
      <Label className={`input__label`} props={parentProps} />
    </div>
  )
}

export default InputAndLabel
