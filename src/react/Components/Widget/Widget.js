import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import WidgetSubmenu from '../WidgetSubmenu'
import Spinner from '../Spinner'
import InputDateSelect from '../InputDateSelect'
import actions from '../../Redux/Actions'
import widgetContentFunction from '../../Controller/WidgetContent'
import './index.css'

const help = require('../../assets/help.svg')

const { setWidgetData } = actions

const Widget = ({ clientName, widgets, widgetData, currentArm }) => {
  const [isLoad, setIsLoad] = useState(false)
  const [component, setComponent] = useState()
  const DynamicComponent = React.lazy(() => import(`../../Widgets/${clientName}`))
  const currentWidget = widgets.filter(el => el.clientName === clientName)[0]

  let { submenu, calendar } = currentWidget
  const { isStatic, acronim, name, description, helper } = currentWidget

  if (currentArm !== 'operator') {
    submenu = true
    calendar = true
  }

  const { period_begin, period_end } = widgetData[acronim].filtersByDates

  const helpData = {
    Employment: 'Виджет отображает соотношение статусов из Naumen «Занято», «Отдых» и «Простой».',
    AppBasicServices:
      'Виджет отображает фактические и плановые показатели по созданным заявкам по основным услугам.',
    AppAddServices:
      'Виджет отображает фактические и плановые показатели по созданным заявкам по дополнительным услугам.',
    ConnectedServices:
      'Виджет отображает фактические и плановые показатели по подключенным услугам.',
    RevenueForecast:
      'Виджет отображает процентное соотношение статуса «Занято» (спидометр «Норма занятости»), процентное соотношение нормы по отработанным часам «спидометр «Норма по часам») и фактическое значение подключенных услуг.\n',
    Efficiency:
      'Виджет отображает сколько создано заявок и совершено контактов в час и результаты пост обработки.',
  }

  useEffect(() => {
    if (widgetData[acronim].filtersByDates) {
      setIsLoad(false)
      widgetContentFunction(acronim, { period_begin, period_end })
        .then(res => {
          const curWidget = widgetData[acronim]
          curWidget.data = { ...res.data[acronim].content }
          setWidgetData({ ...curWidget })
        })
        .then(() => {
          setIsLoad(true)
        })
    }

    const dateConigure = () => {
      if (currentArm === 'director' || currentArm === 'brigadir') {
        const begin = new Date(period_begin).toLocaleString('ru', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
        const end = new Date(period_end).toLocaleString('ru', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })

        const b = begin.split(' ')
        const e = end.split(' ')

        b.pop()
        e.pop()

        if (+b[b.length - 1] === +e[e.length - 1]) {
          b.pop()
        }

        return `${b.join(' ')} - ${e.join(' ')}`
      }
      return null
    }

    const content = (
      <div className="widget">
        <div className={`widget__header ${isStatic ? null : 'widget__header_draggable'}`}>
          <p className="widget__title">
            <span className="widget__title-main">{name}</span>
            <span className="widget__title-description">{description}</span>
          </p>

          <div className="widget__header-col">
            {helper ? (
              <div className="widget__help">
                <img className="widget__help-icon" src={help} alt="img" />
                <div className="widget__help-text">{helpData[clientName]}</div>
              </div>
            ) : null}

            {calendar ? <InputDateSelect type={'local'} identificator={acronim} /> : null}
            {submenu ? <WidgetSubmenu /> : null}
          </div>
        </div>

        <div className="widget__content" id={`${clientName}`}>
          <div className="widget__date-period">{dateConigure()}</div>

          <div className={`${clientName}__wrapper widget__wrapper`}>
            <React.Suspense fallback={<Spinner />}>
              <DynamicComponent identificator={clientName} />
            </React.Suspense>
          </div>
        </div>
      </div>
    )

    setComponent(content)

    // eslint-disable-next-line
  }, [widgetData[acronim].filtersByDates])

  return widgetData[acronim] && widgetData[acronim].data && isLoad ? component : <Spinner />
}

const mapStateToProps = ({ armData, widgetData, systemData }) => {
  return {
    widgets: armData.moduleData.widgets,
    widgetData,
    currentArm: systemData.currentArm,
  }
}

export default connect(mapStateToProps)(Widget)
