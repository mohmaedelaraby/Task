import React, { useState } from 'react'
import { pageItemsHorz } from '../../Data'
import CardContainer from '../Cards/CardContainer'
import Navbar from '../Layout/nav-bar/Navbar'
import Search from '../Search/Search'
import './page-content.scss'

function PageContent() {
  const [selected, setSelected] = useState(false);
  return (
    <>


      <div className="page_content">

        <div className="page_content_navbar">  <Navbar /></div>
        <div className="page_content_body">
          <div className="list-of-items">
            <div className="list-of-items__container">
              {
                pageItemsHorz.map((item, i) => (
                  <div className={`${selected === i ? "list-of-items__container__item active" : "list-of-items__container__item"}`} key={i} onClick={() => setSelected(i)}>{item}</div>
                ))
              }
            </div>
          </div>
          <div className="page_content_body__search">
            <Search />
          </div>

          
          <div className="page_content_body__cards">
            <CardContainer/>
          </div>
        </div>


      </div>

    </>
  )
}

export default PageContent