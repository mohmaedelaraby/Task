import React from 'react'
import PageContent from '../components/Content/PageContent'
import SideBar from '../components/Layout/side-bar/SideBar'
import './home.scss'


function Home() {
  return (
    <>

    <div className="homepage">
    <SideBar/>
    <PageContent/>
 
    </div>


    </>
  )
}

export default Home