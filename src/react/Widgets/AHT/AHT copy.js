import React from 'react'
import ReactSpeedometer from 'react-d3-speedometer'
import Spinner from '../../Components/Spinner'
import widgetContentFunction from '../../Controller/WidgetContent'
import './index.css'

class AHT extends React.Component {
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
    const h = document.getElementById(`${this.props.identificator}`).clientHeight - 40
    this.setState({
      _width: w,
      _height: h,
    })
  }

  UNSAFE_componentWillMount() {
    this.getDataFromAPI('widget_aht')
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state._widgetData !== prevState._widgetData) {
      this.setState({ load: false })
    }
  }

  segments = [0, 182, 363, 636, 818, 1000]

  RSD = this.state._widgetData.arrow_value

  colorMaker = () => {
    if (this.RSD <= this.segments[1] && this.RSD > this.segments[0]) {
      return { color: '#FA4B4B' }
    } else if (this.RSD <= this.segments[2] && this.RSD > this.segments[1]) {
      return { color: '#FFCA08' }
    } else if (this.RSD <= this.segments[3] && this.RSD > this.segments[2]) {
      return { color: '#04A881' }
    } else if (this.RSD <= this.segments[4] && this.RSD > this.segments[3]) {
      return { color: '#FFCA08' }
    } else if (this.RSD <= this.segments[5] && this.RSD > this.segments[4]) {
      return { color: '#FA4B4B' }
    }
  }

  render() {
    const { _width, _height, _widgetData } = this.state

    //dodelat`

    const content = (
      <React.Fragment>
        <div className="widget__filter">
          <p></p>
          <p className="widget__date-interval">1 дек - 15 дек 2019</p>
        </div>
        <p className="Efficiency_title">Среднее время диалога</p>
        <ReactSpeedometer
          width={_width - 100}
          height={_height - 100}
          value={+Math.round(_widgetData.arrow_value)}
          paddingHorizontal={0}
          customSegmentStops={this.segments}
          ringWidth={10}
          segmentColors={['#FA4B4B', '#FFCA08', '#04A881', '#FFCA08', '#FA4B4B']}
          needleColor={'#fff'}
          textColor={'transparent'}
          valueTextFontSize={'30'}
        />

        <p style={this.colorMaker()} className="ATH_num">
          {+_widgetData.current_value}
        </p>
        <p className="ATH_text">{'мин'}</p>
      </React.Fragment>
    )

    return this.state.load ? <Spinner /> : content
  }
}

export default AHT
