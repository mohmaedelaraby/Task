import React from 'react'
import image from '../../assets/images/mushroom.svg'

function CardComponent({ card }) {
    return (
        <div className="card">
            <div className="card__container">
                <div className="card__container__header">

                    <img src={image} alt="mushroom" className='card__container__header__img' />
                    <div className="card__container__header__info">
                        <div className="card__container__header__info__title">{card.title}</div>
                        <div className="card__container__header__info__date">{card.date}</div>
                    </div>

                </div>

                <div className="card__container__body">
                    {card.content}
                </div>

                <div className="card__container__icons">

                    {
                        card.listOfIcons.map((item, i) => (
                            <div className={i===3? 'card__container__icons__item graybg':'card__container__icons__item'} key={i}>
                                <div className='card__container__icons__item__icon'>

                                <img src={item.Icon} alt="icon" className='card__container__icons__item__icon__img' />
                                </div>
                             
                                <span className='card__container__icons__item__text'> {item.Label}</span>
                            </div>
                        )
                        )
                    }



                </div>
            </div>
        </div>
    )
}

export default CardComponent