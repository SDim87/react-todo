import React from 'react'
import ErrorBoundry from '../ErrorBoundry'

function Input(props) {
  const { id, name, value, placeholder = '', action, type, checked, } = props.props
  return (
    <React.Fragment>
      <ErrorBoundry>
        <input
          className={'input__src'}
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={event => action(event)}
          checked={checked}
        />
      </ErrorBoundry>
    </React.Fragment>
  )
}

export default Input
