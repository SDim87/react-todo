import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import { Responsive, WidthProvider } from 'react-grid-layout'
import Aside from '../Aside'
import Header from '../Header'
import Footer from '../Footer'
import Widget from '../Widget'
import Spinner from '../Spinner'
import UserPanel from '../UserPanel'
import ErrorBoundry from '../ErrorBoundry'
import SmallWidgetsContainer from '../../Widgets/SmallWidgetsContainer'
import FilterResults from '../FilterResults'
import { getData, getModuleContent } from './controller'
import ContentWidget from '../ContentWidget'
import actions from '../../Redux/Actions'
import './index.css'

const ResponsiveGridLayout = WidthProvider(Responsive)

const configuration = {
  width: 1865,
  rowHeight: 80,
  draggableHandle: '.widget__header_draggable',
  draggableCancel: '.widget__submenu, .calendar, .widget__header-col',
  compactType: 'vertical',
  margin: [10, 10],
  preventCollision: false,
  mounted: false,
  cols: {
    lg: 12,
    md: 12,
    sm: 6,
    xs: 6,
    xxs: 6,
  },
  breakpoints: {
    lg: 1865,
    md: 996,
    sm: 768,
    xs: 480,
    xxs: 0,
  },
}

const { setWidgetData } = actions

const Content = ({ widgets, currentUrl, globalDates, currentArm, menuItems = [] }) => {
  // Получение модулей и виджетов
  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    const currentModuleData = menuItems.filter(item => item.finalUrl === currentUrl)[0]

    if (currentModuleData && currentModuleData.acronim) {
      getModuleContent(currentModuleData, menuItems)
    }
  }, [menuItems, currentUrl])

  const widgetsDataFunction = widgetsArr => {
    if (widgetsArr.filter(el => el.type === 'graphic').length > 0) {
      return (
        <ResponsiveGridLayout className="layout" {...configuration}>
          {widgetsArr
            .filter(el => el.type === 'graphic')
            .map(({ clientName, coordinates, acronim }) => {
              setWidgetData({
                widgetName: acronim,
                filtersByDates: { ...globalDates },
              })
              return (
                <div key={clientName} data-grid={coordinates} className="calendar-zindex">
                  <ErrorBoundry>
                    <Widget clientName={clientName} />
                  </ErrorBoundry>
                </div>
              )
            })}
        </ResponsiveGridLayout>
      )
    }

    if (widgetsArr.filter(el => el.type === 'content').length > 0) {
      return widgetsArr
        .filter(el => el.type === 'content')
        .map(({ clientName, acronim }) => {
          setWidgetData({
            widgetName: acronim,
            filtersByDates: { ...globalDates },
          })
          return (
            <ErrorBoundry key={acronim}>
              <ContentWidget clientName={clientName} />
            </ErrorBoundry>
          )
        })
    }
  }

  const component = (
    <React.Fragment>
      <ErrorBoundry>
        <Aside />

        <div className="app__content">
          <main className="app__main">
            <div className="content">
              <Header />
              <Route
                exact
                path="/main"
                render={() => (
                  <div className="container">
                    <div className="widget widget_static">
                      <ErrorBoundry>
                        <SmallWidgetsContainer className="calendar-zindex" />
                      </ErrorBoundry>
                    </div>
                  </div>
                )}
              />
              <Route exact path={`${currentUrl}`} render={() => widgetsDataFunction(widgets)} />
              {/* <Route exact path='/main/personal' render={() => <Personal />} /> */}
            </div>
          </main>
          <UserPanel />
          {currentUrl === '/main/reports' ? <FilterResults /> : null}
          <Footer />
        </div>
      </ErrorBoundry>
    </React.Fragment>
  )

  return widgets ? component : <Spinner />
}

const mapStateToProps = ({ armData, systemData, widgetData }) => {
  if (armData.moduleData) {
    return {
      widgets: armData.moduleData.widgets,
      currentUrl: systemData.currentUrl,
      globalDates: widgetData.globalDates,
      currentArm: systemData.currentArm,
      currentModule: systemData.currentModule,
      menuItems: armData.menuItems,
    }
  }
}

export default connect(mapStateToProps)(Content)
