import React from 'react'
import Nav from './Nav'
import Opening from './Opening'
import UpcomingList from './UpcomingList'
import Footer from './Footer'

const FrontPage = () => {
  return (
    <>
        <Nav></Nav>
        <Opening></Opening>
        <UpcomingList/>
        <Footer></Footer>
    </>
  )
}

export default FrontPage