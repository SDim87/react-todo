import React from 'react'
import './index.css'
// import * as d3 from 'd3'
// import Spinner from '../../Components/Spinner'
// import widgetContentFunction from "../../Controller/WidgetContent";

class HoursOnLine extends React.Component {
  // state = {
  //   id: this.props.identificator,
  //   _width: null,
  //   _height: null,
  //   load: true,
  //   _valuesArr: {},
  //   _widgetData: {},
  //   _lastSevenDays: [],
  //   _monthArr: []
  // }
  // componentDidMount() {
  //   this.getDataFromAPI("widget_working_hours_on_line")
  //   const w = document.getElementById(`${this.state.id}`).clientWidth
  //   const h = document.getElementById(`${this.state.id}`).clientHeight - 100
  //   this.setState({
  //     load: false,
  //     _width: w,
  //     _height: h
  //   })
  // }
  // getDataFromAPI = async (widget_name) => {
  //   await widgetContentFunction(widget_name)
  //     .then((res) => {
  //       this.setState({ _widgetData: { ...res.data[widget_name].content } });
  //     })
  //     .then(() => {
  //       if (this.state._widgetData.all_brigads) {
  //         this.setState({
  //           _lastSevenDays: this.state._widgetData.all_brigads.slice(-7)
  //         })
  //       }
  //     })
  //     .then(() => {
  //       this.getMonthArr()
  //     })
  //     .then(() => {
  //       this.getValues()
  //     })
  // };
  // getMonthArr = () => {
  //   const lastSevenDaysArr = this.state._lastSevenDays
  //   const monthArr = lastSevenDaysArr.map((el) => {
  //     const newDate = new Date(Date.parse(el.date)).toLocaleString('ru', { day: '2-digit', month: 'short' })
  //     return newDate
  //   })
  //   this.setState({
  //     _monthArr: monthArr
  //   })
  // }
  // getValues = () => {
  //   let valuesArr = {}
  //   const month = this.state._monthArr
  //   const data = this.state._lastSevenDays
  //   function reformatDate(date) {
  //     return new Date(Date.parse(date)).toLocaleString('ru', { day: '2-digit', month: 'short' })
  //   }
  //   month.filter((el) => {
  //     for (let key in data) {
  //       if (el === reformatDate(data[key]['date'])) {
  //         if (data[key]) {
  //           valuesArr = {
  //             ...valuesArr,
  //             [el]: {
  //               a: data[key]['hours'],
  //               b: data[key]['plan']
  //             }
  //           }
  //         } else {
  //           valuesArr = {
  //             ...valuesArr,
  //             a: 0,
  //             b: 0
  //           }
  //         }
  //       }
  //     }
  //     return false
  //   })
  //   this.setState({
  //     _valuesArr: valuesArr
  //   })
  // }
  // valueCalculate = (monthArr, valuesArr) => {
  //   if (!valuesArr) {
  //     return { a: 0, b: 0 }
  //   } else {
  //     for (let key in valuesArr) {
  //       if (monthArr === key) {
  //         return valuesArr[key]
  //       }
  //     }
  //   }
  // }
  // render() {
  //   const { _width, _height } = this.state
  //   const self = this
  //   const StackedChart = D3Blackbox(function () {
  //     const month = self.state._monthArr
  //     const values = self.state._valuesArr
  //     const fullValue = (obj) => {
  //       let sumOfObj = 0;
  //       for (let key in obj) {
  //         sumOfObj += obj[key]
  //       }
  //       return sumOfObj
  //     }
  //     const dataTest = d3.range(month.length).map((index) => ({
  //       month: month[index],
  //       value: self.valueCalculate(month[index], values) ? self.valueCalculate(month[index], values) : {a: 0, b: 0},
  //       full: function () {
  //         return fullValue(this.value)
  //       }
  //     }))
  //     const svg = d3.select(this.anchor.current),
  //       margin = { top: 20, right: 20, bottom: 30, left: 40 },
  //       width = Math.round(_width - margin.left - margin.right),
  //       height = Math.round(_height - margin.top - margin.bottom)
  //     const x = d3.scaleBand().rangeRound([0, width]),
  //       y = d3.scaleLinear().rangeRound([height, 0])
  //     const g = svg.append('g')
  //       .attr('transform', `translate(${margin.left}, ${margin.top + 60})`)
  //     const legend = svg.append('g')
  //       .attr('transform', `translate(${margin.left}, ${margin.top + 10})`)
  //     const allPerc = legend.append('g')
  //       .attr('transform', `translate(${width - 100}, ${0})`)
  //       .attr('class', `allPerc`)
  //     allPerc.append('text')
  //       .text(function () {
  //         let arr1 = []
  //         for (let key in dataTest) {
  //           arr1.push(dataTest[key].value['b'])
  //         }
  //         let plan = arr1.reduce((a, b) => a + b, 0)
  //         let arr3 = []
  //         for (let key in dataTest) {
  //           arr3.push(dataTest[key].value['a'])
  //         }
  //         let fact = arr3.reduce((a, b) => a + b, 0)
  //         return `${((fact / plan) * 100).toFixed(1)} % Плана`
  //       })
  //       .attr('fill', '#04A881')
  //       .attr('font-weight', '500')
  //       .attr('font-size', '1em')
  //       .attr('line-height', '19px')
  //     const plan = legend.append('g')
  //       .attr('transform', `translate(${width - width / 2 + 50}, ${margin.top})`)
  //       .attr('class', `plan`)
  //     const fact = legend.append('g')
  //       .attr('transform', `translate(${width - width / 1.5}, ${margin.top})`)
  //       .attr('class', `fact`)
  //     plan.append('circle')
  //       .attr('r', '4px')
  //       .attr('cx', '-10px')
  //       .attr('cy', '-10px')
  //       .attr('class', 'HOL_plan')
  //     plan.append('text')
  //       .text(function () {
  //         let arr = []
  //         for (let key in dataTest) {
  //           arr.push(dataTest[key].value['b'])
  //         }
  //         let arr2 = arr.reduce((a, b) => a + b, 0)
  //         return `${arr2}`
  //       })
  //       .attr('font-weight', 'bold')
  //       .attr('font-size', '25px')
  //       .attr('line-height', '20px')
  //       .attr('class', 'HOL_plan')
  //     plan.append('text')
  //       .text('План')
  //       .attr('fill', '#fff')
  //       .attr('transform', 'translate(65,0)')
  //     fact.append('circle')
  //       .attr('r', '4px')
  //       .attr('cx', '-10px')
  //       .attr('cy', '-10px')
  //       .attr('class', 'HOL_fact')
  //     fact.append('text')
  //       .text(function () {
  //         let arr = []
  //         for (let key in dataTest) {
  //           arr.push(dataTest[key].value['a'])
  //         }
  //         let arr2 = arr.reduce((a, b) => a + b, 0)
  //         return `${arr2}`
  //       })
  //       .attr('font-weight', 'bold')
  //       .attr('font-size', '25px')
  //       .attr('line-height', '20px')
  //       .attr('class', 'HOL_fact')
  //     fact.append('text')
  //       .text('Факт')
  //       .attr('fill', '#fff')
  //       .attr('transform', 'translate(65,0)')
  //     x.domain(dataTest.map(function (d) { return d.month }))
  //     y.domain([0, d3.max(dataTest, function (d) { return d.full() / 2 })])
  //     g.append('g')
  //       .attr('class', 'axis axis--x')
  //       .attr('transform', 'translate(0,' + height / 2 + ')')
  //       .attr('transform', 'translate(0,' + height + ')')
  //       .call(d3.axisBottom(x))
  //     g.append('g')
  //       .attr('class', 'axis axis--y')
  //       .call(d3.axisLeft(y).ticks(10, 'h'))
  //       .append('text')
  //       .attr('transform', 'rotate(-90)')
  //       .attr('y', 6)
  //       .attr('dy', '0.71em')
  //       .attr('text-anchor', 'end')
  //       .text('Frequency')
  //     g.selectAll("g.axis--y g.tick")
  //       .append("line")
  //       .classed("grid-line", true)
  //       .attr("x1", 0)
  //       .attr("y1", 0)
  //       .attr("x2", width)
  //       .attr("y2", 0)
  //     g.selectAll('.bar_wrap')
  //       .data(dataTest)
  //       .enter()
  //       .append('rect')
  //       .attr('class', 'bar_wrap')
  //       .attr('x', function (d) { return x(d.month) + x.bandwidth() / 4 })
  //       .attr('width', x.bandwidth() / 2)
  //       .attr('height', height)
  //     g.selectAll('.HOL_fact')
  //       .data(dataTest)
  //       .enter()
  //       .append('rect')
  //       .attr('class', 'HOL_fact')
  //       .attr('width', x.bandwidth() / 5)
  //       .attr('x', function (d) { return x(d.month) + x.bandwidth() / 2 + 5 })
  //       .attr('y', function (d) {
  //         return y(d.value.a)
  //       })
  //       .attr('data-month', function (d) { return d.month })
  //       .attr('height', function (d) { return height - y(d.value.a) })
  //       .on('mouseover', (e) => {
  //         // const thisVal = e.value.a
  //         // console.log(thisVal)
  //       })
  //     g.selectAll('.HOL_plan')
  //       .data(dataTest)
  //       .enter()
  //       .append('rect')
  //       .attr('class', 'HOL_plan')
  //       .attr('width', x.bandwidth() / 5)
  //       .attr('x', function (d) { return x(d.month) + x.bandwidth() / 4 })
  //       .attr('y', function (d) {
  //         return y(d.value.b)
  //       })
  //       .attr('height', function (d) { return height - y(d.value.b) })
  //       .on('mouseover', (e) => {
  //         // const thisVal = e.value.b
  //         // console.log(thisVal)
  //       })
  //   })
  //   const content = (
  //     <React.Fragment>
  //       <div className="filter">
  //         <div className="select__wrapper">
  //         <select name="" id="">
  //           <option value="">Все услуги</option>
  //           <option value="">Основные услуги</option>
  //           <option value="">Дополнительные услуги</option>
  //         </select>
  //         </div>
  //         <p>1 дек - 15 дек 2019</p>
  //       </div>
  //       <Chart width={`${_width}px`} height={`${_height + 100}px`}>
  //         <StackedChart />
  //       </Chart>
  //     </React.Fragment>
  //   )
  //   return (
  //     this.state.load ? <Spinner /> : content
  //   )
  // }
}

export default HoursOnLine
