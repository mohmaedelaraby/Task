import React from 'react'
import './nav-bar.scss'
import profilePic from '../../../assets/images/accont.svg'
import down from '../../../assets/images/down.svg'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="navbar__container">
        <div className="navbar__container__title">Game Plan</div>
        <div className="navbar__container__account">
          <img src={profilePic} alt="profile pic" className='navbar__container__account__pp' />
          <div className="navbar__container__account__info">
            <div className="navbar__container__account__info__header">Account Switcher</div>
            <div className="navbar__container__account__info__title">
              <div className="navbar__container__account__info__title__text">Category 99</div>
              <div className="navbar__container__account__info__title__icon">
              <img src={down} alt="profile pic" className='navbar__container__account__info__title__icon__img' />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar