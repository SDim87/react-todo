import React from 'react'
import { connect } from 'react-redux'
import { userLogout } from './controller'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import SelectMonth from '../SelectMonth/SelectMonth'
import './index.css'

const Header = ({ currentUrl, currentArm, }) => (
  <div className="app__header">
    <div className="container">
      <div className="app__header-row">
        <div className="app__header-col">
          {currentUrl !== '/main' ? (
            <Breadcrumbs />
          ) : currentArm === 'administrator' ? null : (
            <SelectMonth />
          )}
        </div>

        <div className="app__header-col">
          <button className="button button_help" title="Помощь">
            <i className="material-icons">help</i>
          </button>

          <button className="button button_logout" title="Выход" onClick={() => userLogout()}>
            <i className="material-icons">exit_to_app</i>
          </button>
        </div>
      </div>
    </div>
  </div>
)

const mapStateToProps = ({ systemData, }) => ({
  currentUrl: systemData.currentUrl,
  currentArm: systemData.currentArm,
})

export default connect(mapStateToProps)(Header)
