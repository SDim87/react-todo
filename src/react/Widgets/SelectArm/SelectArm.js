import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Arm from '../../Components/Arm'
import ArmClass from '../../Controller/Arm'
import { rememberRole } from './controller'
import actions from '../../Redux/Actions'
import './index.css'

const { setCurrentArm, setCurrentRole, } = actions

const SelectArm = ({ automated_workplaces = [], }) => {
  const [checked] = useState(true)
  const [rememberArm, setRememberArm] = useState('')

  useEffect(() => {
    if (automated_workplaces.length === 1) {
      const { acronim, } = automated_workplaces[0]
      setRememberArm(acronim)
      setCurrentRole(acronim)
      setCurrentArm(acronim)
    }
    // eslint-disable-next-line
  }, [])

  // get arms from redux
  const arms = automated_workplaces.map(el => {
    // create new object ARM
    const newArmItem = new ArmClass(el)
    // desctructer obj newArmItem
    const { acronim, name, } = newArmItem
    // set new configuration to the ARM-object
    const newArmItemConfiguration = {
      id: acronim,
      someText: name,
      name: 'select-arm',
      type: 'radio',
      placeholder: acronim,
      action: event => setRememberArm(event.target.placeholder),
    }
    // return component Arm with configuration
    return <Arm key={newArmItem.id} currentArm={el} rememberArm={newArmItemConfiguration} />
  })

  const checkArm = () => {
    if (rememberArm) {
      return (
        <Link
          onClick={() => rememberRole(rememberArm, checked)}
          to="/main"
          className="selectArm__button main-button"
          >
          Ок
        </Link>
      )
    }
    return null
  }

  return (
    <div className="selectArm">
      <div className="selectArm__window">
        <div className="selectArm__logo">
          <img
            className="selectArm__logo-src"
            src="../../assets/images/logo_horizontal.svg"
            alt=""
          />
        </div>

        <h1 className="selectArm__title">Здравствуйте!</h1>
        <p className="selectArm__text">
          Для вас доступно несколько <br /> автоматизированных рабочих мест (АРМов).
        </p>
        <p className="selectArm__text">Выберите основной АРМ для работы.</p>
        <div className="selectArm__list">{arms}</div>

        {checkArm()}

        <p className="selectArm__text selectArm__text_small">
          Вы в любое время можете изменить решение и в личных настройках выбрать другой АРМ
        </p>
      </div>
    </div>
  )
}

const mapStateToProps = ({ userData, }) => {
  if (userData) {
    return { automated_workplaces: userData.automated_workplaces, }
  }
}

export default connect(mapStateToProps)(SelectArm)
