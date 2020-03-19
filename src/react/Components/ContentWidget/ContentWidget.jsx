import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import Spinner from '../Spinner'
import actions from '../../Redux/Actions'
import widgetContentFunction from '../../Controller/WidgetContent'

import './index.css'

const { setWidgetData } = actions

const ContentWidget = ({ clientName, widgets, widgetData }) => {

  const [isLoad, setIsLoad] = useState(false)
  const [component, setComponent] = useState()
  const DynamicComponent = React.lazy(() => import(`../../Widgets/${clientName}`))
  const currentWidget = widgets.filter(el => el.clientName === clientName)[0]
  const { acronim, name } = currentWidget

  useEffect(() => {
    if (widgetData[acronim].filtersByDates) {
      setIsLoad(false)
      // const { addParams } = currentWidget
      const { period_begin = '2020-01-01', period_end = '2020-01-31' } = widgetData[acronim].filtersByDates
      widgetContentFunction(
        acronim,
        { period_begin, period_end },
      ).then(res => {
        const curWidget = widgetData[acronim]
        curWidget['data'] = { ...res.data[acronim].content }
        setWidgetData({
          ...curWidget
        })
      }).then(() => {
        setIsLoad(true)
      })
    }

    const nameArr = name.split(' ')

    const whiteHeader = nameArr.slice(0, 1).map(el => {
      return (
        <span key={el} className='content-widget__title-main'>
          {el}
        </span>
      )
    })

    const blueHeader = nameArr.slice(1, nameArr.length).map(el => {
      return (
        <span key={el} className='content-widget__title-description'>
          {el}
        </span>
      )
    })

    const content = 
      <div className="content-widget">
        <div className='content-widget__header'>
          <p className="content-widget__title">
            {/* add &-main and &-description */}
            {whiteHeader}
            {blueHeader}
          </p>
        </div>

        <div className="content-widget__content" id={`${clientName}`}>
          <React.Suspense fallback={<Spinner />}>
            <DynamicComponent
              identificator={clientName}
            />
          </React.Suspense>
        </div>
      </div>
      
      setComponent(content)
    // eslint-disable-next-line
  }, [widgetData[acronim].filtersByDates])


  return (widgetData[acronim] && widgetData[acronim].data && isLoad) ? component : <Spinner />
}

const mapStateToProps = ({ armData, widgetData }) => {
  return {
    widgets: armData.moduleData.widgets,
    widgetData: widgetData
  }
}

export default connect(mapStateToProps)(ContentWidget)
