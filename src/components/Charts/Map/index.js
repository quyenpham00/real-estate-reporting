import React, { useState } from 'react'
import ReactTooltip from 'react-tooltip'
import SimpleMap from './SimpleMap'

export default function Map({ countriesReport }) {
  const [content, setContent] = useState('')

  return (
    <>
      <SimpleMap
        setContent={setContent}
        countriesReport={countriesReport}
      ></SimpleMap>
      <ReactTooltip>{content}</ReactTooltip>
    </>
  )
}
