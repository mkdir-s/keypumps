import './AboutFb.scss';
import Button from '../../../../components/Button/Button';
import ct1 from '../../../../assets/ct-1.png'
import ct2 from '../../../../assets/ct-2.png'
import ct3 from '../../../../assets/ct-3.png'
import { Formik, Form } from 'formik';
import dataService from '../../../../services/dataService';
import { message } from 'antd';

const ds = new dataService();

const AboutFb = () => {

    return (
        <div className="AboutFb">
            <div className="container">
                <div className="AboutFb__in">
                    <Formik
                        initialValues={{
                            name: '',
                            email: ''
                        }}
                        validate={(values) => {
                            const errors = {}

                            if(!values.email) {
                                errors.email = 'Обьязательное поле'
                            }
                            if(!values.name) {
                                errors.name = 'Обьязательное поле'
                            }

                            return errors;
                        }}
                        onSubmit={(values, {setSubmitting}) => {
                            setSubmitting(true)
                            ds.fb(values).then(res => {
                                if(!res) {
                                    message.error('Произошла ошибка')
                                }
                            }).finally(_ => setSubmitting(false))
                            
                        }}>
                        {
                            ({values, errors, touched, isSubmitting, handleBlur, handleChange}) => (
                                <Form
                                    className='AboutFb__form'>
                                    <h3 className="AboutFb__form_head">Остались вопросы?</h3>
                                    <div className="AboutFb__form_text">
                                        Если у вас возникли какие-то вопросы, 
                                        заполните форму и мы Вам перезвоним.
                                    </div>
                                    <div className="AboutFb__form_body">
                                        <div className="AboutFb__form_body_item">
                                            <input 
                                                name='name'
                                                type="text"
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur} 
                                                placeholder='Ваше имя'/>
                                            <div style={{color: 'red'}}>
                                                {errors.name && touched.name ? errors.name : null}
                                            </div>
                                        </div>
                                        <div className="AboutFb__form_body_item">
                                            <input 
                                                name='email'
                                                type="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur} 
                                                placeholder='Ваш Email'/>
                                            <div style={{color: 'red'}}>
                                                {errors.email && touched.email ? errors.email : null}
                                            </div>
                                        </div>
                                        <div className="AboutFb__form_body_item">
                                            <Button 
                                                type={'submit'}
                                                load={isSubmitting ? true : false}
                                                variant={'warning'} 
                                                text={'Отправить'}/>
                                        </div>
                                    </div>
                                </Form>
                            )
                        }
                        

                    </Formik>
                    
                    <div className="AboutFb__ct">
                        <h3 className="AboutFb__ct_head">Контакты</h3>
                        <div className="AboutFb__ct_body">
                            <div className="AboutFb__ct_body_item">
                                <div className="AboutFb__ct_body_item_descr">
                                    <div className="AboutFb__ct_body_item_descr_name">Наш адрес</div>
                                    <div className="AboutFb__ct_body_item_descr_value">
                                    Россия,
                                    г. Сочи, ул. Горького, 87
                                    </div>
                                </div>
                                <div className="AboutFb__ct_body_item_img">
                                    <img src={ct1} alt="" />
                                </div>
                            </div>
                            <div className="AboutFb__ct_body_item">
                                <div className="AboutFb__ct_body_item_descr">
                                    <div className="AboutFb__ct_body_item_descr_name">Телефоны</div>
                                    <div className="AboutFb__ct_body_item_descr_value">
                                    +7 (964) 945 41 38
                                    </div>
                                </div>
                                <div className="AboutFb__ct_body_item_img">
                                    <img src={ct2} alt="" />
                                </div>
                            </div>
                            <div className="AboutFb__ct_body_item">
                                <div className="AboutFb__ct_body_item_descr">
                                    <div className="AboutFb__ct_body_item_descr_name">Email</div>
                                    <div className="AboutFb__ct_body_item_descr_value">
                                    info@keypumps.ru
                                    </div>
                                </div>
                                <div className="AboutFb__ct_body_item_img">
                                    <img src={ct3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFb;