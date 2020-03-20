import React, { useState } from 'react'
import { authorization } from './controller'
import './index.css'

const Authorization = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const logo = require('../../../assets/svg/logo_full.svg')

  return (
    <div className="authorization">
      <div className="authorization__window">
        <div className="authorization__logotype logotype">
          <img src={logo} alt="#" />
        </div>

        <form
          className="authorization__form"
          action=""
          onSubmit={event => authorization(login, password, event)}
        >
          <div className="input input_default">
            <i className="input__icon material-icons">person</i>
            <input
              className="input__src"
              autoComplete="off"
              type="login"
              value={login}
              onChange={event => setLogin(event.target.value)}
            />
            <label className="input__placeholder">Логин</label>
          </div>

          <div className="input input_default">
            <i className="input__icon material-icons">lock</i>
            <input
              className="input__src"
              autoComplete="off"
              type="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
            <label className="input__placeholder">Пароль</label>
          </div>

          <div className="authorization__link" to="/reset-pass">
            Забыли пароль?
          </div>

          <button className="authorization__button" type="submit">
            Войти
          </button>
        </form>
      </div>
    </div>
  )
}

export default Authorization
