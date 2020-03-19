import React, { useState, useEffect, useRef } from 'react'
import * as Controller from './controller'
import { makeChart } from './barChart'
import './index.css'

const SalesOfServices = props => {
  const [_selectArm] = useState(JSON.parse(sessionStorage.getItem('state')).selectedArm)
  const [_wdgetID] = useState(props.identificator)
  const [_data, _setData] = useState(null)
  const [_width, _setWidth] = useState(null)
  const [_height, _setHeight] = useState(null)
  const [_filterHeight, _setFilterHeight] = useState(null)
  const [_chartHeight, _setChartHeight] = useState(_height - _filterHeight)
  const _refElement = useRef(null)

  useEffect(() => {
    _setWidth(document.getElementById(`${_wdgetID}`).clientWidth)
    _setHeight(document.getElementById(`${_wdgetID}`).clientHeight)
    _setFilterHeight(document.getElementById('widget__filter').clientHeight)
  }, [_wdgetID])

  useEffect(() => {
    Controller.getDataFromAPI('widget_sales_of_services', _setData)
  }, [])

  useEffect(() => {
    _setChartHeight(_height - _filterHeight)
  }, [_height, _filterHeight])

  const showNav = () => {
    if (_selectArm === 'operator' || _selectArm === 'brigadir') {
      return (
        <nav className="sos__nav">
          <button className="sos__btn sos__prev">
            <div className="sos__arrow sos__arrow_prev"></div>
          </button>
          <button className="sos__btn sos__next">
            <div className="sos__arrow sos__arrow_next"></div>
          </button>
        </nav>
      )
    }
  }

  const showFilter = () => (
    <div id="widget__filter" className="widget__filter">
      <div className="widget__filter-list">
        <div className="select__wrapper">
          <select
            onChange={event => console.log(event.target.value)}
            className="widget__select"
            name=""
            id=""
          >
            <option value="all-services">Все услуги</option>
            <option value="main-services">Основные услуги</option>
            <option value="extra-services">Дополнительные услуги</option>
          </select>
        </div>
        <div className="select__wrapper">
          <select className="widget__select" name="" id="">
            <option value="">ШПД</option>
            <option value="">IP-TV</option>
            <option value="">Телефония</option>
          </select>
        </div>
      </div>
      <p className="widget__date-interval">1 дек - 15 дек 2019</p>
    </div>
  )

  // eslint-disable-next-line
  const showData = () => {
    return (
      <ul>
        <li>this ARM is : {_selectArm}</li>
        <li>this widget is : {_wdgetID}</li>
        <li>this width is : {_width}</li>
        <li>this height is : {_height}</li>
        <li>this data is : {!_data ? <span>loading</span> : <span>ready</span>}</li>
      </ul>
    )
  }

  const test = () => {
    if (_data && _chartHeight) {
      return makeChart(_data.slice(0, 7), _refElement.current, _width, _chartHeight)
    }
  }

  return (
    <React.Fragment>
      {showFilter()}
      {showNav()}
      {/* {showData()} */}
      <svg width={'100%'} height={`${_chartHeight}px`} ref={_refElement}>
        {test()}
      </svg>
    </React.Fragment>
  )
}

export default SalesOfServices
