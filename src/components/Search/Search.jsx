import React from 'react'
import './search.scss'
import filter1 from '../../assets/images/filter2.svg'
import filter2 from '../../assets/images/filter.svg'
import down from '../../assets/images/down.svg'
import search from '../../assets/images/search.svg'

function Search() {
  return (
    <div className="search">
        <div className="search__container">
            <div className="search__container__filters">
                <div className="search__container__filters__item">
                    <div className="search__container__filters__item__icon">
                       <img src={filter1} alt="filter" />
                    </div>
                    <div className="search__container__filters__item__text">Filter</div>
                    <div className="search__container__filters__item__down">
                    <img src={down} alt="filter" className='search__container__filters__item__down__img' />
                    </div>
                </div>

                <div className="search__container__filters__item">
                    <div className="search__container__filters__item__icon">
                       <img src={filter2} alt="filter" />
                    </div>
                    <div className="search__container__filters__item__text">Sort</div>
                    <div className="search__container__filters__item__down">
                    <img src={down} alt="filter" className='search__container__filters__item__down__img' />
                    </div>
                </div>
            </div>
            <div className="search__container__input__container">
            <img src={search} alt="search icon" className='search__container__input__container__icon' />
            <input type="text" className='search__container__input__container__input' placeholder='Search' />
            </div>
    

           
        </div>
    </div>
  )
}

export default Search