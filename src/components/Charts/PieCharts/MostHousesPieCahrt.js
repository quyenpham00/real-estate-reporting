import React, { useEffect, useState } from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'


const generateOptions = (data, houseTypesReport) => {
  data.sort((a, b) => b.count - a.count)
  data = data.slice(0, 2)

  var all = houseTypesReport[4].quantity - data[0].count - data[1].count,
    houseTye1 =
      houseTypesReport[0].quantity -
      data[0].houseTypes.find((c) => c.houseTypeID === 1).quantity -
      data[1].houseTypes.find((c) => c.houseTypeID === 1).quantity,
    houseTye2 =
      data[0].houseTypes.find((c) => c.houseTypeID === 2).quantity -
      data[1].houseTypes.find((c) => c.houseTypeID === 2).quantity,
    houseTye3 =
      data[0].houseTypes.find((c) => c.houseTypeID === 3).quantity -
      data[1].houseTypes.find((c) => c.houseTypeID === 3).quantity,
    houseTye4 =
      data[0].houseTypes.find((c) => c.houseTypeID === 4).quantity -
      data[1].houseTypes.find((c) => c.houseTypeID === 4).quantity

  var other = {
    name: 'Other',
    count: all,
    houseTypes: [
      {
        houseTypeID: 1,
        quantity: houseTye1,
      },
      {
        houseTypeID: 2,
        quantity: houseTye2,
      },
      {
        houseTypeID: 3,
        quantity: houseTye3,
      },
      {
        houseTypeID: 4,
        quantity: houseTye4,
      },
    ],
  }

  data.push(other)

  const HouseType = ['', 'Land', 'House', 'Commerce', 'Apartment']
  var colors = [
      '#455392',
      '#1b85e8',
      '#ffbb94',
      '#1f2d48',
      '#fb7262',
      '#3dc482',
      '#8a4af3',
    ],
    categories = data.map((item) => item.name),
    data = data.map((item, index) => {
      return {
        y: item.count,
        color: colors[index],
        drilldown: {
          name: item.name,
          categories: item.houseTypes.map(
            (type) => HouseType[type.houseTypeID]
          ),
          data: item.houseTypes.map((type) => type.quantity),
        },
      }
    }),
    houseData = [],
    houseTypeData = [],
    i,
    j,
    dataLen = data.length,
    drillDataLen,
    brightness

  for (i = 0; i < dataLen; i += 1) {
    houseData.push({
      name: categories[i],
      y: data[i].y,
      color: data[i].color,
    })

    drillDataLen = data[i].drilldown.data.length
    for (j = 0; j < drillDataLen; j += 1) {
      brightness = 0.2 - j / drillDataLen / 5
      houseTypeData.push({
        name: data[i].drilldown.categories[j],
        y: data[i].drilldown.data[j],
        color: Highcharts.color(data[i].color).brighten(brightness).get(),
      })
    }
  }

  return {
    chart: {
      border: 'solid 1px #f1f1f1',
      borderRadius: '0.5rem',
      backgroundColor: '#f4f5f9',
      type: 'pie',
    },
    title: {
      text: 'Real Estate Market Shares by Province',
    },
    plotOptions: {
      pie: {
        shadow: false,
        center: ['50%', '50%'],
      },
    },
    tooltip: {
      valueSuffix: '%',
    },
    series: [
      {
        name: 'Quantity',
        data: houseData,
        size: '60%',
        dataLabels: {
          formatter: function () {
            return this.y > 5 ? this.point.name : null
          },
          color: '#ffffff',
          distance: -30,
        },
      },
      {
        name: 'Quantity',
        data: houseTypeData,
        size: '80%',
        innerSize: '60%',
        dataLabels: {
          // enabled: false,
          // formatter: function () {
          //   return this.y > 1
          //     ? '<b>' + this.point.name + ':</b> ' + this.y + '%'
          //     : null
          // },
        },
        id: 'versions',
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 400,
          },
          chartOptions: {
            series: [
              {},
              {
                id: 'versions',
                dataLabels: {
                  enabled: false,
                },
              },
            ],
          },
        },
      ],
    },
  }
}
export default function MostHousesPieChart({ data, houseTypesReport }) {
  const [options, setOptions] = useState([])
  useEffect(() => {
    setOptions(generateOptions(data, houseTypesReport))
  }, [data, houseTypesReport])
  if (!data && houseTypesReport) {
    return <h1>Loading...</h1>
  }
  return (
    <div className='my-3'>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      ></HighchartsReact>
    </div>
  )
}
