import React from 'react'
import { connect } from 'react-redux'
import Spinner from '../../Components/Spinner'
import actions from '../../Redux/Actions'
import './index.css'

const { setWidgetData } = actions

const SmallWidgetsContainer = ({ widgets, globalDates }) => {
  const widgetsArr = widgets
    .filter(el => el.type === 'brief')
    .sort((a, b) => (a.sort > b.sort ? 1 : -1))
    .map(({ clientName, acronim }) => {
      // Динамический импорт компонента
      const DynamicComponent = React.lazy(() => import(`../../Widgets/${clientName}`))

      setWidgetData({
        widgetName: acronim,
        filtersByDates: { ...globalDates },
      })

      return (
        <React.Suspense key={acronim} fallback={<Spinner />}>
          <DynamicComponent key={acronim} serverName={acronim} />
        </React.Suspense>
      )
    })

  return <React.Fragment>{widgetsArr}</React.Fragment>
}

const mapStateToProps = ({ armData, widgetData }) => {
  return {
    widgets: armData.moduleData.widgets,
    globalDates: widgetData.globalDates,
  }
}

export default connect(mapStateToProps)(SmallWidgetsContainer)
