import * as d3 from 'd3'

export const makeChart = (_data, element, _width, _height) => {
  const margin = _width / 12
  const width = _height - margin
  const height = _height - margin
  const dataArr = Object.values(_data)

  if (dataArr.filter(e => e > 0).length === 0) {
    d3.select(element)
      .append('text')
      .text('Нет данных за выбраный период')
      .attr('transform', `translate(50, ${height / 2 - 35})`)
      .attr('fill', '#fff')
  }

  if (dataArr.filter(e => e > 0).length !== 0) {
    delete _data.value_type

    const data = _data

    const svg = d3
      .select(element)
      .append('g')
      .attr('transform', `translate(${_width / 2 - 10}, ${height / 2.25 + margin / 2})`)

    // Добавление декорации в виде штрихов
    const strokes = svg.append('path')

    strokes
      .attr('d', 'M 0, -10 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0')
      .attr('fill', 'none')
      .attr('stroke', 'rgba(148, 152, 161, .5)')
      .attr('path-length', '100')
      .attr('stroke-dasharray', '1, 33')
      .attr('stroke-width', '.5em')

    const currentValue = svg.append('g').attr('transform', `translate(${0}, ${0})`)

    // Добавление значения в центре диаграммы
    currentValue
      .append('text')
      .text(`${data.worktime}%`)
      .attr('fill', function() {
        if (data.worktime <= 85) {
          return '#fa4b4b'
        }
        if (data.worktime >= 85) {
          return '#04a881'
        }
      })
      .attr('font-size', '24px')
      .attr('text-anchor', 'middle')
      .attr('text-align', 'center')
      .attr('font-weight', 'bold')
      .attr('line-height', '1')
      .attr('transform', `translate(${0}, ${-10})`)

    currentValue
      .append('text')
      .text(`Занятость`)
      .attr('text-anchor', 'middle')
      .attr('text-align', 'center')
      .attr('transform', `translate(${0}, ${10})`)
      .attr('fill', '#fff')

    // Создание легенды
    const legend = svg.append('g').attr('transform', `translate(${width / 6.5 - margin}, ${130})`)

    const first = legend.append('g').attr('transform', `translate(${-120}, ${0})`)

    first
      .append('text')
      .text('Занятость')
      .attr('fill', '#fff')

    first
      .append('circle')
      .attr('r', '4px')
      .attr('cx', '-10px')
      .attr('cy', '-5px')
      .attr('fill', '#04a881')

    const second = legend.append('g').attr('transform', `translate(${-20}, ${0})`)

    second
      .append('text')
      .text('Отдых')
      .attr('fill', '#fff')

    second
      .append('circle')
      .attr('r', '4px')
      .attr('cx', '-10px')
      .attr('cy', '-5px')
      .attr('fill', '#ffca08')

    const third = legend.append('g').attr('transform', `translate(${60}, ${0})`)

    third
      .append('text')
      .text('Простой')
      .attr('fill', '#fff')

    third
      .append('circle')
      .attr('r', '4px')
      .attr('cx', '-10px')
      .attr('cy', '-5px')
      .attr('fill', '#fa4b4b')

    const pie = d3.pie().value(function(d) {
      return d.value
    })

    const data_ready = pie(d3.entries(data))

    svg
      .selectAll('whatever')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('class', function(d) {
        return d.data.key
      })
      .attr('transform', 'translate(0, -10)')
      .attr(
        'd',
        d3
          .arc()
          .innerRadius(100)
          .outerRadius(92),
      )
      .attr('fill', function(d) {
        switch (d.data.key) {
          case 'worktime':
            return '#04a881'
          case 'rest':
            return '#ffca08'
          case 'downtime':
            return '#fa4b4b'
          default:
            break
        }
      })
      .text(function(p) {
        return p.data.key
      })
  }
}
