import React from 'react'
import './index.css'

const WidgetSubmenu = ({ submenu, }) => {
  // Function for open submenu in widget
  const openSubmenu = e => {
    // const target = e.target.closest(".widget__submenu");

    const subMenu = document.querySelectorAll('.widget__submenu')

    document.addEventListener('click', e => {
      subMenu.forEach(element => {
        element.removeAttribute('open')
      })
    })
  }

  return (
    <details className="widget__submenu">
      <summary className="widget__button widget__button_context" onClick={e => openSubmenu(e)}>
        <i className="material-icons">more_vert</i>
      </summary>

      <nav className="widget__submenu-nav">
        <ul className="widget__submenu-list">
          <li className="widget__submenu-item">
            <a className="widget__submenu-link" href="/">
              Удалить виджет
            </a>
          </li>

          <li className="widget__submenu-item">
            <a className="widget__submenu-link" href="/">
              Заменить виджет
            </a>
          </li>

          <li className="widget__submenu-item">
            <a className="widget__submenu-link" href="/">
              Настроить виджет
            </a>
          </li>

          <li className="widget__submenu-item">
            <a className="widget__submenu-link" href="/">
              Переместить виджет
            </a>
          </li>
        </ul>
      </nav>
    </details>
  )
}

export default WidgetSubmenu
