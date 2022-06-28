import React from 'react'

export default function Banner() {
  return (
    <div className='banner-container row'>
      <div className='col-6'>
        <div className='banner-text'>
          <h1>Welcome to</h1>
          <div className='banner-highlight'>
            <h1>Flyhome</h1>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            iusto magni aspernatur libero impedit quas odit sapiente dolorem
            reiciendis eveniet, aperiam reprehenderit ducimus
          </p>
        </div>
      </div>
      <div className='col-6 banner-img'>
        <img src='./images/Scenes02.svg' alt='' />
      </div>
    </div>
  )
}
