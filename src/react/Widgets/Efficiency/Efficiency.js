import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import { objToArr } from '../../Controller/ObjectToArr'
import SpeedometerChart from '../../Components/SpeedometerChart'
import { Store } from '../../Redux/Stores/Store'
import './index.css'

const acronim = () => {
  const curArm = Store.getState().systemData.currentArm

  switch (curArm) {
    case 'director':
      return 'widget_efficiency_director'
    default:
      break
  }
}

const Efficiency = ({ identificator, curWidgetData, }) => {
  const [_data] = useState(objToArr(curWidgetData.data))
  const [params, setParams] = useState({ width: 0, height: 0, })
  const firstSvg = useRef(null)
  const secondSvg = useRef(null)
  const thirdSvg = useRef(null)

  const settings = {
    width: `${params.width / 3.3}px`,
    height: `${params.height}px`,
  }

  useEffect(() => {
    const { clientWidth, } = document.getElementById(`${identificator}`)
    const { clientHeight, } = document.getElementById(`${identificator}`)

    setParams({
      width: clientWidth || 1,
      height: clientHeight || 1,
    })
  }, [identificator])

  return (
    <React.Fragment>
      <div {...settings} ref={firstSvg}>
        {_data !== null ? SpeedometerChart(_data[0], firstSvg.current, params) : null}
      </div>
      <div {...settings} ref={secondSvg}>
        {_data !== null ? SpeedometerChart(_data[1], secondSvg.current, params) : null}
      </div>
      <div {...settings} ref={thirdSvg}>
        {_data !== null ? SpeedometerChart(_data[2], thirdSvg.current, params) : null}
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = ({ widgetData, }) => ({ curWidgetData: widgetData[acronim()], })

export default connect(mapStateToProps)(Efficiency)
