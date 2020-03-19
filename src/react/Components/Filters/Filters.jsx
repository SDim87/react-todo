import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getFilters } from './controller'
import actions from '../../Redux/Actions'
import FilterList from '../FilterList'

import './index.css'

const { setFiltersStatus } = actions

const FilterResults = ({ filtersData, filterStatus }) => {

  const [currentFilter, setCurrentFilter] = useState('')

  useEffect(() => {
    getFilters()
  }, [])

  // filters generate
  const FilterGenerate = ({ filters }) => {
    const newItemsArr = []
    for (let key in filters) {
      newItemsArr.push(
        <FilterList
          key={key}
          filterName={key}
          items={filters[key]}
          setCurrentFilter={setCurrentFilter}
          currentFilter={currentFilter}
        />
      )
    }
    return newItemsArr
  }

  // header
  const headerText = 'Выберите необходимые поля для фильтрации'
  const Header = ({ text }) => {
    return (
      <div className='userPanel__name'>
        {text}
      </div>
    )
  }

  // content
  const Content = (props) => {
    return (
      <div className='userPanel'>
        {props.children}
      </div>
    )
  }

  // layout
  const Laylout = (props) => {
    return (
      <div>
        <button onClick={() => setFiltersStatus(!filterStatus)}>X</button>
        {props.children}
      </div>
    )
  }

  return (
    <Laylout>
      <Content>
        <Header text={headerText} />
        <FilterGenerate filters={filtersData} />
      </Content>
    </Laylout>
  )
}

const mapStateToProps = ({ componentsData }) => {
  return {
    filtersData: componentsData.globalFilters ? componentsData.globalFilters.data : {},
    filtersStatus: componentsData.globalFilters ? componentsData.globalFilters.status : false
  }
}

export default connect(mapStateToProps)(FilterResults)
