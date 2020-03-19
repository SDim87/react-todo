import * as d3 from 'd3'

const Chart = (_data, element, params) => {
  const preData = Object.values(_data)

  const data = preData.filter(e => e.name)

  const svg = d3.select(element)

  const margin = {
    top: 50,
    right: 60,
    bottom: 50,
    left: 80,
  }

  const width = params.width - margin.left - margin.right
  const height = params.height - margin.top - margin.bottom

  if (data[0].value === 0 && data[1].value === 0) {
    svg
      .append('text')
      .text('Нет данных за выбранный период')
      .attr('fill', '#fff')
      .attr('transform', `translate(50, ${height / 2})`)
  }

  if (data[0].value !== 0 || data[1].value !== 0) {
    const x = d3
      .scaleBand()
      .rangeRound([10, width / 1.1])
      .padding(0.1)
    const y = d3.scaleLinear().rangeRound([height, 0])

    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`)

    x.domain(data.map(d => d.name))

    y.domain([0, d3.max(data, d => d.value + d.value / 10)])

    const legend = svg
      .append('g')
      .attr('class', 'legend')
      .attr('transform', `translate(${margin.left}, ${margin.top + 30})`)

    const percentage = svg.append('g').attr('transform', `translate(${width}, ${margin.top - 10})`)

    percentage
      .append('text')
      .attr('font-family', 'Roboto')
      .attr('font-style', 'normal')
      .attr('font-weight', '500')
      .attr('font-size', '16px')
      .attr('line-height', '19px')
      .text(() => {
        let plan = data.filter(e => e.name === 'План')[0].value
        const fact = data.filter(e => e.name === 'Факт')[0].value

        if (plan === 0 && fact === 0) {
          return ' '
        }
        // eslint-disable-next-line
        plan === 0 ? (plan = 1) : (plan = plan)
        return `${((fact / plan) * 100).toFixed(1)}% Плана`
      })
      .attr('fill', () => {
        let plan = data.filter(e => e.name === 'План')[0].value
        const fact = data.filter(e => e.name === 'Факт')[0].value

        // eslint-disable-next-line
        plan === 0 ? (plan = 1) : (plan = plan)
        const test = ((fact / plan) * 100).toFixed(1)
        if (test < 100) {
          return '#fa4b4b'
        }
        if (test >= 100) {
          return '#04a881'
        }
      })

    legend
      .append('text')
      .text(() => data.filter(e => e.name === 'Факт')[0].value)
      .attr('class', 'bar__current')
      .attr('font-weight', 'bold')
      .attr('font-size', '1.5em')
      .attr('line-height', '20px')
      .attr('transform', () => {
        const fact = data.filter(e => e.name === 'Факт')[0]
        const yCoodr = y(fact.value)
        if (yCoodr - 50 < 0) {
          return `translate(${x(fact.name) + x.bandwidth() / 1.2}, ${yCoodr})`
        }
        if (yCoodr - 50 > 0) {
          return `translate(${x(fact.name) + x.bandwidth() / 1.2}, ${yCoodr - 30})`
        }
      })

    legend
      .append('text')
      .text(() => data.filter(e => e.name === 'План')[0].value)
      .attr('class', 'bar__plan')
      .attr('font-weight', 'bold')
      .attr('font-size', '1.5em')
      .attr('line-height', '20px')
      .attr('transform', () => {
        const plan = data.filter(e => e.name === 'План')[0]
        const yCoodr = y(plan.value)
        const planValue = plan.value
        const planLength = planValue.toString().split('').length

        const planMove = arg => {
          switch (arg) {
            case 1:
              return 100
            case 2:
              return 25
            case 3:
              return 5
            default:
              return 2
          }
        }

        return `translate(${x(plan.name) - x.bandwidth() / planMove(planLength)}, ${
          yCoodr - 50 < 0 ? yCoodr : yCoodr - 30
        })`
      })

    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', `translate(0,${height / 2})`)
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x))

    g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(y).ticks(10, 'h'))
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('Frequency')

    g.selectAll('g.axis--y g.tick')
      .append('line')
      .classed('grid-line', true)
      .attr('x1', 0)
      .attr('y1', 0)
      .attr('x2', width)
      .attr('y2', 0)

    g.selectAll('.bar_g')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar_wrap')
      .attr('x', d => x(d.name) + x.bandwidth() / 2.5)
      .attr('width', x.bandwidth() / 4)
      .attr('height', height)

    g.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', d => {
        if (d.name === 'План') {
          return 'bar__plan'
        }
        if (d.name === 'Факт') {
          return 'bar__current'
        }
      })
      .attr('width', x.bandwidth() / 4)
      .attr('x', d => x(d.name) + x.bandwidth() / 2.5)
      .attr('y', d => y(d.value))
      .attr('height', d => height - y(d.value))

    svg.select('g .axis--x').attr('font-size', '1em')
  }
}

export default Chart
