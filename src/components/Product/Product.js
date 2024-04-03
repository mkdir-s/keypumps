import './Product.scss';
import { useEffect, useState } from 'react';
import placeholder from '../../assets/prod-pl.png';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';
import IconButton from '../IconButton/IconButton';
import Counter from '../Counter/Counter';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';
import { NumericFormat } from 'react-number-format';
import { addItemToBasket, removeItemFromBasket } from '../../store/actions';
import pop from '../../assets/pop.jpeg';

const Product = ({
    category,
    description,
    details,
    displayMain,
    filters,
    id,
    inStock,
    initialPrice,
    price,
    linkedProducts,
    productImages,
    title,
    popular,
    discount,
    top,
    articul}) => {

    const dispatch = useDispatch();
    const basketList = useSelector(state => state);
    price = 'Цена по запросу';
    discount = 'Цена по запросу';
    const [dsc, setDsc] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(basketList?.find(item => item.name == title)?.count ? basketList?.find(item => item.name == title)?.count : 0)
        
    }, [basketList])

    useEffect(() => {
        if(discount !== null) {
            let tt = (price - discount) / price * 100;
            setDsc(tt)
        }
        
    }, [discount])

    const decHandle = () => {
        if(count == 0) {
            dispatch(removeItemFromBasket({
                image: productImages?.photosLinks[0],
                name: title,
                count: count,
                price: discount ? discount : price,
                articul: articul
            }))
        }
        if(count > 0) {
            
            dispatch(addItemToBasket({
                image: productImages?.photosLinks[0],
                name: title,
                count: count - 1,
                price: discount ? discount : price,
                articul: articul
            }))
            
        } else {
            return;
        }
    }

    const incHandle = () => {
        if(count < 20) {
            
            dispatch(addItemToBasket({
                image: productImages?.photosLinks[0],
                name: title,
                count: count + 1,
                price: discount ? discount : price,
                articul: articul

    
            }))
        } else {
            return;
        }
    }

    const link = "/catalog/" + encodeURIComponent(category) + "/" + encodeURIComponent(title) + "/" + id;

    return (
        <div className="Product">
            {
                top ? (
                    <div className="Product__badge">ТОП ПРОДАЖ</div>
                ) : null
            }
            
            {
                dsc ? (
                    <div className="Product__dsc">-{dsc}%</div>
                ) : null
            }

            <Link to={link} className="Product__img">
                {
                    productImages?.photosLinks?.length > 0 ? (
                        <img src={productImages?.photosLinks[0]} alt="" />
                    ) : (
                        <img src={placeholder} alt="" />
                    )
                }
            </Link>
            <div className="Product__body">
                <Link to={link} className="Product__body_name">{title}</Link>
                <div className="Product__body_action">
                <div className="Product__body_action_price"><NumericFormat readOnly thousandSeparator={' '} thousandsGroupStyle={'thousand'} value={discount ? discount : price} suffix={'₽'}/>
                    
                    {
                        discount ? (
                            <span><NumericFormat readOnly radioGroup='' thousandSeparator={' '} thousandsGroupStyle={'thousand'} value={discount ? price : null} suffix={'₽'}/></span>
                        ) : null
                    }
                    {price}
                    </div>
                    <div className="Product__body_action_bsk">
                        {
                            count === 0 ? (
                                <IconButton onClick={incHandle} afterIcon={<ShoppingCartOutlined/>} onlyIcon={true} variant={'warning'}/>
                            ) : (
                                <Counter dec={decHandle} inc={incHandle} value={count}/>
                            )
                        }
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;