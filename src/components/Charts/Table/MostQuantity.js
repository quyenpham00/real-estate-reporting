import React from 'react'

export default function MostQuantity({ data }) {
  data.sort((a, b) => b.count - a.count)
  data = data.slice(0, 5)
  return (
    <div className='quantity-table-container '>
      <p className='fw-bold fs-5 title'>
        Top 5 provinces with the largest number of properties being sold
      </p>
      <table className='table-borderless table '>
        <thead>
          <th>Province</th>
          <th>Number of properties</th>
        </thead>
        {data.map((item) => {
          return (
            <tr>
              <td>
                <p className='m-0'>{item.name}</p>
              </td>
              <td>
                <p className='m-0'>{item.count}</p>
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}
