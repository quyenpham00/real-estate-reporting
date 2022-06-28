import React, { useEffect } from 'react'
import Summary from './components/Summary'
import NavbarCustom from './components/Header/Navbar'
import Sidebar from './components/Header/Sidebar'
import Banner from './components/Header/Banner'
function App() {
  return (
    <div className='App'>
      <NavbarCustom></NavbarCustom>
      <Sidebar></Sidebar>
      <div className='main-container'>
        <Banner></Banner>
        <Summary></Summary>
      </div>
    </div>
  )
}

export default App
