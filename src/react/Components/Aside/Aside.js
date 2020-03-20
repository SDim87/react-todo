import React, { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import OutsideClickHandler from 'react-outside-click-handler'

const Aside = ({ menuItems }) => {
  const logo = require('../../../assets/svg/logo.svg')
  const logoSmall = require('../../../assets/svg/logo_small.svg')

  // Состояние поведения панели, false по умолчанию (свернута)
  const [toggleAside, setToggleAside] = useState(false)

  // Состояние субмодулей
  const [submodules, setSubmodules] = useState({ isSubmodule: false, items: [] })

  // Функция для открытия субмодулей
  const openSubmodules = parentMenuItem => {
    const { submodules } = parentMenuItem

    setSubmodules({
      isSubmodule: true,
      items: submodules,
    })
  }

  // Функция для возвращение к первоначальному меню и закрытия субмодулей
  const back = () => setSubmodules({ ...submodules, isSubmodule: false })

  // Шаблон для кнопки назад
  const buttonBackTemplate = (
    <li className="aside__link aside__menu" onClick={() => back()}>
      <i className="aside__icon aside__icon_back material-icons" />
      <p className="aside__text">Назад</p>
    </li>
  )

  // Создание списка субмодулей
  const createSubmodules = items => {
    const array = []

    // Шаблон для ссылок в меню
    const template = (items, key) => {
      // Если элемент меню не является субмодулем, то возвращаем обычную ссылку
      const link = (
        <Link
          className="aside__link"
          to={() => items[key].finalUrl}
          onClick={() => setToggleAside(false)}
          >
          <i className={`aside__icon aside__icon_${items[key].acronim} material-icons`} />
          <p className="aside__text">{items[key].name}</p>
        </Link>
      )

      // Если элемент меню является ссылкой на субмодуль, то возвращаем div
      const div = (
        <div className="aside__link submodules" onClick={() => openSubmodules(items[key])}>
          <i className={`aside__icon aside__icon_${items[key].acronim} material-icons`} />
          <p className="aside__text">{items[key].name}</p>
        </div>
      )

      // Возвращаем основную часть шаблона
      return (
        <li className="aside__item" key={items[key].acronim}>
          {items[key].submodules ? div : link}
        </li>
      )
    }

    for (const key in items) {
      if (Object.prototype.hasOwnProperty.call(items, key)) {
        array.push(template(items, key))
      }
    }

    return array
  }

  return (
    <OutsideClickHandler onOutsideClick={() => setToggleAside(false)}>
      <aside className={`app__aside aside ${toggleAside ? 'aside_active' : ''}`}>
        <Link className="aside__brand" to="/main">
          <img className="aside__logo" src={logo} alt="logo" />
          <img className="aside__logo aside__logo_small" src={logoSmall} alt="logo" />
        </Link>

        <nav className="aside__nav">
          <ul className="aside__list">
            <li className="aside__link aside__menu" onClick={() => setToggleAside(!toggleAside)}>
              <i className="aside__icon aside__icon_menu material-icons" />
              <p className="aside__text">Свернуть</p>
            </li>

            {submodules.isSubmodule ? buttonBackTemplate : null}
            {submodules.isSubmodule
              ? createSubmodules(submodules.items)
              : createSubmodules(menuItems)}
          </ul>
        </nav>
      </aside>
    </OutsideClickHandler>
  )
}

const mapStateToProps = ({ armData }) => {
  if (armData) return { menuItems: armData.menuItems }
}

export default connect(mapStateToProps)(Aside)
