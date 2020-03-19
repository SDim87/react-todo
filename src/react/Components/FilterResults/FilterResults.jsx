import React from 'react'
import { connect } from 'react-redux'
import SelectedFilters from '../SelectedFilters'
import Filter from '../Filter'
import FilterSecond from '../FilterSecond'
import InputDateSelect from '../InputDateSelect'
import Spinner from '../Spinner'
// import actions from '../../Redux/Actions'

import './index.css'

const FilterResults = ({ widgetContent = {}, hookFuncs = {} }) => {
  const dynamicFiltersRender = () => {
    const componentsArr = []
    for (const key in widgetContent.filter) {
      if (
        widgetContent.filter[key].list.filter(
          el => el.active || el.active === null || el.active === false,
        ).length > 0
      ) {
        componentsArr.push(
          <React.Fragment key={key}>
            <FilterSecond
              currentFilter={key}
              filters={hookFuncs.setFilters.value}
              setFilters={hookFuncs.setFilters.body}
              setNewReportData={hookFuncs.setReportData.body}
              // dataFilters={dataFilters}
              // setDataFilters={setDataFilters}
            />
          </React.Fragment>,
        )
      } else {
        componentsArr.push(
          // TODO: прокинуть setDataFilters.
          <React.Fragment key={key}>
            <Filter
              currentFilter={key}
              filters={hookFuncs.setFilters.value}
              setFilters={hookFuncs.setFilters.body}
              dataFilters={widgetContent}
              setNewReportData={hookFuncs.setReportData.body}
            />
          </React.Fragment>,
        )
      }
    }
    return componentsArr
  }

  const dynamicSelectedFiltersRender = () => {
    const componentsArr = []
    for (const key in widgetContent.filter) {
      componentsArr.push(
        <React.Fragment key={key}>
          <SelectedFilters
            currentFilter={key}
            setFilters={hookFuncs.setFilters.body}
            filters={hookFuncs.setFilters.value}
            data={widgetContent}
            setNewReportData={hookFuncs.setReportData.body}
          />
        </React.Fragment>,
      )
    }
    return componentsArr
  }
  // TODO: если использовать данные dataFilters,
  // то не сбрасываются фильтры компонента Filter.
  // Причина, возможно, в непрокинутой функции setDataFilters в Filter
  // см. выше
  const resetFilters = () => {
    for (const key in widgetContent.filter) {
      if (widgetContent.filter.hasOwnProperty(key)) {
        const newObjData = widgetContent

        const newArrSelected = widgetContent.filter[key].list.map(
          el => (el = { ...el, selected: false }),
        )

        newObjData.filter[key].list = newArrSelected

        // setDataFilters({ ...newObjData })

        // console.log('TCL: resetFilters', dataFilters)
      }
    }
    // const selectedFilters = dataFilters.filter
  }

  const component = (
    <div className="filter-resolts">
      <h2 className="filter-resolts__title">Фильтрация</h2>
      <InputDateSelect
        filters={hookFuncs.setFilters.value}
        setFilters={hookFuncs.setFilters.body}
      />
      <div className="filter-resolts__inputs">{dynamicFiltersRender()}</div>
      <div className="filter-resolts__current">{dynamicSelectedFiltersRender()}</div>
      <button className="filter-resolts__reset" onClick={resetFilters}>
        Сбросить фильтр
      </button>
    </div>
  )

  return widgetContent && hookFuncs ? component : <Spinner />
}

const mapStateToProps = state => ({
  widgetContent: state.widgetContent,
  hookFuncs: state.hookFuncs,
})

export default connect(mapStateToProps)(FilterResults)
