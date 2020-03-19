import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import widgetContentFunction from '../../Controller/WidgetContent'
import actions from '../../Redux/Actions'
import Spinner from '../../Components/Spinner'
import WidgetSubmenu from '../../Components/WidgetSubmenu'
import { ReactComponent as QuestMarkIcon } from '../../assets/svg/ques-mark.svg'

import './index.css'
import './../../Components/Helpers/icon.css'

const { setWidgetData } = actions

const SmallWidget = ({ serverName, widgets, widgetData, currentArm }) => {
  const currentWidget = widgets.filter(el => el.acronim === serverName)[0]

  let { name, acronim, description, helper, submenu } = currentWidget

  if (currentArm !== 'operator') {
    submenu = true
  }

  const helpData = {
    widget_number_of_applications_basic_services:
      'Виджет отображает соотношение статусов из Naumen «Занято», «Отдых» и «Простой».',
    widget_number_of_applications_additional_services:
      'Виджет отображает фактические и плановые показатели по созданным заявкам по основным услугам.',
    widget_number_of_contracts_basic_services:
      'Виджет отображает фактические и плановые показатели по созданным заявкам по дополнительным услугам.',
    widget_number_of_contracts_additional_services:
      'Виджет отображает фактические и плановые показатели по подключенным услугам.',
    widget_working_hours_in_line:
      'Виджет отображает процентное соотношение статуса «Занято» (спидометр «Норма занятости»), процентное соотношение нормы по отработанным часам «спидометр «Норма по часам») и фактическое значение подключенных услуг.\n',
    widget_converting_applications_into_services:
      'Виджет отображает сколько создано заявок и совершено контактов в час и результаты пост обработки.',
    widget_quality_control:
      'Виджет отображает сколько создано заявок и совершено контактов в час и результаты пост обработки.',
  }

  useEffect(() => {
    if (widgetData[acronim] && widgetData[acronim].filtersByDates) {
      const { period_begin, period_end } = widgetData[acronim].filtersByDates

      widgetContentFunction(acronim, { period_begin, period_end }).then(res => {
        const curWidget = widgetData[acronim]
        curWidget['data'] = { ...res.data[acronim].content }
        setWidgetData({
          ...curWidget,
        })
      })
    }
    // eslint-disable-next-line
  }, [widgetData[acronim].filtersByDates])

  const content = () => {
    const widgetContent =
      widgetData[acronim].data.target && widgetData[acronim].data.current
        ? widgetData[acronim].data
        : null

    const {
      target = { name: '', value: '' },
      current = { name: '', value: '' },
      extra_block = { value: '', color: '' },
    } = widgetContent
    return (
      <div className="smallWidget">
        <div className="smallWidget__wrapper">
          <p className="smallWidget__title widget__title">
            <span className="widget__title-main">{name}</span>
            <span className="widget__title-description">{description}</span>
          </p>
          <div className="widget__info">
            {helper ? (
              <div className="widget__help">
                <QuestMarkIcon className="icon icon_base0-fill icon_size_15" />
                <div className="widget__help-text">{helpData[serverName]}</div>
              </div>
            ) : null}
            {submenu ? <WidgetSubmenu /> : null}
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div>
            <p className="smallWidget__text smallWidget__text_big smallWidget__text_yellow">
              {target.value}
            </p>
            <p className="smallWidget__title">{target.name}</p>
          </div>

          <p className="smallWidget__text smallWidget__text_big smallWidget__text_yellow">/</p>

          <div>
            <p className="smallWidget__text smallWidget__text_big smallWidget__text_yellow">
              {current.value}
            </p>
            <p className="smallWidget__title">{current.name}</p>
          </div>
        </div>

        <div className={`small-widget__plashka small-widget__${extra_block.color}`}>
          {extra_block.value}
        </div>
      </div>
    )
  }

  return widgetData[acronim] && widgetData[acronim].data ? content() : <Spinner />
}

const mapStateToProps = ({ armData, widgetData, systemData }) => {
  if (armData.moduleData) {
    return {
      widgets: armData.moduleData.widgets,
      widgetData: widgetData,
      currentArm: systemData.currentArm,
    }
  }
}

export default connect(mapStateToProps)(SmallWidget)
