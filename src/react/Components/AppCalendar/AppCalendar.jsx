import React, { useState, useEffect, useRef } from 'react'
import Calendar from 'react-calendar'
import actions from '../../Redux/Actions'
import { Test } from './controller'
import './index.css'

const AppCalendar = props => {
  const {
    identificator, setCalendar, openCalendar, type,
  } = props
  const [testDate, setTestDate] = useState()
  const [curDate, setcurDate] = useState()
  const refEl = useRef(null)
  const [posCalc, setPosBlock] = useState()
  const [posTool, setPosTool] = useState(false)

  const dataReset = data => {
    if (type === 'local') {
      setTestDate(
        actions.setWidgetData({
          widgetName: identificator,
          filtersByDates: {
            period_begin: data[0],
            period_end: data[1],
          },
        }),
      )
    }
    if (type === 'global') {
      actions.setGlobalDates({
        period_begin: data[0],
        period_end: data[1],
      })
    }
  }

  useEffect(() => {
    const posBlockX = refEl.current.getClientRects()[0].x

    if (posBlockX <= 60) {
      setPosBlock(-posBlockX + 70)
      setPosTool(true)
    }
  }, [])

  return (
    <>
      <div className={'calendar'} ref={refEl} style={{ transform: `translateX(${posCalc}px)` }}>
        <i className="calendar__tool" style={{ right: `${posTool ? posCalc + 15 : '15'}px` }}></i>
        <Calendar
          onChange={data => setcurDate(data)}
          value={testDate}
          returnValue="range"
          selectRange={true}
        />

        <div className="calendar__bottom">
          <div className="calendar__info">
            <p className="calendar__data">
              с{' '}
              {/* <span>/!* {testDate ? console.log('true', testDate) : console.log('false', testDate)} *!/</span> */}
            </p>

            <p className="calendar__data">
              по{' '}
              {/* <span>/!* {date ? console.log('date true') : console.log('date false')} *!/</span> */}
            </p>
          </div>

          <button
            className="calendar__btn"
            onClick={() => {
              dataReset(Test(curDate))
              setCalendar(!openCalendar)
            }}
          >
            Готово
          </button>
        </div>

        {/* <button className='calendar__close' onClick={() => setCalendar(!openCalendar)}/> */}
      </div>
    </>
  )
}

export default AppCalendar
