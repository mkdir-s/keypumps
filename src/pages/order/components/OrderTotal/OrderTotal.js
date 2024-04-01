import './OrderTotal.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Button from '../../../../components/Button/Button';
import Checkbox from '../../../../components/Checkbox/Checkbox';
import OrderItem from '../OrderItem/OrderItem';
import EmptyList from '../../../../components/Placeholders/EmptyList/EmptyList';
import { NumericFormat } from 'react-number-format';
const _ = require('lodash');


const OrderTotal = () => {
    const basketList = useSelector(state => state);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let countTotal = basketList?.map(item => item.price * item.count);
        setTotal(_.sum(countTotal))
    }, [basketList])

    return (
        <div className="OrderTotal">
            <div className="OrderTotal__top">
                Итого
            </div>
            <div className="OrderTotal__list">
                {
                    basketList?.length > 0 ? (
                        basketList.map((item, index) => (
                            <OrderItem
                                key={index}
                                count={item.count}
                                name={item.name}
                                image={item.image}
                                price={item.price}/>
                        ))
                    ) : (
                        <EmptyList text={'В корзине пусто'}/>
                    )
                }
                <div className="OrderTotal__list_total">
                    <div className="OrderTotal__list_total_name">К оплате:</div>
                    <div className="OrderTotal__list_total_value">
                        <NumericFormat
                            readOnly
                            value={total}
                            thousandSeparator={' '}
                            thousandsGroupStyle={'thousand'}
                            suffix={'₽'}/>
                    </div>
                </div>
            </div>
            <div className="OrderTotal__complect">
                <div className="OrderTotal__complect_name">Комплектация</div>
                <div className="OrderTotal__complect_ch">
                    <Checkbox
                        name={'complect'}
                        id={'complect'}
                        label={'Нужна установка'}
                        />
                </div>
            </div>
            <div className="OrderTotal__action">
                <Button  variant={'warning'} text={'Подтвердить заказ'} disabled={basketList?.length > 0 ? false : true}/>
            </div>
            <div className="OrderTotal__promo">
                <div className="OrderTotal__promo_name">Промокод</div>
                <button className="OrderTotal__promo_btn">Добавить</button>
            </div>
            <div className="OrderTotal__ex">
                Оформляя заказ, я принимаю условия <a href="#">пользовательського соглашения</a>
            </div>
        </div>
    )
}

export default OrderTotal;