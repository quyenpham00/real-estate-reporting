import React from 'react'
import HighlightCard from './HighlightCard'
import { Row, Col } from 'react-bootstrap'
export default function Highlight({ report }) {
  const data = report && report.length ? report[report.length - 1] : []
  const summary = [
    {
      title: 'So ca nhiem',
      count: 200000,
      type: 'confirmed',
    },
    {
      title: 'Khoi',
      count: 200000,
      type: 'recovered',
    },
    {
      title: 'Tu vong',
      count: 200000,
      type: 'deaths',
    },
    {
      title: 'Tu vong',
      count: 200000,
      type: 'other',
    },
  ]
  return (
    <div>
      <Row>
        {summary.map((item, index) => {
          return (
            <Col sm={3} xs={12}>
              <HighlightCard
                key={index}
                title={item.title}
                count={item.count}
                type={item.type}
              ></HighlightCard>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}
