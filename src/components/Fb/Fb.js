import './Fb.scss';
import Button from '../Button/Button';
import {PhoneFilled} from '@ant-design/icons';
import { Formik, Form, Field } from 'formik';
import { useEffect } from 'react';
import dataService from '../../services/dataService';
import { initial } from 'lodash';
import {notification} from 'antd';




const ds = new dataService();

const formInit = {
    name: '',
    email: ''
}


const Fb = () => {
    

    const handleSubmit = async (values) => {
        try {

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
        <div className="Fb">
            <div className="container">
                <div className="Fb__in">
                    {/* <div className="Fb__cb"><PhoneFilled style={{transform: 'scale(-1, 1)'}}/></div> */}
                    
                    <h2 className="Fb__title section-title">Мы Вам перезвоним</h2>
                    <div className="Fb__text">
                        Если у вас возникли какие-то вопросы или проблемы, заполните форму и мы Вам перезвоним.
                    </div>
                    <Formik
                        initialValues={formInit}
                        
                        validate={values => {
                            const errors = {}
                            if(!values.email) {
                                errors.email = 'Обьязательное поле'
                            }
                            if(!values.name) {
                                errors.name = 'Обьязательное поле'
                            }
                            return errors;
                        }}
                        onSubmit={(values, {setSubmitting, resetForm}) => {
                            handleSubmit(values)
                            resetForm(formInit)
                        }}>
                            {({isSubmitting, errors, touched, values, handleChange, handleBlur}) => (
                                <Form 
                                    className='Fb__rw'
                                    >
                                    <div className="Fb__rw_item Fb__rw_item-inp">
                                        <input 
                                            type="text" 
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name="name"
                                            placeholder='Ваше имя'/>
                                        <div style={{color: 'red'}}>
                                            {touched.name && errors.name ? errors.name : null}
                                        </div>
                                    </div>
                                    <div className="Fb__rw_item Fb__rw_item-inp">
                                        <input 
                                            type="text" 
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name="email"
                                            placeholder='Ваш e-mail'/>
                                        <div style={{color: 'red'}}>
                                            {touched.email && errors.email ? errors.email : null}
                                        </div>
                                    </div>
                                    <div className="Fb__rw_item Fb__rw_item-btn">
                                        <Button 
                                            disabled={!values.email || !values.name ? true : false}
                                            type={'submit'} 
                                            text={'Отправить'} 
                                            variant={'warning'}/>
                                    </div>
                                </Form>
                            )}
                        
                    </Formik>
                    
                </div>
            </div>
        </div>
    )
}

export default Fb;