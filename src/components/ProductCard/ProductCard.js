import './ProductCard.scss';
import Button from '../Button/Button';
import { message, Tabs } from 'antd';
import { NumericFormat } from 'react-number-format';

import Chars from './components/Chars';
import { Formik, Form } from 'formik';
import { useEffect } from 'react';
import Descr from './components/Descr';
import {Modal} from 'antd';

import {Swiper, SwiperSlide} from 'swiper/react';
import { Thumbs } from 'swiper';

import {Collapse} from 'antd';
import Counter from '../Counter/Counter';
import { useState } from 'react';
import {CloseOutlined} from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromBasket, addItemToBasket } from '../../store/actions';
import pl from '../../assets/prod-pl.png';
import dataService from '../../services/dataService';


const ds = new dataService();



const {Panel} = Collapse;


const FastOrder = ({visible, close}) => {
    const [data, setData] = useState({});

    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [btn, setBtn] = useState(false)


    const handleSubmit = (e) => {
        console.log(e.target.name)

        if(e.target.name == 'name') {
            setName(e.target.value);
        }

        if(e.target.name == 'tel') {
            setTel(e.target.value)
        }
    }

    useEffect(() => {
        if(name == '') {
            setBtn(true);
        } else {
            setBtn(false)
        }
        if(tel == '') {
            setBtn(true)
        } else {
            setBtn(false)
        }

    }, [name, tel])

    return (
        <Modal width={835} onCancel={close} centered className='FastOrder' open={visible}>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                }}
                validate={(values) => {
                    const errors = {};
                    if(!values.name) {
                        errors.name = 'Обьязательное поле'
                    }
                    if(!values.email) {
                        errors.email = 'Обьязательное поле'
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                   
                    ds.fb(values).then(res => {
                        console.log(res)
                        if(!res) {
                            message.error('Произошла ошибка, повторите позже')
                        }
                    })
                    .finally(_ => setSubmitting(false))
                }}>
                {({values,errors,touched,handleBlur,handleChange, isSubmitting}) => (
                    <Form
                        className='FastOrder__body'>
                            <div className="FastOrder__body_close" onClick={close}><CloseOutlined /></div>
                                <div className="FastOrder__body_head">Быстрый заказ</div>
                                <div className="FastOrder__body_text">Введите номер свой телефона и мы с Вами свяжимся</div>
                                <div className="FastOrder__body_rw">
                                    <div className="FastOrder__body_item FastOrder__body_item-input">
                                        <input 
                                            name='name' 
                                            value={values.name} 
                                            onChange={handleChange} 
                                            onBlur={handleBlur}
                                            type="text" 
                                            placeholder='Ваше имя'/>
                                        <div style={{color: 'red'}}>
                                        {touched.name && errors.name ? errors.name : null}
                                        </div>
                                        
                                    </div>
                                    <div className="FastOrder__body_item FastOrder__body_item-input">
                                        <input 
                                            name='email' 
                                            value={values.email} 
                                            onChange={handleChange} 
                                            onBlur={handleBlur}
                                            type="email" 
                                            placeholder='Ваш e-mail'/>
                                        <div style={{color: 'red'}}>
                                        {touched.email && errors.email ? errors.email : null}
                                        </div>
                                        
                                    </div>
                                    <div className="FastOrder__body_item FastOrder__body_item-btn">
                                        <Button 
                                            type={'submit'} 
                                            load={isSubmitting ? true : false} text={'Отправить'} variant={'warning'}/>
                                    </div>
                                </div>
                    </Form>
                )}

            </Formik>
           

        </Modal>
    )
}


