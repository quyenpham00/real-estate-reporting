import React, { useEffect, useState } from 'react'
import LineChart from './Charts/LineChart'
import MostHousesPieChart from './Charts/PieCharts/MostHousesPieCahrt'
import MostPriceTable from './Charts/Table/MostPriceTable'
import MostQuantity from './Charts/Table/MostQuantity'
import Map from './Charts/Map'
import StackBarChart from './Charts/StackBarChart'
import { useQuery, useQueries } from 'react-query'
import {
  getProvinces,
  getHousePerProvince,
  getHouseType,
  getHouseByDate,
} from '../apis'
import { Row, Col, Button } from 'react-bootstrap'
import CombinationChart from './Charts/CombinationCharts'

export default function Summary() {
  const [listLineChart, setListLineChart] = useState([])
  const [selectedTime, setSelectedTime] = useState('month')
  const [houseReport, setHouseReport] = useState()

  const { data: countriesReport } = useQuery('province', getProvinces)
  const provinceDetails = useQueries(
    listLineChart.map((province) => {
      return {
        queryKey: ['province', province],
        queryFn: () => getHousePerProvince(province),
      }
    })
  )

  const { data: houseTypesReport } = useQuery('housetype', getHouseType)
  useEffect(() => {
    getHouseByDate(selectedTime).then((res) => {
      setHouseReport(res)
      console.log(selectedTime)
      console.log(res)
    })
  }, [selectedTime])

  if (!countriesReport || !houseTypesReport || !houseReport) {
    return <h1>loading...</h1>
  }

  return (
    <>
      <Row className='my-5 first-component'>
        <Col md={8} className='ps-0 m-0'>
          <LineChart
            provinceDetails={provinceDetails}
            data={countriesReport}
            setListAPI={setListLineChart}
          ></LineChart>
        </Col>
        <Col md={4} className='white-background'>
          <div className='mt-2'>
            <Button
              className='custom-btn'
              onClick={() => setSelectedTime('date')}
            >
              Date
            </Button>
            <Button
              className='custom-btn mx-3'
              onClick={() => setSelectedTime('month')}
            >
              Month
            </Button>
            <Button
              className='custom-btn'
              onClick={() => setSelectedTime('year')}
            >
              Year
            </Button>
          </div>
          <Map countriesReport={houseReport}></Map>
        </Col>
      </Row>
      <Row className='my-5 p-3 orange-background'>
        <Col md={8}>
          <MostPriceTable data={countriesReport}></MostPriceTable>
        </Col>
        <Col md={4}>
          <MostQuantity data={countriesReport}></MostQuantity>
        </Col>
      </Row>
      <Row className='my-5 p-2 white-background'>
        <Col md={6}>
          <MostHousesPieChart
            data={countriesReport}
            houseTypesReport={houseTypesReport}
          ></MostHousesPieChart>
        </Col>
        <Col md={6}>
          {houseTypesReport && (
            <CombinationChart data={houseTypesReport}></CombinationChart>
          )}
        </Col>
      </Row>
      <Row className='my-5'>
        <Col md={12}>
          <StackBarChart data={countriesReport}></StackBarChart>
        </Col>
      </Row>
    </>
  )
}
