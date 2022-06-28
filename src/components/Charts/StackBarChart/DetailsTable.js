import React from 'react'

const colors = ['', '#ff967c', '#455392', '#94d5fd', '#fd94a1']
const HouseType = ['', 'Land', 'House', 'Commerce', 'Apartment']
export default function DetailsTable({ selectedCountry }) {
  if (!selectedCountry.houseTypes) {
    return <h1>Loading...</h1>
  }

  return (
    <div className='white-background h-100 w-100 p-3'>
      <h1 className='text-center fw-bold'> {selectedCountry.name}</h1>
      {selectedCountry.houseTypes.map((type) => {
        return (
          <div
            key={type.houseTypeID}
            className='card-details'
            style={{ backgroundColor: `${colors[type.houseTypeID]}` }}
          >
            <p>{HouseType[type.houseTypeID]}</p>
            <p>Quantity: {type.quantity}</p>
            <p>Average Price: {type?.averagePrice.toLocaleString()} VND</p>
          </div>
        )
      })}
    </div>
  )
}
