import React from 'react'
// import * as d3 from 'd3'
import ReactSpeedometer from 'react-d3-speedometer'

import Spinner from '../../Components/Spinner'
import widgetContentFunction from '../../Controller/WidgetContent'

import './index.css'

class Conversion extends React.Component {
  state = {
    _width: null,
    _height: null,
    _widgetData: {},
    _segments: [],
    load: true,
  }

  getDataFromAPI = async widget_name => {
    await widgetContentFunction(widget_name).then(res => {
      this.setState({ _widgetData: { ...res.data[widget_name].content } })
    })
  }

  componentDidMount() {
    const w = document.getElementById(`${this.props.identificator}`).clientWidth
    const h = document.getElementById(`${this.props.identificator}`).clientHeight - 100
    this.setState({
      _width: w,
      _height: h,
    })

    // const el = d3.select('div#Conversion')
    // speedometer.append('text').text('text').attr('class', 'test')
    // const speedometer = el.select('svg.speedometer')
  }

  UNSAFE_componentWillMount() {
    this.getDataFromAPI('widget_conversion')
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state._widgetData !== prevState._widgetData) {
      this.setState({ load: false })
    }
  }

  segments = [0, 273, 727, 1000]

  RSD = this.state._widgetData.arrow_value

  colorMaker = () => {
    if (this.RSD <= this.segments[1] && this.RSD > this.segments[0]) {
      return { color: '#FA4B4B' }
    } if (this.RSD <= this.segments[2] && this.RSD > this.segments[1]) {
      return { color: '#FFCA08' }
    } if (this.RSD <= this.segments[3] && this.RSD > this.segments[2]) {
      return { color: '#04A881' }
    } if (this.RSD <= this.segments[4] && this.RSD > this.segments[3]) {
      return { color: '#FFCA08' }
    } if (this.RSD <= this.segments[5] && this.RSD > this.segments[4]) {
      return { color: '#FA4B4B' }
    }
  }

  render() {
    const { _width, _height, _widgetData } = this.state

    const content = (
      <React.Fragment>
        <div className="filter">
          <div className="select__wrapper">
            <select name="" id="">
              <option value="">Все услуги</option>
              <option value="">Основные услуги</option>
              <option value="">Дополнительные услуги</option>
            </select>
          </div>
          <p>1 дек - 15 дек 2019</p>
        </div>
        <p className="Efficiency_title">Конверсия из состоявшихся контактов в заявки </p>
        <ReactSpeedometer
          width={_width - 100}
          height={_height - 50}
          value={+Math.round(_widgetData.arrow_value)}
          paddingHorizontal={50}
          ringWidth={10}
          needleHeightRatio={0.8}
          customSegmentStops={this.segments}
          segmentColors={['#FA4B4B', '#59CC72', '#04A881']}
          needleColor={'#fff'}
          textColor={'transparent'}
          valueTextFontSize={'24'}
        />

        <p style={this.colorMaker()} className="Conversion_num">
          {`${+_widgetData.current_value}%`}
        </p>
        <div className="widget__footer">
          <div className="widget__place">Ростелеком, Урал</div>
        </div>
      </React.Fragment>
    )

    return this.state.load ? <Spinner /> : content
  }
}

export default Conversion
