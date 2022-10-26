import React, { useEffect, useState } from 'react'
import './side-bar.scss'
import logo from '../../../assets/images/logo.svg'
import menu from '../../../assets/images/menu.svg'
import cancel from '../../../assets/images/cancel-circle.svg'
import { sidebarItems } from '../../../Data'




function SideBar() {
    // eslint-disable-next-line
    const [selected, setSelected] = useState(false);
    const [openSidebar, setopenSidebar] = useState(0);


    function useWindowDimensions() {

        const hasWindow = typeof window !== 'undefined';

        function getWindowDimensions() {
            const width = hasWindow ? window.innerWidth : null;
            const height = hasWindow ? window.innerHeight : null;
            return {
                width,
                height,
            };
        }

        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

        useEffect(() => {
            if (hasWindow) {
                function handleResize() {
                    setWindowDimensions(getWindowDimensions());
                }

                window.addEventListener('resize', handleResize);
                return () => window.removeEventListener('resize', handleResize);
            }
        }, [hasWindow]);

        return windowDimensions;
    }

    const { height, width } = useWindowDimensions();
    return (
        <>

            {width < 427 ? (<div className='menu-icon' onClick={() => {
                setopenSidebar(1)
            }}>
                <img src={menu} alt="menu" className='menu-icon-img' />
            </div>) : (<div></div>)}


            <div className={openSidebar === 0 && width < 427 ? "sidebar non-display" : "sidebar"}>
                <div className="sidebar__container">
                    <div className="sidebar__logo">
                        <img src={logo} alt="logo" className='sidebar__logo__img' />
                        {width < 427 ? (<div className='sidebar__logo__closeicon' onClick={() => {
                            setopenSidebar(0)
                        }}>
                            <img src={cancel} alt="menu" className='sidebar__logo__closeicon__img' />
                        </div>) : (<div></div>)}
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