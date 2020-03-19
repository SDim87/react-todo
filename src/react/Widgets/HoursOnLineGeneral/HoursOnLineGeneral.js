import React, { useState, useEffect } from 'react'
import widgetContentFunction from '../../Controller/WidgetContent'
import Spinner from '../../Components/Spinner'

const HoursOnLineGeneral = ({ text, }) => {
  const [requestResult, setRequestResult] = useState('')

  useEffect(() => {
    widgetContentFunction('widget_working_hours_on_line_general').then(res => setRequestResult(res))
  }, [])

  if (requestResult) {
    const { content, } = requestResult.data.widget_working_hours_on_line_general
    const { extra_block, } = content
    return (
      <div className="smallWidget">
        <p className="smallWidget__title">{text}</p>
        <p className="smallWidget__text smallWidget__text_big smallWidget__text_yellow">
          {content.current_value}
        </p>
        <div className={`small-widget__plashka small-widget__${extra_block.color}`}>
          {extra_block.value}
        </div>
      </div>
    )
  }
  return <Spinner />
}

export default HoursOnLineGeneral
