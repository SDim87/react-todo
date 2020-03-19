import React from 'react'
import './index.css'
// import * as d3 from "d3"
// import Spinner from "../../Components/Spinner"
// import widgetContentFunction from "../../Controller/WidgetContent"

class Sales extends React.Component {
  // state = {
  //   id: this.props.identificator,
  //   _width: null,
  //   _height: null,
  //   _widgetData: {},
  //   _plan: null,
  //   _curent: null,
  //   load: true
  // };
  // componentDidMount() {
  //   const w = document.getElementById(`${this.state.id}`).clientWidth;
  //   const h = document.getElementById(`${this.state.id}`).clientHeight;
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
  //     .then(
  //       () => {
  //         const mainData = this.state._widgetData["extra_services"];
  //         let curentValue;
  //         let planValue;
  //         if (mainData) {
  //           if (mainData.data) {
  //             curentValue = mainData.data[0].count;
  //           }
  //           if (mainData.plan_value) {
  //             planValue = mainData.plan_value;
  //           }
  //         }
  //         return (
  //           this.setState({
  //             _curent: curentValue,
  //             _plan: planValue
  //           })
  //         );
  //       }
  //     );
  // };
  // UNSAFE_componentWillMount() {
  //   this.getDataFromAPI("widget_sales");
  // }
  // render() {
  //   const { _width, _height, _plan, _curent } = this.state;
  //   const Barchart = D3Blackbox(function () {
  //     const data = [{
  //       month: "План",
  //       value: _plan
  //     }, {
  //       month: "Факт",
  //       value: _curent
  //     }];
  //     const svg = d3.select(this.anchor.current),
  //       margin = {
  //         top: 20,
  //         right: 20,
  //         bottom: 30,
  //         left: 40
  //       },
  //       width = _width - margin.left - margin.right,
  //       height = _height - 50 - margin.top - margin.bottom;
  //     const x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
  //       y = d3.scaleLinear().rangeRound([height, 0]);
  //     const g = svg.append("g")
  //       .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
  //     x.domain(data.map(function (d) {
  //       return d.month;
  //     }));
  //     y.domain([0, d3.max(data, function (d) {
  //       return d.value + (d.value / 10);
  //     })])
  //     const legend = svg.append('g')
  //       .attr('transform', `translate(${margin.left}, ${margin.top + 30})`)
  //     legend.append('text')
  //       .text(function () {
  //         return `${data[1].value}`
  //       })
  //       .attr('class', 'bar__current')
  //       .attr('font-weight', 'bold')
  //       .attr('font-size', '1.5em')
  //       .attr('line-height', '20px')
  //       .attr('transform', function () {
  //         const yCoodr = y(data[1].value)
  //         if(yCoodr - 50 < 0){
  //           return `translate(${x(data[1].month) + x.bandwidth() / 1.7}, ${yCoodr})`
  //         }
  //         if(yCoodr - 50 > 0){
  //           return `translate(${x(data[1].month) + x.bandwidth() / 1.7}, ${yCoodr - 30})`
  //         }
  //       })
  //     legend.append('text')
  //       .text(function () {
  //         return `${data[0].value}`
  //       })
  //       .attr('class', 'bar__plan')
  //       .attr('font-weight', 'bold')
  //       .attr('font-size', '1.5em')
  //       .attr('line-height', '20px')
  //       .attr('transform', function () {
  //         const yCoodr = y(data[0].value)
  //         if(yCoodr - 50 < 0){
  //           return `translate(${x(data[0].month) + x.bandwidth() / 1.7}, ${yCoodr})`
  //         }
  //         if(yCoodr - 50 > 0){
  //           return `translate(${x(data[0].month) + x.bandwidth() / 1.7}, ${yCoodr - 30})`
  //         }
  //       }
  //       )
  //     g.append("g")
  //       .attr("class", "axis axis--x")
  //       .attr("transform", "translate(0," + height / 2 + ")")
  //       .attr("transform", "translate(0," + height + ")")
  //       .call(d3.axisBottom(x));
  //     g.append("g")
  //       .attr("class", "axis axis--y")
  //       .call(d3.axisLeft(y).ticks(10, "h"))
  //       .append("text")
  //       .attr("transform", "rotate(-90)")
  //       .attr("y", 6)
  //       .attr("dy", "0.71em")
  //       .attr("text-anchor", "end")
  //       .text("Frequency");
  //     g.selectAll("g.axis--y g.tick")
  //       .append("line")
  //       .classed("grid-line", true)
  //       .attr("x1", 0)
  //       .attr("y1", 0)
  //       .attr("x2", width)
  //       .attr("y2", 0);
  //     g.selectAll(".bar_g")
  //       .data(data)
  //       .enter()
  //       .append("rect")
  //       .attr("class", "bar_wrap")
  //       .attr("x", function (d) {
  //         return x(d.month) + x.bandwidth() / 4;
  //       })
  //       .attr("width", x.bandwidth() / 4)
  //       .attr("height", height);
  //     g.selectAll(".bar")
  //       .data(data)
  //       .enter()
  //       .append("rect")
  //       .attr('class', (d) => {
  //         if (d.value === _plan) {
  //           return 'bar__plan'
  //         }
  //         if (d.value === _curent) {
  //           return 'bar__current'
  //         }
  //       })
  //       .attr("width", x.bandwidth() / 4)
  //       .attr("x", function (d) {
  //         return x(d.month) + x.bandwidth() / 4;
  //       })
  //       .attr("y", function (d) {
  //         return y(d.value);
  //       })
  //       .attr("height", function (d) {
  //         return height - y(d.value);
  //       })
  //   })
  //   const content = (
  //     <React.Fragment>
  //       <div className="filter">
  //         <div className="filter__box_sales">
  //           <div className="select__wrapper">
  //             <select>
  //               <option value="">Все услуги</option>
  //               <option value="">Основные услуги</option>
  //               <option value="">Дополнительные услуги</option>
  //             </select>
  //           </div>
  //           <p>1 дек - 15 дек 2019</p>
  //         </div>
  //         <div className="filter__box_sales">
  //           <div className="select__wrapper">
  //             <select>
  //               <option value="">ШПД</option>
  //               <option value="">IP-TV</option>
  //               <option value="">Телефония</option>
  //             </select>
  //           </div>
  //           <span className="sales__current">{`${(_curent / _plan * 100).toFixed(1)}% Плана`}</span>
  //         </div>
  //       </div>
  //       <Chart width={`${_width}px`} height={`${_height}px`}>
  //         <Barchart />
  //       </Chart>
  //     </React.Fragment>
  //   );
  //   return (
  //     this.state.load ? <Spinner /> : content
  //   );
  // }
}

export default Sales
