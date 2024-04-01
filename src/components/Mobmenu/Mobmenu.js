import './Mobmenu.scss';
import { Menu } from 'antd';
import { useState, useEffect } from 'react';
import dataService from '../../services/dataService';
import { Link } from 'react-router-dom';

const ds = new dataService();

function getItem(label, key, icon, children, type) {
    return {
      key,
      children,
      label,
      type,
    };
  }

  const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  

const Mobmenu = ({active}) => {
    const [openKeys, setOpenKeys] = useState(['sub1']);
    const [cats, setCats] = useState([]);

    useEffect(() => {
        ds.getCategories().then(res => {
            setCats(res.posts.sort((a, b) => a.order > b.order ? 1 : -1));
        })
    }, [])

    const items = [
        getItem(<Link to={'/'}>Главная</Link>, 'sub1', null, null),
        getItem('Каталог', 'sub2', null, cats.map((item, index) => {
          return getItem(<Link to={`/catalog/${item.title}`}>{item.title}</Link>, index + 1)
        })),
        getItem(<Link to={'/about'}>О нас</Link>, 'sub3', null, null),
        getItem(<Link to={'/faq'}>FAQ Вопрос - ответ</Link>, 'sub4', null, null),
        getItem(<Link to={'/delivery'}>Доставка и оплата</Link>, 'sub5', null, null),
        getItem(<Link to={'/articles'}>Статьи</Link>, 'sub6', null, null)
      ];

   
    

    const onOpenChange = (keys) => {
       
      const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
   
      if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setOpenKeys(keys);
      } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
    };


    return (
        <div className={"Mobmenu " + (active ? 'active' : '')}>
            <Menu mode={'inline'} onOpenChange={onOpenChange} openKeys={openKeys} items={items}/>
        </div>
    )
}

export default Mobmenu;