import React from 'react'
import * as d3 from 'd3'

import './index.css'

const Speedometer = (_data, element) => {
  const segmentsLength = Object.values(_data.colors).length
  const dataSegments = Object.values(_data.colors)
  const chartColors = Object.keys(_data.colors)
  let variableForSegmentDetection

  const root = d3.select(element)

  const wrapper = root.append('div').attr('class', 'SCh__wrapper')

  const svg = wrapper
    .append('svg')
    .attr('viewBox', '0 0 200 200')
    .attr('width', '100%')
    .attr('height', '75%')

  const mySegments = segmentsLength => {
    switch (segmentsLength) {
      case 3:
        return [
          [-134, -56],
          [-55, 54],
          [55, 134],
        ]
      case 4:
        return [
          [-134, -39],
          [-38, 36],
          [37, 80],
          [81, 134],
        ]
      case 5:
        return [
          [-134, -83],
          [-84, -39],
          [-38, 36],
          [37, 80],
          [81, 134],
        ]
      default:
        break
    }
  }

  const valueType = value => {
    switch (value) {
      case 'number':
        return ''
      case 'percent':
        return '%'
      default:
        break
    }
  }

  const colors = color => {
    switch (color) {
      case 'red':
        return '#f94b4b'
      case 'red_2':
        return '#f94b4b'
      case 'brown':
        return '#874224'
      case 'orange':
        return '#dc6b19'
      case 'yellow':
        return '#ffca06'
      case 'yellow_2':
        return '#ffca06'
      case 'light_green':
        return '#59cc72'
      case 'green':
        return '#05a881'
      case 'dark_green':
        return '#3a7705'
      case 'blue':
        return '#1082f3'
      case 'dark_blue':
        return '#1139c2'
      default:
        break
    }
  }

  const names = name => {
    switch (name) {
      case 'employment_rate':
        return 'Норма занятости'
      case 'hourly_rate':
        return 'Норма по часам'
      case 'connected_services':
        return 'Подключенные услуги'
      case 'applications_hour':
        return 'Заявок в час'
      case 'contacts_hour':
        return 'Контактов в час'
      case 'wrapup':
        return 'Обработка'
      default:
        break
    }
  }

  const doStroke = () => {
    const stroke = svg.append('g')

    stroke
      .append('path')
      .attr('d', 'm60.41766,139.76616a57.875,56.50546 0 1 1 78.11623,0.73384')
      .attr('fill', 'none')
      .attr('stroke', 'rgba(148, 152, 161, .5)')
      .attr('path-length', '100')
      .attr('stroke-dasharray', '0.5, 33.5')
      .attr('stroke-width', '1em')
  }

  const segmentDetection = () => {
    const curerntValue = () => {
      if (lastValue < _data.value) {
        return lastValue - 0.001
      }
      if (_data.value === 0) {
        return _data.value + 0.001
      }
      if (_data.value <= Object.values(_data.colors)[0]) {
        return Object.values(_data.colors)[0]
      }
      if (_data.value > 0 && _data.value <= lastValue) {
        return _data.value
      }
      if (_data.value !== typeof Number) {
        return 0.001
      }
    }
    const lastValue = _data.last_value
    const segments = dataSegments

    segments.push(lastValue)

    const testMax = segments.filter((number) => {
      return number >= curerntValue()
    })
    const testMin = segments.filter((number) => {
      return number <= curerntValue()
    })

    const currentSeg = (variableForSegmentDetection = testMin.length === 0 ? 1 : testMin.length)
    const startCurSeg = mySegments(segments.length - 1)[currentSeg - 1]

    const percent = () => {
      if (curerntValue() < Object.values(_data.colors)[0]) {
        return 0.001
      }
      if (curerntValue() === testMin[testMin.length - 1]) {
        return 0.001
      }
      return (
        ((curerntValue() - testMin[testMin.length - 1])
            / (testMax[0] - testMin[testMin.length - 1]))
          * 100
      )
    }

    const absoluteSeg = () => {
      if (startCurSeg[0] < 0 && startCurSeg[1] > 0) {
        return Math.abs(startCurSeg[0]) + startCurSeg[1]
      }
      return Math.abs(Math.abs(startCurSeg[1]) - Math.abs(startCurSeg[0]))
    }

    const segProcentage = (absoluteSeg() / 100) * percent()
    const curCoordRot = segProcentage + startCurSeg[0]

    return {
      rotate: curCoordRot,
      currentSegment: currentSeg,
    }
  }

  const doArrow = () => {
    const arrow = svg
      .append('g')
      .attr('transform-origin', 'center center')
      .attr('transform', () => {
        return `rotate(${segmentDetection().rotate})`
      })

    arrow
      .append('path')
      .attr('d', 'm96.9175,103.94066l4.00001,-82.25002l4.00001,82.25002l-8.00001,0z')
      .attr('fill', '#ffffff')
      .attr('stroke', '#fff')
      .attr('strokeLinecap', 'round')
      .attr('strokeWidth', '1')

    arrow
      .append('circle')
      .attr('r', '7')
      .attr('fill', '#fff')
      .attr('cx', '101')
      .attr('cy', '100')

    arrow
      .append('circle')
      .attr('r', '3')
      .attr('fill', '#2a3243')
      .attr('cx', '101')
      .attr('cy', '100')
  }

  const threeSegments = () => {
    const chartColors = Object.keys(_data.colors)
    const canvas = svg.append('g')

    canvas
      .append('path')
      .attr(
        'd',
        'm40.67733,149c-9.63295,-11.27019 -15.79129,-25.00779 -17.75102,-39.59855c-1.95974,-14.59076 0.36055,-29.42759 6.6881,-42.76716c1.7505,-3.69032 3.7876,-7.22359 6.08612,-10.57178',
      )
      .attr('stroke', colors(chartColors[0]))
      .attr('stroke-linecap', 'round')
      .attr('transform', 'translate(0.25, 0)')

    canvas
      .append('text')
      .text(`${dataSegments[0]}${valueType(_data.value_type)}`)
      .attr('transform', 'translate(15, 170)')

    canvas
      .append('path')
      .attr(
        'd',
        'm158.68332,149.25c9.76513,-11.30663 16.00793,-25.08865 17.99474,-39.72659c1.98681,-14.63732 -0.36524,-29.52267 -6.78013,-42.90538c-1.78921,-3.73256 -3.87354,-7.30496 -6.22687,-10.68834',
      )
      .attr('stroke', colors(chartColors[2]))
      .attr('stroke-linecap', 'round')

    canvas
      .append('text')
      .text(`${dataSegments[2]}`)
      .attr('transform', 'translate(175, 55)')

    canvas
      .append('path')
      .attr(
        'd',
        'm35.89738,56.1558c5.88572,-8.51855 13.52223,-15.80545 22.47074,-21.37209c12.37084,-7.69563 26.73474,-11.78371 41.40395,-11.78371c14.66859,0 29.033,4.08807 41.40358,11.78371c8.92049,5.54921 16.53742,12.80797 22.41544,21.29214',
      )
      .attr('stroke', colors(chartColors[1]))

    canvas
      .append('text')
      .text(`${dataSegments[1]}`)
      .attr('transform', 'translate(10, 55)')

    canvas
      .append('text')
      .text(`${_data.last_value}${valueType(_data.value_type)}`)
      .attr('transform', 'translate(160, 170)')

    const toolTipWrap = canvas.append('g')
    const toolTip = toolTipWrap.append('rect')
    const toolTipText = toolTipWrap.append('text')

    canvas
      .selectAll('path')
      .attr('fill', 'none')
      .attr('stroke-width', '0.5em')
      .attr('cursor', 'pointer')
      .on('mouseover', () => {
        const { target } = d3.event
        const x = d3.mouse(target)[0]
        const y = d3.mouse(target)[1]

        toolTip
          .attr('transform', `translate(${x + 5},${y - 10})`)
          .attr('width', '33px')
          .attr('height', '33px')
          .attr('fill', 'rgba(95, 101, 115, 0.9)')
          .attr('rx', '5')

        toolTipText
          .text('TTT')
          .attr('fill', '#fff')
          .attr('transform', `translate(${x + 11},${y + 10})`)
      })
      .on('mousemove', () => {
        const { target } = d3.event
        const x = d3.mouse(target)[0]
        const y = d3.mouse(target)[1]

        toolTip.attr('transform', `translate(${x + 5},${y - 10})`)
        toolTipText.attr('transform', `translate(${x + 11},${y + 10})`)
      })
      .on('mouseout', () => {
        toolTip.attr('fill', 'transparent')
        toolTipText.text('test').attr('fill', 'transparent')
      })

    canvas
      .selectAll('text')
      .attr('font-family', 'Roboto')
      .attr('font-style', 'normal')
      .attr('font-weight', 'normal')
      .attr('font-size', '0.8em')
      .attr('line-height', '0.8em')
      .attr('fill', '#ffffff')
  }

  const fiveSegments = () => {
    const chartColors = Object.keys(_data.colors)
    const canvas = svg.append('g')

    canvas
      .append('path')
      .attr(
        'd',
        'm42.75576,150.593c-10.19671,-11.83167 -16.71544,-26.25512 -18.78987,-41.57363c-1.0214,-7.54186 -0.94446,-15.14728 0.19639,-22.59639',
      )
      .attr('stroke', colors(chartColors[0]))
      .attr('stroke-linecap', 'round')

    canvas
      .append('text')
      .text(`${dataSegments[0]}${valueType(_data.value_type)}`)
      .attr('transform', 'translate(15, 170)')

    canvas
      .append('path')
      .attr(
        'd',
        'm156.74434,152.093c10.32786,-12.02003 16.92997,-26.6731 19.03114,-42.23548c1.01924,-7.55123 0.95857,-15.1644 -0.14965,-22.62667',
      )
      .attr('stroke', colors(chartColors[4]))
      .attr('stroke-linecap', 'round')
      .attr('transform', 'translate(-0.1, -1.7)')

    canvas
      .append('text')
      .text(`${dataSegments[4]}`)
      .attr('transform', 'translate(185, 90)')

    canvas
      .append('path')
      .attr(
        'd',
        'm52.79774,39.13648c1.85379,-1.43912 3.77731,-2.79641 5.76577,-4.06626c12.34326,-7.88274 26.67505,-12.07022 41.31157,-12.07022c14.63652,0 28.96831,4.18747 41.31194,12.07022c2.15342,1.37539 4.23066,2.8533 6.22619,4.42678',
      )
      .attr('stroke', colors(chartColors[2]))

    canvas
      .append('text')
      .text(`${dataSegments[2]}`)
      .attr('transform', 'translate(35, 35)')

    canvas
      .append('path')
      .attr(
        'd',
        'm23.84239,88.67297c1.08572,-7.29111 3.21528,-14.42489 6.3538,-21.17401c1.71045,-3.67822 3.70094,-7.19985 5.94689,-10.53695c4.56477,-6.78238 10.18493,-12.80258 16.6549,-17.82547',
      )
      .attr('stroke', colors(chartColors[1]))

    canvas
      .append('text')
      .text(`${dataSegments[1]}`)
      .attr('transform', 'translate(2, 90)')

    canvas
      .append('path')
      .attr(
        'd',
        'm147.41322,39.49706c6.25015,4.92911 11.693,10.79544 16.13931,17.38305c2.26831,3.36142 4.27736,6.91057 6.00194,10.61884c3.18252,6.84414 5.32796,14.08377 6.39883,21.48189',
      )
      .attr('stroke', colors(chartColors[3]))

    canvas
      .append('text')
      .text(`${dataSegments[3]}`)
      .attr('transform', 'translate(150, 35)')

    canvas
      .append('text')
      .text(`${_data.last_value}${valueType(_data.value_type)}`)
      .attr('transform', 'translate(160, 170)')

    const toolTipWrap = canvas.append('g')
    const toolTip = toolTipWrap.append('rect')
    const toolTipText = toolTipWrap.append('text')

    canvas
      .selectAll('path')
      .attr('fill', 'none')
      .attr('stroke-width', '0.5em')
      .attr('cursor', 'pointer')
      .on('mouseover', () => {
        const { target } = d3.event
        const x = d3.mouse(target)[0]
        const y = d3.mouse(target)[1]

        toolTip
          .attr('transform', `translate(${x + 5},${y - 10})`)
          .attr('rx', '5')
          .attr('width', '33px')
          .attr('height', '33px')
          .attr('fill', 'var(--base3)')

        toolTipText
          .text('0')
          .attr('text-anchor', 'middle')
          .attr('padding', '5px 10px')
          .attr('fill', 'var(--base0)')
          .attr('transform', `translate(${x + 11},${y + 10})`)
      })
      .on('mousemove', () => {
        const { target } = d3.event
        const x = d3.mouse(target)[0]
        const y = d3.mouse(target)[1]

        toolTip.attr('transform', `translate(${x + 5},${y - 10})`)
        toolTipText.attr('transform', `translate(${x + 11},${y + 10})`)
      })
      .on('mouseout', () => {
        toolTip.attr('fill', 'transparent')
        toolTipText.text('test').attr('fill', 'transparent')
      })

    canvas
      .selectAll('text')
      .attr('font-family', 'Roboto')
      .attr('font-style', 'normal')
      .attr('font-weight', 'normal')
      .attr('font-size', '0.8em')
      .attr('line-height', '0.8em')
      .attr('fill', '#ffffff')
  }

  const fourSegments = () => {
    const canvas = svg.append('g')

    canvas
      .append('path')
      .attr(
        'd',
        'm42.74889,151.688c-10.4545,-11.68423 -17.13804,-25.92652 -19.26491,-41.05331c-1.04722,-7.44811 -0.96833,-14.95835 0.20135,-22.31423c1.2059,-7.58383 3.57119,-15.00408 7.05715,-22.02435c1.89979,-3.82589 4.11061,-7.48897 6.60518,-10.96017c5.07006,-7.05479 11.31234,-13.31674 18.49851,-18.54137',
      )
      .attr('stroke', colors(chartColors[0]))
      .attr('stroke-linecap', 'round')
      .append('title')
      .text('test')

    canvas
      .append('text')
      .text(`${dataSegments[0]}${valueType(_data.value_type)}`)
      .attr('transform', 'translate(15, 170)')

    canvas
      .append('path')
      .attr(
        'd',
        'm52.84618,39.04453c1.8568,-1.44487 3.78345,-2.80746 5.77514,-4.08239c12.36334,-7.91387 26.71843,-12.11789 41.37875,-12.11789c14.66032,0 29.01541,4.20402 41.37912,12.11789c2.15693,1.38083 4.23754,2.86464 6.23631,4.44428',
      )
      .attr('stroke', colors(chartColors[1]))

    canvas
      .append('text')
      .text(`${dataSegments[1]}`)
      .attr('transform', 'translate(25, 35)')

    canvas
      .append('path')
      .attr(
        'd',
        'm157.46506,150.68801c10.08178,-11.92608 16.52659,-26.46317 18.57769,-41.90308c0.99495,-7.4918 0.93573,-15.0457 -0.14608,-22.44924',
      )
      .attr('stroke', colors(chartColors[3]))
      .attr('stroke-linecap', 'round')
      .attr('transform', 'translate(0.05, 1)')

    canvas
      .append('text')
      .text(`${dataSegments[3]}`)
      .attr('transform', 'translate(184, 90)')

    canvas
      .append('path')
      .attr(
        'd',
        'm147.61551,39.40647c6.26031,4.94859 11.71201,10.83816 16.16555,17.45181c2.272,3.37464 4.28431,6.93782 6.0117,10.66075c3.1877,6.87118 5.33662,14.13943 6.40924,21.56666',
      )
      .attr('stroke', colors(chartColors[2]))

    canvas
      .append('text')
      .text(`${dataSegments[2]}`)
      .attr('transform', 'translate(160, 35)')

    canvas
      .append('text')
      .text(`${_data.last_value}${valueType(_data.value_type)}`)
      .attr('transform', 'translate(160, 170)')

    const toolTipWrap = canvas.append('g')
    const toolTip = toolTipWrap.append('rect').attr('pointer-events', 'none')
    const toolTipText = toolTipWrap.append('text').attr('pointer-events', 'none')

    canvas
      .selectAll('path')
      .attr('fill', 'none')
      .attr('stroke-width', '0.5em')
      .attr('cursor', 'pointer')
      .on('mouseover', () => {
        const { target } = d3.event
        const x = d3.mouse(target)[0]
        const y = d3.mouse(target)[1]

        toolTip
          .attr('transform', `translate(${x + 5},${y - 10})`)
          .attr('width', '33px')
          .attr('height', '33px')
          .attr('fill', 'rgba(95, 101, 115, 0.9)')
          .attr('rx', '5')
          .attr('pointer-events', 'none')

        toolTipText
          .text('TTT')
          .attr('fill', '#fff')
          .attr('transform', `translate(${x + 11},${y + 10})`)
          .attr('pointer-events', 'none')
      })
      .on('mousemove', () => {
        const { target } = d3.event
        const x = d3.mouse(target)[0]
        const y = d3.mouse(target)[1]

        toolTip.attr('transform', `translate(${x + 5},${y - 10})`)
        toolTipText.attr('transform', `translate(${x + 11},${y + 10})`)
      })
      .on('mouseout', () => {
        toolTip.attr('fill', 'transparent')
        toolTipText.text('test').attr('fill', 'transparent')
      })

    canvas
      .selectAll('text')
      .attr('font-family', 'Roboto')
      .attr('font-style', 'normal')
      .attr('font-weight', 'normal')
      .attr('font-size', '0.8em')
      .attr('line-height', '0.8em')
      .attr('fill', '#ffffff')
  }

  const doValues = color => {
    const currentValue = wrapper.append('div')

    currentValue.attr('class', 'SCh__legendary')

    currentValue
      .append('p')
      .attr('class', 'SCh__value')
      .text(`${_data.value}${valueType(_data.value_type)}`)
      .attr('style', `color: ${color}`)

    currentValue
      .append('p')
      .attr('class', 'SCh__name')
      .text(names(_data.name))
      .attr('style', `color: ${color}`)
  }

  const doSpeedometer = segLength => {
    switch (segLength) {
      case 5:
        return fiveSegments()
      case 4:
        return fourSegments()
      case 3:
        return threeSegments()
      default:
        break
    }
  }

  const doContent = () => {
    doStroke()
    doSpeedometer(segmentsLength)
    doArrow(_data.value)
    doValues(colors(chartColors[variableForSegmentDetection - 1]))
  }

  return <React.Fragment>{doContent()}</React.Fragment>
}

export default Speedometer
