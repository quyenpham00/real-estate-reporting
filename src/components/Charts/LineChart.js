import React, { useEffect, useState } from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import { Button, Row, Col } from 'react-bootstrap'
import ProvinceSelector from '../Selectors/ProvinceSelector'

const generateOptions = (data, reportType) => {
  const series = data.map((country) => {
    return {
      name: country[0]?.name,
      data: country.map((item) => {
        const y = reportType === true ? item.quantity : item.averagePrice
        return { x: Date.parse(item.date), y: y }
      }),
    }
  })

  return {
    chart: {
      borderRadius: '0.5rem',
      height: 500,
    },
    title: {
      text:
        reportType === true
          ? 'Number of properties being sold in Vietnamese provinces'
          : 'Average property prices being sold in Vietnamese provinces',
    },
    xAxis: {
      type: 'datetime',
    },
    colors: ['#fb7262', '#3dc482', '#fe497e', '#23bdbd', '#8a4af3'],
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
      labels: {
        align: 'right',
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: series,
  }
}

export default function LineChart({ data, setListAPI, provinceDetails }) {
  const [options, setOptions] = useState([])
  const [reportType, setReportType] = useState(true)

  const [selectedCountryID, setSelectedCountryID] = useState(['Hồ Chí Minh'])
  const handelSelectorChange = (event) => {
    setSelectedCountryID(event.target.value)
  }
  useEffect(() => {
    if (selectedCountryID && data) {
      const list = []
      selectedCountryID.map((Province) => {
        const { name } = data.find((c) => c.name === Province)
        list.push(name)
      })
      setListAPI(list)
    }
  }, [selectedCountryID, data])

  useEffect(() => {
    const temp = provinceDetails.map((item) => {
      return item.data ? item.data : []
    })
    setOptions(generateOptions(temp, reportType))
  }, [provinceDetails, reportType])

  return (
    <div className='white-background pt-3 ps-1'>
      <Row>
        <Col md='6'>
          {data && (
            <ProvinceSelector
              value={selectedCountryID}
              handleChange={handelSelectorChange}
              countries={data}
            ></ProvinceSelector>
          )}
        </Col>
        <Col md='6' className='position-relative'>
          <div className='position-absolute custom-position-absolute '>
            <Button
              className='me-3 custom-btn'
              onClick={() => setReportType(true)}
            >
              Number of News
            </Button>
            <Button className='custom-btn' onClick={() => setReportType(false)}>
              Average Price
            </Button>
          </div>
        </Col>
      </Row>

      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      ></HighchartsReact>
    </div>
  )
}
