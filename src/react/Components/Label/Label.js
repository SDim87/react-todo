import React from 'react'

const Label = props => {
  const { id, name, type, someText, } = props.props

  return (
    <React.Fragment>
      <label className={'input__text'} htmlFor={id}>
        {type === 'radio' ? someText : name}
        {/* {name} */}
      </label>
    </React.Fragment>
  )
}

export default Label
