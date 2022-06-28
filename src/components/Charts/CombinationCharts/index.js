import React, { useEffect, useState } from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'

const generateOptions = (data) => {
  data = data.slice(0, 4)

  return {
    chart: {
      border: 'solid 1px #f1f1f1',
      borderRadius: '0.5rem',
      backgroundColor: '#f4f5f9',
      zoomType: 'xy',
    },
    title: {
      text: 'Average Price and Quantity of Property Categories in Vietnam',
    },

    xAxis: [
      {
        categories: ['Land', 'House', 'Commerce', 'Apartment'],
        crosshair: true,
      },
    ],
    yAxis: [
      {
        // Primary yAxis
        labels: {
          // format: '{value}°C',
          style: {
            color: Highcharts.getOptions().colors[1],
          },
        },
        title: {
          text: 'Average Price',
          style: {
            color: Highcharts.getOptions().colors[1],
          },
        },
      },
      {
        // Secondary yAxis
        title: {
          text: 'Quantity',
          style: {
            color: Highcharts.getOptions().colors[0],
          },
        },
        labels: {
          // format: '{value} VND',
          style: {
            color: Highcharts.getOptions().colors[0],
          },
        },
        opposite: true,
      },
    ],
    tooltip: {
      shared: true,
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      x: 120,
      verticalAlign: 'top',
      y: 100,
      floating: true,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || // theme
        'rgba(255,255,255,0.25)',
    },
    series: [
      {
        name: 'Quantity',
        type: 'column',
        yAxis: 1,
        data: data.map((item) => item.quantity),
        tooltip: {
          valueSuffix: '',
        },
      },
      {
        name: 'Average Price',
        type: 'spline',
        data: data.map((item) => item.averagePrice),
        tooltip: {
          valueSuffix: ' VND',
        },
      },
    ],
  }
}

export default function CombinationChart({ data }) {
  const [options, setOptions] = useState()
  useEffect(() => {
    if (data) {
      setOptions(generateOptions(data))
    }
  }, [data])

  return (
    <div className='my-3'>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      ></HighchartsReact>
    </div>
  )
}
