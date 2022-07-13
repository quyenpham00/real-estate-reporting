import React from 'react'
import Summary from './components/Summary'
import NavbarCustom from './components/Header/Navbar'
import Sidebar from './components/Header/Sidebar'
import Banner from './components/Header/Banner'
import FooterCustom from './components/Footer'
function App() {
  return (
    <div className='App'>
      <NavbarCustom></NavbarCustom>
      {/* <Sidebar></Sidebar> */}
      <div className='container'>
        <Banner></Banner>
        <Summary></Summary>
      </div>
      <FooterCustom></FooterCustom>
    </div>
  )
}

export default App
