import React, { memo } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps'
import { scaleLinear } from 'd3-scale'
import vnGeo from '../../../apis/vnGeo.json'

function SimpleMap({ setContent, countriesReport }) {
  const colorScale = scaleLinear()
    .domain([0, 6000])
    .range(['#ffedea', '#ff5233'])

  if (!countriesReport) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <ComposableMap
        data-tip=''
        projectionConfig={{ scale: 1800 }}
        width={435}
        height={435}
        style={{
          width: '100%',
          height: '90%',
          outline: 'none',
        }}
      >
        <ZoomableGroup center={[104, 15]}>
          <Geographies geography={vnGeo}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const d = countriesReport.find(
                  (s) => s.name === geo.properties.ten_tinh
                )
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={colorScale(d ? d.count : 0)}
                    style={{
                      default: {
                        outline: 'none',
                      },
                      hover: {
                        outline: 'none',
                      },
                      pressed: {
                        outline: 'none',
                      },
                    }}
                    onMouseEnter={() => {
                      const { name, count } = d
                      setContent(`${name} - ${count}`)
                    }}
                    onMouseLeave={() => {
                      setContent('')
                    }}
                  />
                )
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  )
}
export default memo(SimpleMap)
