import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'

import SpeedometerChart from '../../Components/SpeedometerChart'
import { objToArr } from '../../Controller/ObjectToArr'

import './index.css'

const RevenueForecast = ({ identificator, widget_revenue_forecast, }) => {
  const [_data] = useState(objToArr(widget_revenue_forecast.data))
  const [params, setParams] = useState({ width: 0, height: 0, })
  const firstSvg = useRef(null)
  const secondSvg = useRef(null)
  const thirdSvg = useRef(null)

  useEffect(() => {
    setParams({
      width: document.getElementById(`${identificator}`).clientWidth,
      height: document.getElementById(`${identificator}`).clientHeight,
    })
  }, [identificator])

  return (
    <React.Fragment>
      <div width={`${params.width / 3.3}px`} height={`${params.height}px`} ref={firstSvg}>
        {_data != null ? SpeedometerChart(Object.values(_data)[0], firstSvg.current, params) : null}
      </div>

      <div width={`${params.width / 3.3}px`} height={`${params.height}px`} ref={secondSvg}>
        {_data != null
          ? SpeedometerChart(Object.values(_data)[1], secondSvg.current, params)
          : null}
      </div>

      <div width={`${params.width / 3.3}px`} height={`${params.height}px`} ref={thirdSvg}>
        {_data != null ? SpeedometerChart(Object.values(_data)[2], thirdSvg.current, params) : null}
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = ({ widgetData, }) => ({ widget_revenue_forecast: widgetData.widget_revenue_forecast, })

export default connect(mapStateToProps)(RevenueForecast)
