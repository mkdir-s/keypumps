import './OrderForm.scss';
import Radio from '../../../../components/Radio/Radio';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';

const initForm = {
    NAME: '', //имя
    LAST_NAME: '', //familiya
    PHONE: '', // telefon
    EMAIL: '', //email
    UF_CRM_1663423166781: '', //otdelenie nomer
    UF_CRM_1663424100758: '', //city
    ADDRESS: '', //adress
    UF_CRM_1663424366166: [], //arrtikuly towarow
    UF_CRM_1663424618018: 0, //nuzhna li ustanovka
    UF_CRM_1663422176950: '' //promokod

}

const OrderForm = () => {
    

    

    return (
        <Formik 
            
            initialValues={initForm}
            onSubmit={(values, {setSubmitting}) => {
                console.log(values)
            }}>

            {
                ({isSubmitting, errors, touched, values, submitForm}) => (
                    <Form className="OrderForm">
                        <div className="OrderForm__part">
                            <div className="OrderForm__part_head">
                                1. Контактные данные
                            </div>
                            <div className="OrderForm__part_body">
                                <div className="OrderForm__part_body_row">
                                    <div className="OrderForm__part_body_item">
                                        <div className="OrderForm__part_body_item_input">
                                            <div className="OrderForm__part_body_item_input_label">Фамилия</div>
                                            <input name='LAST_NAME' type="text" placeholder='Зайцев' />
                                        </div>
                                    </div>
                                    <div className="OrderForm__part_body_item">
                                        <div className="OrderForm__part_body_item_input">
                                            <div className="OrderForm__part_body_item_input_label">Имя</div>
                                            <input name='NAME' type="text" placeholder='Михаил' />
                                        </div>
                                    </div>
                                </div>
                                <div className="OrderForm__part_body_row">
                                    <div className="OrderForm__part_body_item">
                                        <div className="OrderForm__part_body_item_input">
                                            <div className="OrderForm__part_body_item_input_label">Телефон</div>
                                            <input name='PHONE' type="tel" placeholder='+7 (966) 45 54 698' />
                                        </div>
                                    </div>
                                    <div className="OrderForm__part_body_item">
                                        <div className="OrderForm__part_body_item_input">
                                            <div className="OrderForm__part_body_item_input_label">E-mail</div>
                                            <input name='EMAIL' type="email" placeholder='example@mail.ru' />
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
                                            <input type="text" placeholder='Москва'/>
                                        </div>
                                    </div>
                                    <div className="OrderForm__part_body_item">
                                        <div className="OrderForm__part_body_item_input">
                                            <div className="OrderForm__part_body_item_input_label">Выберите отделение</div>
                                            <input type="text" placeholder='Отделение №1'/>
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
                        <div className="OrderForm__part">
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
                        </div>

                    </Form>
                )
            }


            
        </Formik>
    )
}

export default OrderForm;