import './OrderItem.scss';
import Counter from '../../../../components/Counter/Counter';
import pl from '../../../../assets/prod-pl.png';
import { NumericFormat } from 'react-number-format';
import { useEffect, useState } from 'react';
import { addItemToBasket, removeItemFromBasket } from '../../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import {CloseOutlined} from '@ant-design/icons';

const OrderItem = ({count, name, image, price, articul}) => {
    const basketList = useSelector(state => state);
    const dispatch = useDispatch();
    const [localCount, setLocalCount] = useState(count);

    useEffect(() => {
        setLocalCount(basketList?.find(item => item.name == name)?.count ? basketList?.find(item => item.name == name)?.count : 0)
        
    }, [basketList])

    useEffect(() => {
        
        if(localCount < 1) {
            handleDeleteItem()
        }
    }, [localCount])

    
    

    const handleDec = () => {
        if(localCount == 1) {
            handleDeleteItem()
        }
        if(localCount > 1) {
            
            dispatch(addItemToBasket({
                image: image,
                name: name,
                count: localCount - 1,
                price: price,
                articul: articul
            }))
        } else {
            return
        }
    }

    const handleInc = () => {
        if(localCount < 20) {
            
            dispatch(addItemToBasket({
                image: image,
                name: name,
                count: localCount + 1,
                price: price,
                articul:articul
    
            }))   
        } else {
            return;
        }
    }

    const handleDeleteItem = () => {
        dispatch(removeItemFromBasket({
            image: image,
            name: name,
            count: localCount,
            price: price,
            articul: articul
        }))
    }



    return (
        <div className="OrderItem">
            <div className="OrderItem__remove" onClick={handleDeleteItem}><CloseOutlined /></div>
            <div className="OrderItem__img">
                {image ? (
                    <img src={image} alt="" />
                ): (
                    <img src={pl} alt=""/>
                )}
            </div>
            <div className="OrderItem__body">
                
                <div className="OrderItem__body_name">{name}</div>
                <div className="OrderItem__body_action">
                    <Counter value={localCount} dec={handleDec} inc={handleInc}/>
                    <div className="OrderItem__body_action_price">
                        <NumericFormat value={price} suffix={'₽'} thousandSeparator={' '} thousandsGroupStyle='thousand' readOnly/>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default OrderItem;