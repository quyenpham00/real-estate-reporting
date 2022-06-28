import React from 'react'
export default function MostPriceTable({ data }) {
  data.sort((a, b) => b.averagePrice - a.averagePrice)
  data = data.slice(0, 5)
  return (
    <div className='table-container row'>
      <div className='col-md-6'>
        <img src='./images/Scenes01.svg' alt='' style={{ maxWidth: '450px' }} />
      </div>
      <div className='col-md-6 justify-content-center'>
        <p className='fw-bold fs-5 title'>
          Top 5 provinces with the highest average property price
        </p>
        <table className='table-borderless table '>
          <thead>
            <th>Province</th>
            <th>Average Price</th>
          </thead>
          {data.map((item) => {
            return (
              <tr>
                <td>
                  <p className='m-0'>{item.name}</p>
                </td>
                <td>
                  <p className='m-0'>
                    {item?.averagePrice.toLocaleString()} VND
                  </p>
                </td>
              </tr>
            )
          })}
        </table>
      </div>
    </div>
  )
}
