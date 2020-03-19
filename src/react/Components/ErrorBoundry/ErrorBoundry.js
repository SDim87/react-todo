import React, { Component } from 'react'
import Icon from './po5.png'
import './index.css'

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorIs: null,
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
      errorIs: error,
    }
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      const er = this.state.errorIs.toString()
      console.log(er)
      return (
        <div className="container EB_container">
          <img className="EB_img" src={Icon} alt="icon" />
          <h1 className="EB_h1">
            Что-то пошло <span className="EB_h1_m">не так!</span>
          </h1>
          <h2 className="EB_h2">Произошла ошибка.</h2>
          <h3 className="EB_h3">Уже исправляем.</h3>
          <details className="EB_details">
            {er}
            <summary className="EB_summary">подробнее</summary>
          </details>
        </div>
      )
    }

    return this.props.children
  }
}
