import './Hero.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper';
import img from '../../assets/hero-img.png';
import img1 from '../../assets/hero-img-1.png';
import img2 from '../../assets/hero-img-2.png';
import Button from '../Button/Button';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';


const Hero = () => {


    return (
        <div className="Hero">
            <div className="container">
                <div className="Hero__in">
                    <Swiper
                        className='Hero__slider'
                        slidesPerView={1}
                        speed={1400}
                        spaceBetween={20}
                        modules={[Pagination, Autoplay, Navigation]}
                        initialSlide={1}
                        navigation={{
                            prevEl: '.Hero__slider_nav-prev',
                            nextEl: '.Hero__slider_nav-next'
                        }}
                        pagination={{
                            el: '.Hero__slider_pag',
                            type: 'bullets',
                            bulletClass: 'Hero__slider_pag_item',
                            bulletActiveClass: 'active',
                            clickable: true
                        }}
                        autoplay={{delay: 4000}}
                        loop>
                        <SwiperSlide className='Hero__slider_sl'>
                            <div className="Hero__slider_sl_img">
                                <img src={img1} alt=""/>
                            </div>
                            <div className="Hero__slider_sl_content">
                                <h2 className="Hero__slider_sl_content_title">
                                Почему солнечные батареи так эффективны?
                                </h2>
                                <div className="Hero__slider_sl_content_text">
                                Эффективность солнечных батарей относится...
                                </div>
                                <Link to='/articles' className="Hero__slider_sl_content_action">
                                    <Button text={'К статье'} variant={'warning'}/>
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='Hero__slider_sl'>
                            <div className="Hero__slider_sl_img">
                                <img src={img} alt=""/>
                            </div>
                            <div className="Hero__slider_sl_content">
                                <h2 className="Hero__slider_sl_content_title">
                                Высокотехнологичные тепловые насосы
                                </h2>
                                <div className="Hero__slider_sl_content_text">
                                Выберете подходящий
                                </div>
                                <Link to='/catalog' className="Hero__slider_sl_content_action">
                                    <Button text={'Смотреть каталог'} variant={'warning'}/>
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='Hero__slider_sl'>
                            <div className="Hero__slider_sl_img">
                                <img src={img2} alt=""/>
                            </div>
                            <div className="Hero__slider_sl_content">
                                <h2 className="Hero__slider_sl_content_title">
                                Осуществляем монтажные работы и помогаем в установке оборудования
                                </h2>
                                {/* <div className="Hero__slider_sl_content_text">
                                Выберете подходящий
                                </div> */}
                                <Link to='/catalog' className="Hero__slider_sl_content_action">
                                    <Button text={'Смотреть каталог'} variant={'warning'}/>
                                </Link>
                            </div>
                        </SwiperSlide>
                        <div className="Hero__slider_action">
                            <button className="Hero__slider_nav Hero__slider_nav-prev"><LeftOutlined /></button>
                            <div className="Hero__slider_pag"></div>
                            <button className="Hero__slider_nav Hero__slider_nav-next"><RightOutlined /></button>
                        </div>
                        
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Hero;