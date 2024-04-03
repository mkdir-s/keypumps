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
import { notification } from 'antd';
const _ = require('lodash');

const ds = new dataService()




const OrderPage = () => {
    const basketList = useSelector(state => state);
    const [total, setTotal] = useState(0);
    const [arts, setArts] = useState('');

    



    const setNamesOfGoodsToForm = () => {
        const names = basketList.map(item => item.name);
        return names.join(' ');
    }

    useEffect(() => {
        let countTotal = basketList?.map(item => item.price * item.count);
        setTotal(_.sum(countTotal))

        const names = basketList.map(item => item.name);
        const namesString = names.join(' ');
        setArts(namesString);
    }, [basketList])


    const handleSubmit = async (values) => {
        try {
            values.carts = setNamesOfGoodsToForm();
            const response = await fetch('https://goldensoft.tech/keypumps.php', {
                method: 'POST',
                // headers: {
                //     'Content-Type': 'application/json'
                // },
                body: JSON.stringify(values)
            });

            if (response.ok) {
                notification.success({message: 'Данные успешно отправлены'})
            } else {
                notification.error({message: 'Произошла ошибка при отправке данных'})
            }
        } catch (error) {
            notification.error({message: 'Произошла ошибка при отправке данных'})
            console.error('Произошла ошибка:', error);
        }
    }


    

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
                            name: '', //имя
                            secondname: '', //familiya
                            phone: '', // telefon
                            email: '', //email
                            UF_CRM_1663688621868: 27, //otdelenie nomer
                            town: '', //city
                            adress: '', //adress
                            carts: setNamesOfGoodsToForm(), //arrtikuly towarow
                            UF_CRM_1663688720594: 0, //nuzhna li ustanovka
                            UF_CRM_1663422176950: '' //promokod
                        }}
                        validate={values => {
                            const errors = {}

                            if(!values.adress) {
                                errors.adress = 'Обьязательное поле'
                            }
                            if(!values.email) {
                                errors.email = 'Обьязательное поле'
                            }
                            if(!values.secondname) {
                                errors.secondname = 'Обьязательное поле'
                            }
                            if(!values.name) {
                                errors.name = 'Обьязательное поле'
                            }
                            if(!values.phone) {
                                errors.phone = 'Обьязательное поле'
                            }
                            
                            if(!values.UF_CRM_1663688621868) {
                                errors.UF_CRM_1663688621868 = 'Обьязательное поле'
                            }
                            if(!values.town) {
                                errors.town = 'Обьязательное поле'
                            }
                            return errors
                        }}
                        onSubmit={(values, {setSubmitting, resetForm}) => {
                            handleSubmit(values)
                            resetForm({
                                name: '', //имя
                                secondname: '', //familiya
                                phone: '', // telefon
                                email: '', //email
                                UF_CRM_1663688621868: 27, //otdelenie nomer
                                town: '', //city
                                adress: '', //adress
                                carts: setNamesOfGoodsToForm(), //arrtikuly towarow
                                UF_CRM_1663688720594: 0, //nuzhna li ustanovka
                                UF_CRM_1663422176950: '' //promokod
                            })
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
                                                                    value={values.secondname} 
                                                                    name='secondname' 
                                                                    type="text" 
                                                                    placeholder='Зайцев' />
                                                                <div style={{color: 'red'}}>
                                                                    {errors.secondname && touched.secondname ? errors.secondname : null}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="OrderForm__part_body_item">
                                                            <div className="OrderForm__part_body_item_input">
                                                                <div className="OrderForm__part_body_item_input_label">Имя</div>
                                                                <input 
                                                                    onBlur={handleBlur}
                                                                    name='name' 
                                                                    type="text" 
                                                                    placeholder='Михаил'
                                                                    onChange={handleChange}
                                                                    value={values.name} />
                                                                <div style={{color: 'red'}}>
                                                                    {errors.name && touched.name ? errors.name : null}
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
                                                                    value={values.phone}
                                                                    name='phone' 
                                                                    type="tel" 
                                                                    placeholder='+7 (966) 45 54 698' />
                                                                <div style={{color: 'red'}}>
                                                                    {errors.phone && touched.phone ? errors.phone : null}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="OrderForm__part_body_item">
                                                            <div className="OrderForm__part_body_item_input">
                                                                <div className="OrderForm__part_body_item_input_label">E-mail</div>
                                                                <input 
                                                                    onBlur={handleBlur}
                                                                    onChange={handleChange}
                                                                    value={values.email}
                                                                    name='email' 
                                                                    type="email" 
                                                                    placeholder='example@mail.ru' />
                                                                <div style={{color: 'red'}}>
                                                                    {errors.email && touched.email ? errors.email : null}
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
                                                                    value={values.town}
                                                                    name={'town'}
                                                                    type="text" 
                                                                    placeholder='Город'/>
                                                                
                                                                <div style={{color: 'red'}}>
                                                                    {errors.town && touched.town ? errors.town : null}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="OrderForm__part_body_item">
                                                            <div className="OrderForm__part_body_item_input">
                                                                <div className="OrderForm__part_body_item_input_label">Выберите адрес</div>
                                                                <input 
                                                                    onBlur={handleBlur}
                                                                    onChange={handleChange}
                                                                    value={values.adress}
                                                                    name={'adress'}
                                                                    type="text" 
                                                                    placeholder='Адрес'/>
                                                                <div style={{color: 'red'}}>
                                                                    {errors.adress && touched.adress ? errors.adress : null}
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