import React, { useEffect } from 'react'
import { connect } from 'react-redux'
// eslint-disable-next-line
import { ButtonFirst, ButtonSecond, ButtonThird } from '../Button/Button'
import Spinner from '../Spinner'
import { options, setDatePeriod, currentMonthByPeriod, setCurrentPeriod } from './controller'
import InputDateSelect from '../InputDateSelect'
import './index.css'

const SelectMonth = ({ widgetData, systemData }) => {
  const optionsGenerate = options().map(el => {
    const date = new Date()
    const currentYear = date.getFullYear()
    const currentMonth = date.getMonth()
    date.setMonth(el)
    const month = date.toLocaleString('ru-RU', { month: 'long' })
    const setYear = currentMonth < el ? currentYear - 1 : currentYear
    return (
      <option key={month} value={el}>{`${`${month[0].toUpperCase()
        + month.slice(1)
        } - ${
        setYear}`}`}</option>
    )
  })

  useEffect(() => {
    setDatePeriod(
      widgetData.globalDates
        ? new Date(widgetData.globalDates.period_begin).getMonth()
        : new Date().getMonth(),
    )
    // eslint-disable-next-line
  }, [])

  const content = () => {
    const periodBtn = <ButtonSecond onClick={() => setCurrentPeriod()}>Текущий период</ButtonSecond>

    const dataSelect = (
      <div className="select-month__btn-sim">
        <InputDateSelect type={'global'} />
      </div>
    )

    const filterSelect = (
      <ButtonSecond onClick={() => console.log('filterSelect')}>Выбор фильтра</ButtonSecond>
    )

    if (systemData.currentArm === 'director') {
      return (
        <div className="select-month__wrapper">
          {dataSelect}
          {periodBtn}
          {filterSelect}
        </div>
      )
    }
    if (systemData.currentArm === 'brigadir') {
      return (
        <div className="select-month__wrapper">
          {dataSelect}
          {periodBtn}
          {filterSelect}
        </div>
      )
    }
    if (systemData.currentArm === 'operator') {
      return (
        <React.Fragment>
          <select
            className="month-select"
            value={currentMonthByPeriod(
              widgetData.globalDates ? widgetData.globalDates.period_begin : null,
            )}
            onChange={event => setDatePeriod(event.target.value)}
          >
            {optionsGenerate}
          </select>
          {periodBtn}
        </React.Fragment>
      )
    }
  }

  return widgetData.globalDates ? content() : <Spinner />
}

const mapStateToProps = ({ widgetData, systemData }) => {
  if (widgetData) {
    return {
      widgetData,
      systemData,
    }
  }
}

export default connect(mapStateToProps)(SelectMonth)
