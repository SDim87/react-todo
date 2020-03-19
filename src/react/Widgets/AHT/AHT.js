import React, { useState, useEffect, useRef } from 'react'
import * as Controller from './controller'
import SpeedometerChart from '../../Components/SpeedometerChart'
import './index.css'

const Employment = props => {
  // eslint-disable-next-line
  const [_selectArm] = useState(JSON.parse(sessionStorage.getItem('state'))['selectedArm'])
  const [_wdgetID] = useState(props.identificator)
  const [_data, _setData] = useState(null)
  const [params, setParams] = useState({ width: 0, height: 0, })
  const elemSvg = useRef(null)

  useEffect(() => {
    setParams({
      width: document.getElementById(`${_wdgetID}`).clientWidth,
      height: document.getElementById(`${_wdgetID}`).clientHeight,
    })

    Controller.getDataFromAPI('widget_aht', _setData)
  }, [_wdgetID])

  // const showData = () => {
  //   return(
  //     <ul className="dev-data">
  //       <li>this ARM is : {_selectArm}</li>
  //       <li>this widget is : {_wdgetID}</li>
  //       <li>this width is : {params.width}</li>
  //       <li>this height is : {params.height}</li>
  //       <li>this data is : {!_data?<span>loading</span>:<span>ready</span>}</li>
  //     </ul>
  //   )
  // }

  return (
    <svg
      width={`${params.width}px`}
      height={`${params.height}px`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      ref={elemSvg}
      >
      {_data != null ? SpeedometerChart(_data, elemSvg.current) : null}
    </svg>
  )
}

export default Employment