const ProductCard = ({
    data
}) => {
    const dispatch = useDispatch();
    const basketList = useSelector(state => state)

    const [count, setCount ] = useState(0)
    const [vis, setVis] = useState(false)
    const [thumbs, setThumbs] = useState(null);


    useEffect(() => {
        setCount(basketList?.find(item => item.name == data.title)?.count ? basketList?.find(item => item.name == data.title)?.count : 0)
    }, [basketList, data])



    const decHandle = () => {
        if(count == 0) {
            dispatch(removeItemFromBasket({
                image: data?.postImages?.photosLinks[0],
                name: data.title,
                count: count,
                price: data.price
            }))
        }
        if(count > 0) {
            
            dispatch(addItemToBasket({
                image: data?.postImages?.photosLinks[0],
                name: data.title,
                count: count - 1,
                price: data.price
            }))
            
        } else {
            return;
        }
    }

    const incHandle = () => {
        if(count < 20) {
            
            dispatch(addItemToBasket({
                image: data?.postImages?.photosLinks[0],
                name: data.title,
                count: count + 1,
                price: data.price
    
            }))
        } else {
            return;
        }
    }

    const handleFastOrder = () => {
        setVis(true)
    }

    const closeFastOrder = () => {
        setVis(false)
    }

 
    return (
        <div className="ProductCard">
            <div className="ProductCard__main">
                <div className="ProductCard__main_gallery">
                    <Swiper
                        modules={[Thumbs]}
                        className='ProductCard__main_gallery_slider'>
                            {
                                data?.postImages?.photosLinks?.length > 0 ? (
                                    data?.postImages?.photosLinks.map((item, index) => (
                                        <SwiperSlide
                                            key={index}
                                            className='ProductCard__main_gallery_slider_sl'>
                                            <img src={item} alt=""/>
                                        </SwiperSlide>
                                    ))
                                ) : (
                                    <SwiperSlide className='ProductCard__main_gallery_slider_sl'>
                                        <img src={pl} alt="" />
                                    </SwiperSlide>
                                )
                            }
                    </Swiper>
                    <Swiper
                        modules={[Thumbs]}
                        slidesPerView={3}
                        spaceBetween={5}
                        watchSlidesProgress
                        onSwiper={setThumbs}
                        className='ProductCard__main_gallery_thumbs'>
                        {
                            data?.postImages?.photosLinks?.length > 0 ? (
                                data?.postImages?.photosLinks.map((item, index) => (
                                    <SwiperSlide
                                        key={index}
                                        className='ProductCard__main_gallery_thumbs_sl'>
                                        <img src={item} alt=""/>
                                    </SwiperSlide>
                                ))
                            ) : null
                        }
                    </Swiper>
                </div>
                <div className="ProductCard__main_ex">
                    <Collapse
                        expandIconPosition='end'
                        className="ProductCard__main_ex_acc">
                        <Panel header={"Оплата"}>
                            <div className="ProductCard__main_ex_acc_text">
                                Оплата при получении товара, Картой онлайн, Google Pay, Акционная оплата картой Visa, Безналичными для юридических лиц, Безналичными для физических лиц, Apple Pay, PrivatPay, Оплата картой в отделении
                            </div>
                        </Panel>
                        <Panel header={"Монтаж и доставка"}>
                            <div className="ProductCard__main_ex_acc_text">
                            Оплата при получении товара, Картой онлайн, Google Pay, Акционная оплата картой Visa, Безналичными для юридических лиц, Безналичными для физических лиц, Apple Pay, PrivatPay, Оплата картой в отделении
                            </div>

                        </Panel>
                        <Panel header={"Гарантии и выгода"}>
                            <div className="ProductCard__main_ex_acc_text">
                            Оплата при получении товара, Картой онлайн, Google Pay, Акционная оплата картой Visa, Безналичными для юридических лиц, Безналичными для физических лиц, Apple Pay, PrivatPay, Оплата картой в отделении
                            </div>

                        </Panel>
                    </Collapse>
                </div>
            </div>


            <div className="ProductCard__info">
                <h3 className="ProductCard__info_name">
                    {data.title}
                </h3>
                <div className="ProductCard__info_price">
                    <div className="ProductCard__info_price_main">
                        
                        {/* <NumericFormat 
                            readOnly
                            value={data?.price} 
                            thousandsGroupStyle={'thousand'} 
                            thousandSeparator={' '}
                            suffix={'₽'}/> */}
                        Цена по запросу
                    </div>
                    {
                        data?.initialPrice ? (
                            <div className="ProductCard__info_price_old">
                                {data.initialPrice}
                                <NumericFormat
                                    readOnly
                                    value={data?.initialPrice}
                                    thousandSeparator={' '}
                                    thousandsGroupStyle={'thousand'}
                                    suffix={'₽'}/>    
                            </div>
                        ) : null
                    }
                    
                </div>
                <div className="ProductCard__info_action">
                    <div className="ProductCard__info_action_item">
                        {
                            count === 0 ? (
                                <Button onClick={incHandle} variant={'warning'} text={'Купить'}/>
                            ) : (
                                <Counter dec={decHandle} inc={incHandle} value={count}/>
                            )
                        }
                        
                    </div>
                    <div className="ProductCard__info_action_item">
                        <Button onClick={handleFastOrder} variant={'success'} text={'Быстрая покупка'}/>
                    </div>
                    <FastOrder close={closeFastOrder} visible={vis}/>
                </div>
                <div className="ProductCard__info_content">
                    <Tabs
                        className='ProductCard__info_content_tabs'
                        defaultActiveKey='1'
                        items={[
                            {
                                label: 'Характеристики',
                                key: '1',
                                children: <Chars list={data?.details}/>
                            }, 
                            {
                                label: 'Описание',
                                key: '2',
                                children: <Descr descr={data?.description}/>
                            }, 
                            
                        ]}>

                    </Tabs>
                </div>
                <div className="ProductCard__main_ex ProductCard__main_ex-side">
                    <Collapse
                        expandIconPosition='end'
                        className="ProductCard__main_ex_acc">
                        <Panel header={"Оплата"}>
                            <div className="ProductCard__main_ex_acc_text">
                                Оплата при получении товара, Картой онлайн, Google Pay, Акционная оплата картой Visa, Безналичными для юридических лиц, Безналичными для физических лиц, Apple Pay, PrivatPay, Оплата картой в отделении
                            </div>
                        </Panel>
                        <Panel header={"Монтаж и доставка"}>
                            <div className="ProductCard__main_ex_acc_text">
                            Оплата при получении товара, Картой онлайн, Google Pay, Акционная оплата картой Visa, Безналичными для юридических лиц, Безналичными для физических лиц, Apple Pay, PrivatPay, Оплата картой в отделении
                            </div>

                        </Panel>
                        <Panel header={"Гарантии и выгода"}>
                            <div className="ProductCard__main_ex_acc_text">
                            Оплата при получении товара, Картой онлайн, Google Pay, Акционная оплата картой Visa, Безналичными для юридических лиц, Безналичными для физических лиц, Apple Pay, PrivatPay, Оплата картой в отделении
                            </div>

                        </Panel>
                    </Collapse>
                </div>
            </div>
        </div>

    )
}

export default ProductCard;