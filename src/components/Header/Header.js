import './Header.scss';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png'
import {
    PhoneFilled,
    ShoppingCartOutlined
  } from '@ant-design/icons';
import Navigation from '../Navigation/Navigation';
import Search from '../Search/Search';
import IconButton from '../IconButton/IconButton';
import Basket from '../Basket/Basket';
import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import Mobmenu from '../Mobmenu/Mobmenu';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const _ = require('lodash');


const Header = () => {
    const [basketVis, setBasketVis]=useState(false)
    const basketList = useSelector(state => state);
    const [total, setTotal] = useState(0);
    const location = useLocation();

    const [mobmenu, setMobmenu] = useState(false)
    const menu = useRef();

    useEffect(() => {
        let countTotal = basketList?.map(item => item.count);
        setTotal(_.sum(countTotal))
    }, [basketList])

    useEffect(() => {
        setMobmenu(false)
    }, [location])

    useEffect(() => {
        if(mobmenu) {
            disableBodyScroll(menu)
        } else {
            enableBodyScroll(menu)
        }
    }, [mobmenu])
    const showBasket = () => {
        setBasketVis(true)
    }

    const hideBasket = () => {
        setBasketVis(false)
    }

    const handleMobileMenu = (e) => {
        setMobmenu(!mobmenu);
    }


    return (
    
        <div ref={menu} className="Header">
            <Mobmenu active={mobmenu}/>
            <div className="Header__in">
                    <div className="Header__top">
                        <div className="container">
                            <div className="Header__top_in">
                                <Link to={'/'} className="Header__logo">
                                    <img src={'https://i.ibb.co.com/mtpJCsX/Group-13.png'} alt="KeyPumps"/>
                                </Link>
                                <div className="Header__info">
                                    <div className="Header__info_item">
                                        <div className="Header__info_item_name">Адресс:</div>
                                        <div className="Header__info_item_value">Россия, Сочи, Ленина, 298Б 
помещение 48Н, офис 4</div>
                                    </div>
                                    <div className="Header__info_item">
                                        <div className="Header__info_item_name">Время работы:</div>
                                        <div className="Header__info_item_value">10:00 - 18:00</div>
                                    </div>
                                </div>
                                <a href="tel:+79886526888" className="Header__tel">
                                    <span className="Header__tel_icon"><PhoneFilled /></span>
                                    <span className="Header__tel_val">+7 (988) 652 68 88</span>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="Header__main">
                        <div className="container">
                            <div className="Header__main_in">
                                <button onClick={handleMobileMenu} className={"Header__burger " + (mobmenu ? 'active' : '')}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                                <div className="Header__nav">
                                    {/* Navigation */}
                                    <Navigation/>
                                </div>
                                <div className="Header__search">
                                    {/* Search */}
                                    <Search/>
                                </div>
                                <div className="Header__action">
                                    <Basket list={basketList} close={hideBasket} visible={basketVis}/>
                                    <div onClick={showBasket} className="Header__action_item">
                                        {
                                            total !=  0 ? (
                                                <div className="Header__action_item_not">
                                                    {total}
                                                </div>
                                            ) : null
                                        }
                                        
                                        <IconButton afterIcon={<ShoppingCartOutlined />} text={'Корзина'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
        </div>
    )
}

export default Header;
