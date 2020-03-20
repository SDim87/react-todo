import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { connect } from 'react-redux'

const Breadcrumbs = ({ currentUrl, menuItems }) => {
  /**
   * Генерим бредкрамбсы на основе currentUrl
   * Соотносим с menuItems
   */
  const breadCrumbsGenerate = () => {
    const currentUrlParse = currentUrl.split('/').filter(el => el !== '')
    const someArr = []
    currentUrlParse.map(el1 => {
      // eslint-disable-next-line
      return menuItems.map(el2 => {
        if (el1 === el2.url) {
          someArr.push(el2)
        }
      })
    })

    // eslint-disable-next-line
    const breadCrumbsItems = someArr.map((el, index) => {
      return (
        <li
          key={index}
          className="breadcrumbs__item"
          itemProp="itemListElement"
          itemScope
          itemType="http://schema.org/ListItem"
          >
          <Link className="breadcrumbs__link" to={el.finalUrl} itemProp="item">
            <span itemProp="name">{el.name}</span>
          </Link>
          <meta itemProp="position" content={index} />
        </li>
      )
    })
    return breadCrumbsItems
  }

  return (
    <div>
      <ol className="breadcrumbs" itemScope itemType="http://schema.org/BreadcrumbList">
        {breadCrumbsGenerate()}
      </ol>
    </div>
  )
}

const mapStateToProps = ({ systemData, armData }) => {
  return {
    currentUrl: systemData.currentUrl,
    menuItems: armData.menuItems,
  }
}

export default connect(mapStateToProps)(Breadcrumbs)
