import { Modal } from 'antd';
import './Basket.scss';
import {CloseOutlined} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import { NumericFormat } from 'react-number-format';
import EmptyList from '../Placeholders/EmptyList/EmptyList';
import BasketItem from './components/BasketItem/BasketItem';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const _ = require('lodash');


const Basket = ({visible, close, list}) => {
    const [randomList, setRandomList] = useState([])
    const basketList = useSelector(state => state);
    const [total, setTotal] = useState(0);
    const nav = useNavigate();
    const [localList, setLocalList] = useState([]);



    useEffect(() => {
        setLocalList(basketList);
        let countTotal = basketList?.map(item => item.price * item.count);
        setTotal(_.sum(countTotal))
    }, [basketList])


    const orderBasket = () => {
        nav('/order')
        close();
    }


    return (
        <Modal width={835} className="Basket" open={visible} onCancel={close}>
            <div className="Basket__body">
                <div className="Basket__body_top">
                    <div className="Basket__body_top_name">Корзина</div>
                    <div className="Basket__body_top_close" onClick={close}><CloseOutlined/></div>
                </div>
                <div className="Basket__body_main">
                    <div className="Basket__body_main_list">
                        {
                            localList?.length > 0 ? (
                                localList.map((item, index) => (
                                    <BasketItem
                                        name={item.name}
                                        count={item.count}
                                        price={item.price}
                                        image={item.image}
                                        key={index}
                                        articul={item.articul}
                                        />
                                ))
                                
                            ) : (
                                <EmptyList text={'Ничего не выбрано'}/>
                            )
                        }
                        
                        
                    </div>
                    {
                        localList?.length > 0 ? (
                            <div className="Basket__body_main_action">
                                <div className="Basket__body_main_action_value">
                                Итого: 
                                <span>
                                    <NumericFormat readOnly thousandSeparator={' '} thousandsGroupStyle={'thousand'} value={total} suffix={'₽'}/>
                                </span>
                                </div>
                                <div className="Basket__body_main_action_btns">
                                    <div className="Basket__body_main_action_btns_item">
                                        <Button onClick={orderBasket} text={'Оформить заказ'} variant={'warning'}/>
                                    </div>
                                    <div className="Basket__body_main_action_btns_item">
                                        <Button onClick={close} text={'Продолжить покупки'} variant={'warning-tr'}/>
                                    </div>
                                </div>
                            </div>
                        ) : null
                    }
                    
                </div>
            </div>
        </Modal>
    )
}

export default Basket;