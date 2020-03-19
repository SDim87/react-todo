import React, { useState, useEffect } from 'react'
import widgetContentFunction from '../../Controller/WidgetContent'
import Spinner from '../../Components/Spinner'

const NumberOfApplications = ({ text, }) => {
  const [requestResult, setRequestResult] = useState('')

  useEffect(() => {
    widgetContentFunction('widget_number_of_applications').then(res => setRequestResult(res))
  }, [])

  if (requestResult) {
    const { content, } = requestResult.data.widget_number_of_applications
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

export default NumberOfApplications
