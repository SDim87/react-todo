import React from 'react'
import { connect } from 'react-redux'

import actions from '../../Redux/Actions'

import './index.css'

const { setPopupData, } = actions

const Popup = ({ popupData, }) => {
  const close = () => {
    setPopupData({ popupStatus: false, })
  }

  const messageArr = () => {
    if (typeof popupData.popupMessage === 'string') {
      return <p>{popupData.popupMessage}</p>
    }
    const newArr = []
    for (const key in popupData.popupMessage) {
      newArr.push(<p key={key}>{popupData.popupMessage[key][0]}</p>)
    }
    return newArr
  }

  return (
    <div className="popup">
      <div className="popup__window">
        <div className="popup__header">
          <div className="popup__title">{popupData.popupHeader}</div>
          <button className="popup__button popup__button_close" onClick={() => close()}></button>
        </div>
        <div className="popup__content">{messageArr()}</div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ systemData, }) => {
  if (systemData && systemData.popupData) {
    return { popupData: systemData.popupData, }
  }
}

export default connect(mapStateToProps)(Popup)
