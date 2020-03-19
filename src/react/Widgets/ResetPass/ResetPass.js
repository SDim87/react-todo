import React, { useState } from 'react'
import Input from '../../Components/Input'

const ResetPass = () => {
  const [email, setEmail] = useState('')
  const [newPass, setNewPass] = useState('')
  const [newPassConf, setNewPassConf] = useState('')
  const [secretCode, setSecretCode] = useState('')

  const resetpassEmailConfiguration = {
    id: 'email',
    name: 'email',
    value: email,
    placeholder: 'Введите свой Логин',
    type: 'text',
    action: event => {
      setEmail(event.target.value)
    },
  }

  const resetpassNewpassConfiguration = {
    id: 'newPass',
    name: 'New Password',
    value: newPass,
    placeholder: 'Новый пароль',
    type: 'password',
    action: event => {
      setNewPass(event.target.value)
    },
  }

  const resetpassNewpassConfirmConfiguration = {
    id: 'newPassConf',
    name: 'New Password Confirmed',
    value: newPassConf,
    placeholder: 'Повторить пароль',
    type: 'password',
    action: event => {
      setNewPassConf(event.target.value)
    },
  }

  const secretCodeConfiguration = {
    id: 'secretCode',
    name: 'Secret Code',
    value: secretCode,
    placeholder: 'Секретный код',
    type: 'text',
    action: event => {
      setSecretCode(event.target.value)
    },
  }

  return (
    <div className="resetpass">
      <form action="">
        <div>
          <Input props={resetpassEmailConfiguration} />
          <button type="submit" className="main-button">
            Отправить
          </button>
        </div>

        <div>
          <p className="alert-message">Проверьте, пожалуйста, Вашу почту</p>
          <p className="main-text">Мы отправили Вам письмо с кодом на ваш email: %EMAIL%</p>
          <Input props={resetpassNewpassConfiguration} />
          <Input props={resetpassNewpassConfirmConfiguration} />
          <Input props={secretCodeConfiguration} />
          <button type="submit" className="main-button">
            Отправить
          </button>
        </div>
      </form>
    </div>
  )
}

export default ResetPass
