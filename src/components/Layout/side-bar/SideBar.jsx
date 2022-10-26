import React, { useState } from 'react'
import './side-bar.scss'
import logo from '../../../assets/images/logo.svg'
import { sidebarItems } from '../../../Data'




function SideBar() {
    // eslint-disable-next-line
    const [selected, setSelected] = useState(false);

    return (
        <>
            <div className="sidebar">
                <div className="sidebar__container">
                    <div className="sidebar__logo">
                        <img src={logo} alt="logo" className='sidebar__logo__img' />
                    </div>
                    <div className="sidebar__items">
                        <div className="sidebar__items__container">
                            { // eslint-disable-next-line
                                sidebarItems.map((item, i) => (
                                    <div key={i} className={`${selected === i ? " sidebar__items__container__item active" : "sidebar__items__container__item"}`} onClick={() => setSelected(i)}>

                                        <div className={
                                            `${selected === i ? " active" : ""}`
                                        }> </div>

                                        <div className="sidebar__items__container__item__icon">
                                            <img src={item.icon} alt="logo" className='sidebar__items__container__item__icon__img' />
                                        </div>

                                        <div className="sidebar__items__container__item__text">{item.name}</div>
                                    </div>
                                ))}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar