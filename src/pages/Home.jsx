import React from 'react'
import PageContent from '../components/Content/PageContent'
import SideBar from '../components/Layout/side-bar/SideBar'
import './home.scss'


function Home() {
  return (
    <>
    {/* <div className="container-fluid ">
      <div className="row">
        <div className="col-lg-3">    <SideBar/></div>
        <div className="col-lg-9">   <Navbar></Navbar></div>
      </div>
    </div> */}

    <div className="homepage">
    <SideBar/>
    <PageContent/>
 
    </div>


    </>
  )
}

export default Home