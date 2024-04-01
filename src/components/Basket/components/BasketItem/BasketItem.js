import './BasketItem.scss';
import { useState, useEffect } from 'react';
import Counter from '../../../Counter/Counter';
import {DeleteOutlined} from '@ant-design/icons';
import { NumericFormat } from 'react-number-format';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToBasket, removeItemFromBasket } from '../../../../store/actions';
const MIN_VAL = 0;
const MAX_VAL = 100;


const BasketItem = ({name, count, price, image, articul}) => {
    // const [itemCount, setItemCount] = useState(count)
    const [itemCount, setItemCount] = useState(count);
    const dispatch = useDispatch();
    const basketList = useSelector(state => state);

    useEffect(() => {
        setItemCount(basketList?.find(item => item.name == name)?.count ? basketList?.find(item => item.name == name)?.count : 0)
        
    }, [basketList])

    useEffect(() => {
        
        if(itemCount < 1) {
            handleDeleteItem()
        }
    }, [itemCount])

    
    

    const handleDec = () => {
        if(itemCount == 1) {
            handleDeleteItem()
        }
        if(itemCount > 1) {
            
            dispatch(addItemToBasket({
                image: image,
                name: name,
                count: itemCount - 1,
                price: price,
                articul: articul
            }))
        } else {
            return
        }
    }

    const handleInc = () => {
        if(itemCount < 20) {
            
            dispatch(addItemToBasket({
                image: image,
                name: name,
                count: itemCount + 1,
                price: price,
                articul: articul
    
            }))   
        } else {
            return;
        }
    }

    const handleDeleteItem = () => {
        dispatch(removeItemFromBasket({
            image: image,
            name: name,
            count: itemCount,
            price: price,
            articul: articul
        }))
    }
        
    

    return (
        <div className="BasketItem">
            <div className="BasketItem__img">
                {
                    image ? (
                        <img src={image} alt="" />
                    ) : null
                }
            </div>
            <div className="BasketItem__body">
                <div className="BasketItem__body_top">
                    <div className="BasketItem__body_top_name">{name}</div>
                    <button onClick={handleDeleteItem} className="BasketItem__body_top_delete">
                        
                        <span className="BasketItem__body_top_delete_text">
                        Удалить
                        </span>
                        <DeleteOutlined />
                    </button>
                </div>
                <div className="BasketItem__body_action">
                    
                    <Counter dec={handleDec} inc={handleInc} value={itemCount}/>
                    <div className="BasketItem__body_action_price">
                        <NumericFormat readOnly value={price} suffix={'₽'} thousandSeparator={' '} thousandsGroupStyle={'thousand'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketItem;