import React, { useState, useEffect } from 'react'
import { reportDataRequest } from './controller'
// import { convertDate } from '../../Components/AppCalendar/controller'
import ReportIndicator from '../../Controller/ReportIndicator'
import Spinner from '../../Components/Spinner'
// eslint-disable-next-line
import { Store } from '../../Redux/Stores/Store'
import actions from '../../Redux/Actions'

import './index.css'

const { setHookFuncs } = actions

const itemList = [
  { id: 1, text: 'Исходящие проекты эффективности' },
  { id: 2, text: 'Сводный отчет по исходящим проектам' },
  { id: 3, text: 'Утилизация рабочих мест' },
  { id: 4, text: 'Исходящие проекты ПФ' },
]

// eslint-disable-next-line
const itemListImportPage = [
  { id: 1, text: 'Плановые показатели' },
  { id: 2, text: 'QM' },
  { id: 3, text: 'Факт по созданным заявкам' },
  { id: 4, text: 'Показатели по договорам' },
]

const Reports = () => {
  const [reportData, setReportData] = useState({})
  const [filters, setFilters] = useState()
  const [activeItem, setActiveItem] = useState(itemList[0].id)

  // TODO: при реализации с данными с этого начать
  // const newArrItems = itemList.map((el, i) => {
  //   return i === 0 ? {...el, active: true} : {...el, active: false}
  // })

  useEffect(() => {
    // const initialDateState = [
    //   new Date(),
    //   // new Date().getFullYear(), // get current year
    //   // new Date().getMonth() + 1, // get current month
    //   // 0
    //   new Date(),
    //   // new Date().getFullYear(), // get current year
    //   // new Date().getMonth() + 1, // get current month
    //   // 31
    // ]
    // setDate(initialDateState)
    // convertDate(initialDateState, setFilters, filters)
    reportDataRequest(setReportData, filters, reportData)
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    reportDataRequest(setReportData, filters, reportData)
    // constructor hook functions to redux
    setHookFuncs({
      hookFuncName: 'setFilters',
      hookFuncValue: filters,
      hookFuncBody: setFilters,
    })

    setHookFuncs({
      hookFuncName: 'setReportData',
      hookFuncValue: reportData,
      hookFuncBody: setReportData,
    })
    // eslint-disable-next-line
  }, [filters])

  // eslint-disable-next-line
  const changeObj = (arr, element) => {
    arr.map(el => ({ ...el, active: false }))
  }

  const items = itemList.map(elem => {
    return (
      <li
        className={`tabs-table__item ${activeItem === elem.id ? 'is-active' : ''}`}
        onClick={() => {
          setActiveItem(elem.id)
          elem.active = true
        }}
        key={elem.id}
        >
        {elem.text}
      </li>
    )
  })

  const tableHeader = () => {
    const headerElements = []
    if (reportData && reportData.result) {
      const firstElementForHeaders = reportData.result[0]
      for (const key in firstElementForHeaders) {
        headerElements.push(firstElementForHeaders[key].name)
      }
    }
    return headerElements.map(el => {
      return <th key={el}>{el}</th>
    })
  }

  const tableData = () => {
    const colorizeRow = obj => {
      if (
        obj.average_conversation_duration.value > 300
        && obj.average_conversation_duration.value < 700
      ) {
        return 'salesTable__row_first'
      }
      return 'salesTable__row_second'
    }
    const TDgenerate = el => {
      const rowArr = []
      for (const key in el) {
        const TDvalue = new ReportIndicator(el[key].value)
        if (key === 'number_of_calls') {
          rowArr.push(<td key={key}>{el[key].value}</td>)
        } else {
          rowArr.push(<td key={key}>{TDvalue.hours > 1 ? TDvalue.hours : TDvalue.minutes}</td>)
        }
      }
      return rowArr
    }

    const rows = []
    let someId = 0

    if (reportData && reportData.result) {
      const rowElements = reportData.result.map(el => {
        return (
          <tr key={someId++} className={`salesTable__row ${colorizeRow(el)}`}>
            {TDgenerate(el)}
          </tr>
        )
      })
      rows.push(rowElements)
    }
    if (reportData && reportData.total) {
      const totalElements = obj => {
        return (
          <tr key={someId++} className="salesTable__row salesTable__row_third">
            {TDgenerate(obj)}
          </tr>
        )
      }

      rows.push(totalElements(reportData.total))
    }

    return rows
  }

  return (
    <div className="tabs-table">
      <ol className="tabs-table__list">{items}</ol>
      <div className="tabs-table__content">
        {/* <div className="tabs-table__row"></div> */}
        <div className="salesTable">
          <div className="salesTable__title">
            Сводный отчет <span>по исходящим проектам</span>
          </div>
          <div className="container">
            <div className="salesTable__scroll">
              <table className="salesTable__table">
                <thead className="salesTable__table-thead">
                  <tr className="salesTable__row salesTable__row_fourth">
                    {reportData ? tableHeader() : <Spinner />}
                  </tr>
                </thead>
                <tbody>
                  {reportData.result && reportData.result.length > 0 ? tableData() : 'Данных нет'}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports
