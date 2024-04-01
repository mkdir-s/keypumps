import './OrderPage.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import OrderForm from './components/OrderForm/OrderForm';
import OrderTotal from './components/OrderTotal/OrderTotal';
import {motion} from 'framer-motion';
import { Formik, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import Radio from '../../components/Radio/Radio';
import Checkbox from '../../components/Checkbox/Checkbox';
import OrderItem from './components/OrderItem/OrderItem';
import EmptyList from '../../components/Placeholders/EmptyList/EmptyList';
import { NumericFormat } from 'react-number-format';
import Button from '../../components/Button/Button';
import dataService from '../../services/dataService';
import { message } from 'antd';
const _ = require('lodash');

const ds = new dataService()




const OrderPage = () => {
    const basketList = useSelector(state => state);
    const [total, setTotal] = useState(0);
    const [arts, setArts] = useState([]);
    

    useEffect(() => {
        let countTotal = basketList?.map(item => item.price * item.count);
        setTotal(_.sum(countTotal))
        setArts(basketList.map(item => item.articul))
    }, [basketList])





    

    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className="OrderPage">
            {/* <Breadcrumbs/> */}
            <div className="container">
                <div className="OrderPage__in">
                    <div className="OrderPage__head">
                    Оформление заказа
                    </div>
                    <Formik
                        initialValues={{
                            NAME: '', //имя
                            LAST_NAME: '', //familiya
                            PHONE: '', // telefon
                            EMAIL: '', //email
                            UF_CRM_1663688621868: 27, //otdelenie nomer
                            UF_CRM_1663688669703: '', //city
                            ADDRESS: '', //adress
                            UF_CRM_1663424366166: arts, //arrtikuly towarow
                            UF_CRM_1663688720594: 0, //nuzhna li ustanovka
                            UF_CRM_1663422176950: '' //promokod
                        }}
                        validate={values => {
                            const errors = {}

                            if(!values.ADDRESS) {
                                errors.ADDRESS = 'Обьязательное поле'
                            }
                            if(!values.EMAIL) {
                                errors.EMAIL = 'Обьязательное поле'
                            }
                            if(!values.LAST_NAME) {
                                errors.LAST_NAME = 'Обьязательное поле'
                            }
                            if(!values.NAME) {
                                errors.NAME = 'Обьязательное поле'
                            }
                            if(!values.PHONE) {
                                errors.PHONE = 'Обьязательное поле'
                            }
                            
                            if(!values.UF_CRM_1663688621868) {
                                errors.UF_CRM_1663688621868 = 'Обьязательное поле'
                            }
                            if(!values.UF_CRM_1663688669703) {
                                errors.UF_CRM_1663688669703 = 'Обьязательное поле'
                            }
                            return errors
                        }}
                        onSubmit={(values, {setSubmitting}) => {
                            
                            ds.order(values).then(res => {
                                console.log(res)
                                if(!res) {
                                    message.error('Не удалось подтвердить заказ, повторите позже')
                                }
                            }).catch(_ => {
                                
                                message.error('Не удалось подтвердить заказ, повторите позже')
                            }).finally(_ => setSubmitting(false))
                        }}>

                        {
                            ({isSubmitting, errors, touched, values, submitForm, handleChange, handleBlur}) => (
                                <Form
                                    className='OrderPage__body'>
                                    <div className="OrderPage__form">
                                        <div className="OrderForm">
                                            <div className="OrderForm__part">
                                                <div className="OrderForm__part_head">
                                                    1. Контактные данные
                                                </div>
                                                <div className="OrderForm__part_body">
                                                    <div className="OrderForm__part_body_row">
                                                        <div className="OrderForm__part_body_item">
                                                            <div className="OrderForm__part_body_item_input">
                                                                <div className="OrderForm__part_body_item_input_label">Фамилия</div>
                                                                <input 
                                                                    onBlur={handleBlur}
                                                                    onChange={handleChange} 
                                                                    value={values.LAST_NAME} 
                                                                    name='LAST_NAME' 
                                                                    type="text" 
                                                                    placeholder='Зайцев' />
                                                                <div style={{color: 'red'}}>
                                                                    {errors.LAST_NAME && touched.LAST_NAME ? errors.LAST_NAME : null}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="OrderForm__part_body_item">
                                                            <div className="OrderForm__part_body_item_input">
                                                                <div className="OrderForm__part_body_item_input_label">Имя</div>
                                                                <input 
                                                                    onBlur={handleBlur}
                                                                    name='NAME' 
                                                                    type="text" 
                                                                    placeholder='Михаил'
                                                                    onChange={handleChange}
                                                                    value={values.NAME} />
                                                                <div style={{color: 'red'}}>
                                                                    {errors.NAME && touched.NAME ? errors.NAME : null}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="OrderForm__part_body_row">
                                                        <div className="OrderForm__part_body_item">
                                                            <div className="OrderForm__part_body_item_input">
                                                                <div className="OrderForm__part_body_item_input_label">Телефон</div>
                                                                <input 
                                                                    onBlur={handleBlur}
                                                                    onChange={handleChange}
                                                                    value={values.PHONE}
                                                                    name='PHONE' 
                                                                    type="tel" 
                                                                    placeholder='+7 (966) 45 54 698' />
                                                                <div style={{color: 'red'}}>
                                                                    {errors.PHONE && touched.PHONE ? errors.PHONE : null}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="OrderForm__part_body_item">
                                                            <div className="OrderForm__part_body_item_input">
                                                                <div className="OrderForm__part_body_item_input_label">E-mail</div>
                                                                <input 
                                                                    onBlur={handleBlur}
                                                                    onChange={handleChange}
                                                                    value={values.EMAIL}
                                                                    name='EMAIL' 
                                                                    type="email" 
                                                                    placeholder='example@mail.ru' />
                                                                <div style={{color: 'red'}}>
                                                                    {errors.EMAIL && touched.EMAIL ? errors.EMAIL : null}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="OrderForm__part">
                                                <div className="OrderForm__part_head">
                                                    2. Доставка
                                                </div>
                                                <div className="OrderForm__part_body">
                                                    <div className="OrderForm__part_body_row">
                                                        <div className="OrderForm__part_body_item">
                                                            <div className="OrderForm__part_body_item_input">
                                                                <div className="OrderForm__part_body_item_input_label">Город</div>
                                                                <input 
                                                                    onBlur={handleBlur}
                                                                    onChange={handleChange}
                                                                    value={values.UF_CRM_1663688669703}
                                                                    name={'UF_CRM_1663688669703'}
                                                                    type="text" 
                                                                    placeholder='Город'/>
                                                                
                                                                <div style={{color: 'red'}}>
                                                                    {errors.UF_CRM_1663688669703 && touched.UF_CRM_1663688669703 ? errors.UF_CRM_1663688669703 : null}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="OrderForm__part_body_item">
                                                            <div className="OrderForm__part_body_item_input">
                                                                <div className="OrderForm__part_body_item_input_label">Выберите адрес</div>
                                                                <input 
                                                                    onBlur={handleBlur}
                                                                    onChange={handleChange}
                                                                    value={values.ADDRESS}
                                                                    name={'ADDRESS'}
                                                                    type="text" 
                                                                    placeholder='Адрес'/>
                                                                <div style={{color: 'red'}}>
                                                                    {errors.ADDRESS && touched.ADDRESS ? errors.ADDRESS : null}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="OrderForm__part_body_row">
                                                        <div className="OrderForm__part_body_item">
                                                            <div className="OrderForm__part_body_item_radio">
                                                                <Radio
                                                                    name={'delivery'}
                                                                    label={'Почта России'}
                                                                    id={'pr'}
                                                                    checked={true}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="OrderForm__part_body_row">
                                                        <div className="OrderForm__part_body_item fill">
                                                            <div className="OrderForm__part_body_item_radio">
                                                                <Radio
                                                                    name={'delivery'}
                                                                    label={'Сдек'}
                                                                    id={'sdek'}
                                                                    checked={false}/>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="OrderForm__part_body_row">
                                                        <div className="OrderForm__part_body_item fill">
                                                            <div className="OrderForm__part_body_item_radio">
                                                                <Radio
                                                                    name={'delivery'}
                                                                    label={'Деловые линии'}
                                                                    id={'dl'}
                                                                    checked={false}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="OrderForm__part">
                                                <div className="OrderForm__part_head">
                                                    3. Оплата
                                                </div>
                                                <div className="OrderForm__part_body">
                                                    <div className="OrderForm__part_body_row">
                                                        <div className="OrderForm__part_body_item fill">
                                                            <div className="OrderForm__part_body_item_radio">
                                                                <Radio
                                                                    name={'payment'}
                                                                    label={'Оплата при получении товара'}
                                                                    id={'ppt'}
                                                                    checked={true}/>
                                                            </div>
                                                        </div>
                                                    
                                                    </div>  
                                                    <div className="OrderForm__part_body_row">
                                                        <div className="OrderForm__part_body_item fill">
                                                            <div className="OrderForm__part_body_item_radio">
                                                                <Radio
                                                                    name={'payment'}
                                                                    label={'Банковская карта'}
                                                                    id={'bc'}
                                                                    checked={false}/>
                                                            </div>
                                                        </div>
                                                    
                                                    </div>  
                                                    <div className="OrderForm__part_body_row">
                                                        <div className="OrderForm__part_body_item fill">
                                                            <div className="OrderForm__part_body_item_text">
                                                                <div className="OrderForm__part_body_item_text_label">Комментарий</div>
                                                                <textarea name="comment" placeholder='Ваш комментарий'>

                                                                </textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}

                                        </div>
                                    </div>
                                    <div className="OrderPage__total">
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
                                                                price={item.price}
                                                                articul={item.articul}/>
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
                                                        name={'UF_CRM_1663688720594'}
                                                        id={'complect'}
                                                        label={'Нужна установка'}
                                                        onChange={handleChange}
                                                        checked={values.UF_CRM_1663688720594}
                                                        
                                                        />
                                                </div>
                                            </div>
                                            <div className="OrderTotal__action">
                                                <Button type={'submit'}  variant={'warning'} text={'Подтвердить заказ'} disabled={basketList?.length > 0 ? false : true} load={isSubmitting ? true : false}/>
                                            </div>
                                            <div className="OrderTotal__promo">
                                                <div className="OrderTotal__promo_name">Промокод</div>
                                                <button type='button' className="OrderTotal__promo_btn">Добавить</button>
                                            </div>
                                            <div className="OrderTotal__ex">
                                                Оформляя заказ, я принимаю условия <a href="#">пользовательського соглашения</a>
                                            </div>
                                        </div>
                                    </div>

                                </Form>
                            )
                        }

                    </Formik>
                    <div className="OrderPage__body">
                        <div className="OrderPage__form">
                        
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </motion.div>
    )
}

export default OrderPage;