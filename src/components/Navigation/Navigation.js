import { Link, NavLink } from "react-router-dom";
import './Navigation.scss';
import { Dropdown, Menu } from "antd";
import { useEffect, useState } from "react";
import dataService from '../../services/dataService';
import pl from '../../assets/prod-pl.png';

const ds = new dataService();


const Navigation = () => {
    const [catalogList, setCatalogList] = useState([]);

    useEffect(() => {
      ds.getCategories().then(res => {
        
        setCatalogList(res.posts.sort((a, b) => a.order > b.order ? 1 : -1));
      })
    }, [])

    return (
        <nav className="Navigation">
            <ul className="Navigation__list">
                <li className="Navigation__item">
                    <NavLink to={'/'} className="Navigation__item_link">Главная</NavLink>
                </li>
                <li className="Navigation__item">
                    <Dropdown overlay={
                      <ul className="Navigation__menu">
                        {
                          catalogList && catalogList.length > 0 ? (
                            catalogList.map((item,index) => (
                              <li className="Navigation__menu_item" key={index}>
                                <NavLink to={`/catalog/${item.title}`}>{item.title}</NavLink>
                                <div className="Navigation__menu_item_img">
                                  {
                                    item.categoryImage?.photosLinks?.length > 0 ? (
                                      <img src={item.categoryImage?.photosLinks[0]} alt="" />
                                    ) : (
                                      <img src={pl} alt=""/>
                                    )
                                    
                                  }
                                  
                                </div>
                              </li>
                            ))
                          ) : null
                        }
                        
                      </ul> 
                    }>
                        <NavLink to={'/catalog'} className="Navigation__item_link Navigation__item_link-dr">Каталог</NavLink>
                    </Dropdown>
                </li>
                <li className="Navigation__item">
                    <NavLink to={'/about'} className="Navigation__item_link">О нас</NavLink>
                </li>
                <li className="Navigation__item">
                    <Dropdown overlay={
                      <ul className="Navigation__menu">
                        <li className="Navigation__menu_item"><NavLink to={'/faq'}>FAQ</NavLink></li>
                        <li className="Navigation__menu_item"><NavLink to={'/delivery'}>Доставка и оплата</NavLink></li>
                        <li className="Navigation__menu_item"><NavLink to={'/articles'}>Статьи</NavLink></li>
                      </ul>
                    }>
                        <div className="Navigation__item_link Navigation__item_link-dr">Еще</div>
                    </Dropdown>
                    
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;