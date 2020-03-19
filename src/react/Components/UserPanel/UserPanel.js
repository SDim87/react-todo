import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import RevenueForecastPanel from '../RevenueForecastPanel/RevenueForecastPanel'
import { getAlerts, templateAlerts } from './controller'
import Spinner from '../Spinner'
import './index.css'

const avatar = require('../../assets/avatar_404.svg')

const UserPanel = ({
  first_name,
  middle_name,
  login,
  mobile_work,
  mobile_tel,
  email,
  automated_workplaces,
  currentRole,
  currentArm
}) => {
  const [alertsArr, setAlertsArr] = useState([])
  const currentArmName = automated_workplaces.filter(arm => arm.acronim === currentArm)[0].name

  useEffect(() => {
    getAlerts().then(res => setAlertsArr(res.data))
  }, [])

  const generateAlerts = () => {
    if (currentRole) {
      return alertsArr.map((alert, i) => (
        <div key={i} className={`userPanel__alarms-item ${templateAlerts(alert.template_id)}`}>
          <div className="userPanel__alarms-title">{alert.title}</div>
          <div className="userPanel__alarms-text">{alert.message}</div>

          <div className="userPanel__alarms-bottom">
            <div className="userPanel__alarms-date">{alert.date}</div>
            <div className="userPanel__alarms-time">Отправлено в {alert.time}</div>
          </div>
        </div>
      ))
    }
    return null
  }

  return (
    <div className="app__userPanel userPanel">
      <div className="userPanel__profile">
        <div className="userPanel__wrapper">
          <div className="userPanel__icon userPanel__icon_notifications">
            <i className="material-icons">notifications</i>
          </div>

          <Link to="/main/personal" className="userPanel__avatar">
            <img className="userPanel__avatar-src" src={avatar} alt="#" />
          </Link>

          <div className="userPanel__icon userPanel__icon_calendar">
            <i className="material-icons">calendar_today</i>
          </div>
        </div>

        <div className="userPanel__name">
          {first_name} {middle_name}
        </div>
        <div className="userPanel__position">{currentArmName}</div>
      </div>

      <div className="userPanel__content">
        <section className="userPanel__section">
          <RevenueForecastPanel />
        </section>

        <section className="userPanel__section">
          <div className="userPanel__title">Личная информация</div>

          <div className="userPanel__information">
            <div className="userPanel__text">Логин: {login}</div>
            {email ? <div className="userPanel__text">Email: {email}</div> : null}
            {mobile_tel ? <div className="userPanel__text">Тел: {mobile_tel}</div> : null}
            {mobile_work ? <div className="userPanel__text">Рабочий тел: {mobile_work}</div> : null}
            {/* <div className="userPanel__drop">Показать подробную информацию</div> */}
          </div>
        </section>

        <section className="userPanel__section">
          <div className="userPanel__buttons">
            <button className="userPanel__button userPanel__button_red">Задания</button>
            <button className="userPanel__button userPanel__button_blue">Чат</button>
          </div>
        </section>

        <section className="userPanel__section">
          {currentArm ? (
            alertsArr.length > 0 ? (
              <React.Fragment>
                <div className="userPanel__title">Обратите внимание</div>
                <div className="userPanel__alarms">{generateAlerts()}</div>
              </React.Fragment>
            ) : (
              <Spinner />
            )
          ) : null}
        </section>
      </div>
    </div>
  )
}

const mapStateToProps = ({ userData, systemData }) => {
  if (userData && systemData) {
    return {
      first_name: userData.first_name,
      middle_name: userData.middle_name,
      login: userData.login,
      roles: userData.roles,
      mobile_work: userData.mobile_work,
      mobile_tel: userData.mobile_tel,
      email: userData.email,
      automated_workplaces: userData.automated_workplaces,
      currentRole: systemData.currentRole,
      currentArm: systemData.currentArm
    }
  }
}

export default connect(mapStateToProps)(UserPanel)
