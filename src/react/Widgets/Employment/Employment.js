import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { makeChart } from './chart'
import { Store } from '../../Redux/Stores/Store'
import './index.css'

const acronim = () => {
  const curArm = Store.getState().systemData.currentArm
  switch (curArm) {
    case 'director':
      return 'widget_employment_director'
    default:
      break
  }
}

const Employment = ({ identificator, curWidgetData, }) => {
  const [_data] = useState(curWidgetData.data)
  const [_width, _setWidth] = useState(null)
  const [_height, _setHeight] = useState(null)
  const _refElement = useRef(null)

  useEffect(() => {
    _setWidth(document.getElementById(`${identificator}`).clientWidth)
    _setHeight(document.getElementById(`${identificator}`).clientHeight)
  }, [identificator])

  const test = () => {
    if (_data) makeChart(_data, _refElement.current, _width, _height)
  }

  return (
    <svg width="100%" height="100%" ref={_refElement}>
      {test()}
    </svg>
  )
}

const mapStateToProps = ({ widgetData, }) => ({ curWidgetData: widgetData[acronim()], })
export default connect(mapStateToProps)(Employment)
