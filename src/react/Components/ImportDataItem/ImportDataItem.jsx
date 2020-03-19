import React, { useState } from 'react'
import { connect } from 'react-redux'
import SelectSecond from '../SelectSecond'
import Spinner from '../Spinner'
import { sendFile } from '../../Controller/Request'
import actions from '../../Redux/Actions'
import '../Helpers/visually-hidden.css'
import './index.css'

const { setPopupData } = actions

const ImportDataItem = ({ widgetData, currentTab, select, identificator }) => {
  const [isLoad, setIsLoad] = useState(true)
  const [file, setFile] = useState()
  const [fileType, setFileType] = useState()

  let currentWidgetData = widgetData[identificator].data

  const renderBlockSelects = () => {
    if (select) {
      const newArr = []
      if (fileType === 'XLS') {
        currentWidgetData = { file_type: currentWidgetData.file_type }
      }
      for (let key in currentWidgetData) {
        newArr.push(
          <div key={key} className="import-data__selects">
            <SelectSecond
              setFileType={setFileType}
              data={currentWidgetData[key]}
            />
          </div>
        )
      }
      return newArr
    } else {
      return null
    }
  }

  const submit = (file) => {
    setIsLoad(false)

    sendFile(file)
      .then(() => {
        const message = 'Файл загружен на сервер, данные обновились'
        const popupData = {
          popupMessage: { success: [message] },
          popupStatus: true,
          popupHeader: 'Сообщение'
        }

        setPopupData(popupData)
      },
        rej => {
          const popupData = {
            popupMessage: rej.status.message,
            popupStatus: true,
            popupHeader: 'Ошибка'
          }
          setPopupData(popupData)
        })
      .then(() => {
        setIsLoad(true)
      })
      .then(() => setIsLoad(true))
  }

  const input =
    <React.Fragment>
      <input className='visually-hidden' id='file-csv' type='file' name='file' multiple accept='' onChange={(event) => setFile(event.target.files[0])} />
      <label className='import-data__load' htmlFor='file-csv'>Выбрать файл</label>
    </React.Fragment>

  const fileNameField = <span>{file ? file.name : null}</span>

  const buttons = <div className='import-data__box'>
    <button className='import-data__btn import-data__btn_first' onClick={() => submit(file)}>Загрузка</button>
    <button className='import-data__btn import-data__btn_second' onClick={() => setFile()}>Отмена</button>
  </div>

  const content = <div className='import-data'>
    <div className='import-data__head'>
      {`Импорт файла для загрузки "${currentTab}"`}
    </div>

    <div className="import-data__body">
      <div className='import-data__blocks-wrapper'>
        <div className="import-data__file">
          <span>Файл</span>
          {file ? fileNameField : input}
        </div>
        <div className='import-data__selects-wrapper'>

          {renderBlockSelects()}
        </div>
      </div>
      {file ? buttons : null}
    </div>
  </div>

  return isLoad ? content : <Spinner />
}

const mapStateToProps = ({ widgetData }) => {
  return {
    widgetData: widgetData
  }
}

export default connect(mapStateToProps)(ImportDataItem)