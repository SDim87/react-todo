import React, { useState, useEffect } from 'react'
import widgetContentFunction from '../../Controller/WidgetContent'
import Spinner from '../../Components/Spinner'

const ConvertAppIntoServices = ({ text }) => {
  const [requestResult, setRequestResult] = useState('')

  useEffect(() => {
    widgetContentFunction('widget_converting_applications_into_services').then(res =>
      setRequestResult(res),
    )
  }, [])

  if (requestResult) {
    const { content } = requestResult.data.widget_converting_applications_into_services
    const { extra_block } = content
    return (
      <div className="smallWidget">
        <p className="smallWidget__title">{text}</p>
        <p className="smallWidget__text smallWidget__text_big smallWidget__text_yellow">
          {content.current_value} %
        </p>
        <div className={`small-widget__plashka small-widget__${extra_block.color}`}>
          {extra_block.value}
        </div>
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default ConvertAppIntoServices
