import React from 'react'
import InputAndLabel from '../InputAndLabel'
import actions from '../../Redux/Actions'

const { setCurrentArm, } = actions

const Arm = props => {
  const { description, } = props.currentArm
  const { rememberArm, } = props
  const image = require(`../../assets/arm_${rememberArm.id}.svg`)

  return (
    <label
      onClick={() => setCurrentArm(rememberArm.placeholder)}
      className={`selectArm__item selectArm__item_${rememberArm.id}`}
      htmlFor={rememberArm.id}
      >
      <img className="selectArm__img" src={image} alt="#" />

      <InputAndLabel props={rememberArm} />
      <div className="selectArm__description">{description}</div>
    </label>
  )
}

export default Arm
