import React, { useState, useEffect } from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import DetailsTable from './DetailsTable'
import ProvinceSelector from '../../Selectors/ProvinceSelector'
import { Row, Col } from 'react-bootstrap'

const generateOptions = (data, selectedCountries, setSelectedCountry) => {
  var type1 = []
  var type2 = []
  var type3 = []
  var type4 = []

  data.map((province) => {
    province.houseTypes.map((type) => {
      if (type.houseTypeID === 1) {
        type1.push(type.quantity)
      }
      if (type.houseTypeID === 2) {
        type2.push(type.quantity)
      }
      if (type.houseTypeID === 3) {
        type3.push(type.quantity)
      }
      if (type.houseTypeID === 4) {
        type4.push(type.quantity)
      }
    })
  })

  return {
    chart: {
      type: 'bar',
    },
    title: {
      text: 'Distribution of property categories in Vietnamese provinces',
    },
    xAxis: {
      categories: selectedCountries,
    },
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
    },
    legend: {
      reversed: true,
    },
    colors: ['#fd94a1', '#94d5fd', '#455392', '#ff967c'],
    plotOptions: {
      series: {
        stacking: 'normal',
      },
      bar: {
        events: {
          click: function (event) {
            setSelectedCountry(findProvince(event.point.category, data))
          },
        },
      },
    },
    series: [
      {
        name: 'Apartment',
        data: type4,
      },
      {
        name: 'Commerce',
        data: type3,
      },
      {
        name: 'House',
        data: type2,
      },
      {
        name: 'Land',
        data: type1,
      },
    ],
  }
}
const findProvince = (pr, data) => {
  const province = data.find((p) => p.name === pr)
  return province
}
export default function StackBarChart({ data }) {
  const [options, setOptions] = useState([])
  const [selectedCountries, setSelectedCountries] = useState(['Hồ Chí Minh'])
  const [selectedCountry, setSelectedCountry] = useState(
    findProvince('Hồ Chí Minh', data)
  )

  const handelSelectorChange = (event) => {
    setSelectedCountries(event.target.value)
  }
  useEffect(() => {
    if (selectedCountries && data) {
      const list = []
      selectedCountries.map((province) => {
        const selectProvince = data.find((c) => c.name === province)
        list.push(selectProvince)
      })
      setOptions(generateOptions(list, selectedCountries, setSelectedCountry))
    }
  }, [selectedCountries, data])

  if (!data) {
    return <h1>Loading...</h1>
  }
  return (
    <div>
      <Row>
        <Col md={8} className='white-background py-3'>
          {data && (
            <ProvinceSelector
              value={selectedCountries}
              handleChange={handelSelectorChange}
              countries={data}
            ></ProvinceSelector>
          )}
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
          ></HighchartsReact>
        </Col>
        <Col md={4} className='pe-0'>
          <DetailsTable selectedCountry={selectedCountry}></DetailsTable>
        </Col>
      </Row>
    </div>
  )
}
