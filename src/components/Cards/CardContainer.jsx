import React from 'react'
import plus from '../../assets/images/plus.svg'
import { cardsItems } from '../../Data'
import CardComponent from './CardComponent'
import './cards.scss'

function CardContainer() {
  return (
    <div className="cards__container">
        <div className="cards__container__header">

            <div className="cards__container__header__left"> 4 Challenges </div>

            <div className="cards__container__header__right">
                <span className='cards__container__header__right__text'> Create New Challenge </span>
                <img src={plus} alt="plus" className='cards__container__header__right__icon' />
            </div>

        </div>
        <div className="cards__container__body">
          {cardsItems.map((item,i)=>(
            <CardComponent card={item} key={i}/>
          ))
            
          }
        </div>
    </div>
  )
}

export default CardContainer