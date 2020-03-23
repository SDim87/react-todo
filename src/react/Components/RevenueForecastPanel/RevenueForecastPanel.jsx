import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { revenueForecastPanelLabel, sumOfRevenueForecastDetails } from './controller'
import './index.css'

const RevenueForecastPanel = ({ widgetData, currentArm }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [quantity, setQuantity] = useState([])

  useEffect(() => {
    if (widgetData.widget_revenue_forecast) {
      const curWidget = widgetData.widget_revenue_forecast.data
      if ((curWidget && curWidget.hours_payment) || (curWidget && curWidget.services_payment)) {
        const newQuantity = []
        newQuantity.push({
          name: revenueForecastPanelLabel('hours_payment'),
          value: curWidget.hours_payment,
        })
        newQuantity.push({
          name: revenueForecastPanelLabel('services_payment'),
          value: curWidget.services_payment,
        })
        setQuantity(newQuantity)
      }
    }
  }, [widgetData])

  const RevenueForecastDetail = quantity.map((el, i) => {
    return (
      <div className="revenue-forecast__dropdown" key={i}>
        {el.name} - {el.value}
      </div>
    )
  })

  const content = (
    <div className={`revenue-forecast__panel ${isVisible ? 'can-hover' : null}`}>
      <div className="userPanel__title">Прогноз дохода</div>

      <div className="revenue-forecast__panel-value">
        <div className="revenue-forecast__panel-value__wrapper">
          <div className="revenue-forecast__panel-value__switcher">
            <input
              type="checkbox"
              checked={isVisible}
              id="revenue-forecast-switcher"
              onChange={event => setIsVisible(event.target.checked)}
            />
            <label htmlFor="revenue-forecast-switcher" />
          </div>

          <div className="revenue-forecast__panel-value__">
            {isVisible ? sumOfRevenueForecastDetails(quantity) : '*****'}
          </div>
        </div>

        <div className="revenue-forecast__panel-value-detail">{RevenueForecastDetail}</div>
      </div>
    </div>
  )

  return quantity.length > 0 && currentArm === 'operator' ? content : null
}

const mapStateToProps = ({ widgetData, systemData }) => {
  return {
    widgetData: widgetData,
    currentArm: systemData.currentArm,
  }
}

export default connect(mapStateToProps)(RevenueForecastPanel)
