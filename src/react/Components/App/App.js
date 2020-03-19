import React from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { Store } from '../../Redux/Stores/Store'
import Content from '../Content'
import Authorization from '../../Widgets/Authorization'
import ResetPass from '../../Widgets/ResetPass'
import SelectArm from '../../Widgets/SelectArm'
import ErrorBoundry from '../ErrorBoundry'
import Popup from '../Popup'
import { setCurrentUrl, setCurrentModule } from '../../Redux/Actions/SystemData'
import './index.css'

const App = ({
  popupData = {},
  authStatus = false,
  currentUrl = '',
  automated_workplaces = [],
  currentRole = '',
  currentArm = '',
  menuItems = []
}) => {
  Store.subscribe(() => sessionStorage.setItem('state', JSON.stringify(Store.getState())))

  setCurrentUrl(useLocation().pathname)

  if (menuItems.length > 0) {
    const currentModule = menuItems.filter(item => item.finalUrl === currentUrl)[0]
    setCurrentModule(currentModule.acronim)
  }

  return (
    <div className="app">
      {authStatus ? <Redirect to="/select-arm" /> : <Redirect to="/" />}
      {automated_workplaces.length > 0 && currentRole && currentArm ? (
        <Redirect to="/main" />
      ) : null}
      {currentUrl !== '/' && currentUrl !== '/select-arm' && authStatus ? (
        <Redirect to={currentUrl} />
      ) : null}
      <Route exact path="/" component={Authorization} />
      <Route exact path="/reset-pass" component={ResetPass} />
      <Route exact path="/select-arm" component={SelectArm} />
      <Route
        path="/main"
        render={() => (
          <ErrorBoundry>
            <Content />
          </ErrorBoundry>
        )}
      />
      {popupData.popupStatus ? (
        <ErrorBoundry>
          <Popup />
        </ErrorBoundry>
      ) : null}
    </div>
  )
}

const mapStateToProps = ({ systemData, userData, armData }) => {
  if (systemData && userData && armData) {
    return {
      authStatus: systemData.authStatus,
      currentUrl: systemData.currentUrl,
      currentRole: systemData.currentRole,
      currentArm: systemData.currentArm,
      automated_workplaces: userData.automated_workplaces,
      popupData: systemData.popupData,
      menuItems: armData.menuItems
    }
  }
  return null
}

export default connect(mapStateToProps)(App)
