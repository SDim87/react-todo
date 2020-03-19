import React, { useState } from 'react'
import { ReactComponent as Admin } from '../../assets/arm_administrator.svg'
import { ReactComponent as Director } from '../../assets/arm_director.svg'
import { ReactComponent as Brigadir } from '../../assets/arm_brigadir.svg'
import { ReactComponent as Operator } from '../../assets/arm_operator.svg'
import './index.css'

const ArmFirst = props => {
  const [activeArm, setActiveArm] = useState()
  const { acronim, name } = props

  const setSvgIcon = () => {
    switch (acronim) {
      case 'administrator':
        return <Admin className="arm__img" />
      case 'director':
        return <Director className="arm__img" />
      case 'brigadir':
        return <Brigadir className="arm__img" />
      case 'operator':
        return <Operator className="arm__img" />
      default:
        break
    }
  }

  return (
    <article
      className={`arm ${activeArm ? 'is-active' : ''}`}
      onClick={() => setActiveArm(!activeArm)}
      aria-label={`Арм ${name}`}
    >
      {setSvgIcon()}

      <div className="arm__descr">{name}</div>
    </article>
  )
}

export default ArmFirst
