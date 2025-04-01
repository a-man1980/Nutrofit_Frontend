import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import JoinUs from '../components/JoinUs'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Header/>
        <SpecialityMenu/>
        <TopDoctors />
        <JoinUs />
    </div>
  )
}

export default Home