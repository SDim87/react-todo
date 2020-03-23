import * as d3 from 'd3'

export const makeChart = (data, element, _width, _height) => {
  // Декларация D3
  const svg = d3.select(element);
  const margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 40,
  };
  const width = Math.round(_width - margin.left - margin.right);
  const height = Math.round(_height - margin.top - margin.bottom) - 50

  // Установка размеров графика
  const coordX = d3.scaleBand().rangeRound([0, width]);
  const coordY = d3.scaleLinear().rangeRound([height, 0])

  // Установка тега для последующего построения графика
  const coordG = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`)

  // Установка тега для последующего построения легенды
  const legend = svg.append('g').attr('transform', `translate(${margin.left}, ${_height - 10})`)

  // Создание левой тектовой части легенды
  legend
    .append('text')
    .text('Ростелеком, Урал')
    .attr('font-family', 'Roboto')
    .attr('font-style', 'normal')
    .attr('font-weight', 'normal')
    .attr('font-size', '13px')
    .attr('line-height', '20px')
    .attr('fill', '#53C773')
    .attr('opacity', '0.8')
    .attr('transform', `translate(${0}, ${0})`)

  // Создание групп правой части легенды
  const shpd = legend.append('g').attr('transform', `translate(${width - 380}, ${0})`)
  const iptv = legend.append('g').attr('transform', `translate(${width - 300}, ${0})`)
  const tele = legend.append('g').attr('transform', `translate(${width - 220}, ${0})`)
  const dop = legend.append('g').attr('transform', `translate(${width - 100}, ${0})`)

  // Создание текста легенды
  shpd
    .append('text')
    .text('ШПД')
    .attr('class', 'sos-legend__text')

  dop
    .append('text')
    .text('Доп. услуги')
    .attr('class', 'sos-legend__text')

  iptv
    .append('text')
    .text('IP-TV')
    .attr('class', 'sos-legend__text')

  tele
    .append('text')
    .text('Телефония')
    .attr('class', 'sos-legend__text')

  legend
    .selectAll('text', 'sos-legend__text')
    .attr('fill', '#fff')
    .attr('font-family', 'Roboto')
    .attr('font-style', 'normal')
    .attr('font-weight', 'normal')
    .attr('font-size', '14px')
    .attr('line-height', '16px')

  // Создание круга для текста легенды
  shpd
    .append('circle')
    .attr('class', 'sos-legend__circle')
    .attr('fill', '#00B5EA')

  iptv
    .append('circle')
    .attr('class', 'sos-legend__circle')
    .attr('fill', '#FFCA08')

  tele
    .append('circle')
    .attr('fill', '#04A881')
    .attr('class', 'sos-legend__circle')

  dop
    .append('circle')
    .attr('fill', '#4E58AB')
    .attr('class', 'sos-legend__circle')

  legend
    .selectAll('circle', 'sos-legend__circle')
    .attr('r', '4px')
    .attr('cx', '-10px')
    .attr('cy', '-5px')

  // Обработка даннх для выстраивания оси Х
  coordX.domain(data.map(el => el.name))

  // Обработка даннх для выстраивания оси У, где (d.full / 10) - переменная удлиняющая ось У
  coordY.domain([
    0,
    d3.max(data, (coordD) => {
      const max = coordD.full + coordD.full / 10
      return max
    }),
  ])

  // Отрисовка значений оси Х (transparent - невидимая)
  coordG.append('g')
    .attr('style', 'color: transparent; font-size: 13px; max-width: 50px; word-wrap: wrap')
    .attr('class', 'axis axis--x')
    .attr('transform', `translate(0,${height / 2})`)
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(coordX))

  // Отрисовка кастомных значений оси Х
  coordG.selectAll('g.tick')
    .data(data)
    .append('text')
    .attr('class', 'brig')
    .text((coordD) => {
      const ar = coordD.name.split(' ')
      return ar[0]
    })
    .attr('transform', 'translate(0, 20)')
    .attr('fill', 'var(--blue)')
    .attr('style', 'font-size: 0.9em')

  coordG.selectAll('g.tick')
    .data(data)
    .append('text')
    .attr('class', 'brigName')
    .attr('transform', 'translate(0, 35)')
    .attr('fill', 'var(--blue)')
    .text((coordD) => {
      const ar = coordD.name.split(' ')
      return ar[1]
    })
    .attr('style', 'font-size: 0.8em')

  // Отрисовка значений оси У
  coordG.append('g')
    .attr('class', 'axis axis--y')
    .call(d3.axisLeft(coordY).ticks(10, 'h'))
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '0.71em')
    .attr('text-anchor', 'end')
    .text('Frequency')

  // Отрисовка линий по оси У
  coordG.selectAll('g.axis--y g.tick')
    .append('line')
    .classed('grid-line', true)
    .attr('x1', 0)
    .attr('y1', 0)
    .attr('x2', width)
    .attr('y2', 0)

  // Создание деорирующего бара обёртки
  coordG.selectAll('.bar_wrap')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar_wrap')
    .attr('x', (coordD) => {
      return coordX(coordD.name) + coordX.bandwidth() / 2.5
    })
    .attr('width', coordX.bandwidth() / 4)
    .attr('height', height)

  // Цикл создания баров из данных
  for (let i = 0; i < Object.keys(data[0].value).length; i++) {
    coordG.selectAll(Object.keys(data[i].value)[i])
      .data(data)
      .enter()
      .append('rect')
      .attr('class', Object.keys(data[i].value)[i])
      .attr('width', coordX.bandwidth() / 4)
      .attr('data-month', (coordD) => {
        return coordD.name
      })
      .attr('x', (coordD) => {
        return coordX(coordD.name) + coordX.bandwidth() / 2.5
      })
      .attr('y', (coordD) => {
        switch (Object.keys(coordD.value)[i]) {
          case 'extra-equipment':
            return coordY(coordD.full - coordD.value.SHPD - coordD.value.iptv - coordD.value.Telephony)
          case 'Telephony':
            return coordY(coordD.full - coordD.value.SHPD - coordD.value.iptv)
          case 'iptv':
            return coordY(coordD.full - coordD.value.SHPD)
          case 'SHPD':
            return coordY(coordD.full)
          default:
            return new Error()
        }
      })
      .attr('height', (coordD) => {
        return height - coordY(Object.values(coordD.value)[i])
      })
      .on('mouseover', evt => {
        // const thisVal = evt.value.b;
      })
  }
}
