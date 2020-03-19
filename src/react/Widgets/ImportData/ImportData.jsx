import React, { useState } from 'react'
import { connect } from 'react-redux'
import ImportDataItem from '../../Components/ImportDataItem'
import './index.css'

const ImportData = ({ identificator, widgets }) => {
  const currentWidget = widgets.filter(el => el.clientName === identificator)[0]
  const { data, acronim } = currentWidget
  const [currentTab, setCurrentTab] = useState(data.tabs[0])

  const generateTabs = () => {
    return data.tabs.map(el => {
      return (
        <div key={el} className='tabs-button__wrapper'>
          <button className={`tabs-button__item ${el === currentTab ? 'tabs-button__item-active' : ''}`} value={el} onClick={(event) => setCurrentTab(event.target.value)}>
            {el}
          </button>
        </div>
      )
    })
  }

  return (
    <React.Fragment>
      <div className='import-data__tabs'>
        {generateTabs()}
      </div>

      <div className='import-data__wrapper'>
        <ImportDataItem currentTab={currentTab} select={true} identificator={acronim} />
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = ({ armData }) => {
  return {
    widgets: armData.moduleData.widgets
  }
}

export default connect(mapStateToProps)(ImportData)
