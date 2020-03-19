import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import DoubleBarchart from '../../Components/DoubleBarchart'
import { Store } from '../../Redux/Stores/Store'
import './index.css'

const acronim = () => {
  const curArm = Store.getState().systemData.currentArm

  switch (curArm) {
    case 'director':
      return 'widget_objects_connected_main_services_count_director_graph'
    default:
      break
  }
}

const ConnectedServices = ({ identificator, curWidgetData, }) => {
  const [_data] = useState(curWidgetData.data)
  const [params, setParams] = useState({ width: 0, height: 0, })
  const elemRef = useRef(null)

  useEffect(() => {
    setParams({
      width: document.getElementById(`${identificator}`).clientWidth,
      height: document.getElementById(`${identificator}`).clientHeight,
    })
  }, [identificator])

  return (
    <React.Fragment>
      <svg width="100%" height="100%" ref={elemRef}>
        {_data ? DoubleBarchart(_data, elemRef.current, params) : null}
      </svg>
    </React.Fragment>
  )
}

const mapStateToProps = ({ widgetData, }) => ({ curWidgetData: widgetData[acronim()], })

export default connect(mapStateToProps)(ConnectedServices)
