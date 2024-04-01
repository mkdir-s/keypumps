import './Ribbon.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import Product from '../Product/Product';
import { Scrollbar, Virtual } from 'swiper';
import Article from '../Article/Article';
import {useEffect, useState} from 'react';
import DefaultLoader from '../Loaders/DefaultLoader/DefaultLoader';



const Ribbon = ({title, spv, spb, list, type, popular}) => {
    

    if(type == 'products') {
        return (
            <div className="Ribbon">
                <div className="container">
                    <div className="Ribbon__in">
                        <div className="Ribbon__head">
                            <h2 className="Ribbon__head_title section-title">{title}</h2>
                        </div>
                        <div className="Ribbon__body">
                            {
                                list?.length > 0 ? (
                                <Swiper
                                    className='Ribbon__body_slider'
                                    
                                    modules={[Scrollbar]}
                                    scrollbar={{
                                        el: '.Ribbon__body_slider_scrollbar',
                                        draggable: true
                                    }}
                                    slidesPerView={1}
                                    spaceBetween={spb}
                                    breakpoints={{
                                        768: {
                                            slidesPerView: 3
                                        },
                                        1000: {
                                            slidesPerView: 4
                                        }
                                    }}
                                    
                                    >
                                    
                                    {
                                        list.map((item, index) => (
                                            <SwiperSlide className='Ribbon__body_slider_sl' key={index}>
                                                <Product
                                                    title={item.title}
                                                    category={item.category}
                                                    description={item.description}
                                                    details={item.details}
                                                    displayMain={item.displayMain}
                                                    filters={item.filters}
                                                    id={item.id}
                                                    inStock={item.inStock}
                                                    initialPrice={item.initialPrice}
                                                    linkedProducts={item.linkedProducts}
                                                    productImages={item.productImages}
                                                    price={item.price}
                                                    popular={popular}
                                                    top={item.topSales}
                                                    discount={item.discountPrice}
                                                    articul={item.articul}/>
                                            </SwiperSlide>
                                        ))
                                    }
        
        
                                    <div className="Ribbon__body_slider_scrollbar"></div>
                                </Swiper>
                                ) : (
                                    <DefaultLoader/>
                                )
                            }
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }

    if(type == 'articles') {
        return (
            <div className="Ribbon">
                <div className="container">
                    <div className="Ribbon__in">
                        <div className="Ribbon__head">
                            <h2 className="Ribbon__head_title section-title">{title}</h2>
                        </div>
                        <div className="Ribbon__body">
                            <Swiper
                                className='Ribbon__body_slider'
                                
                                modules={[Scrollbar]}
                                scrollbar={{
                                    el: '.Ribbon__body_slider_scrollbar',
                                    draggable: true
                                }}
                                slidesPerView={1}
                                spaceBetween={spb}
                                breakpoints={{
                                    1000: {
                                        slidesPerView:spv,
                                        spaceBetween:spb
                                    }, 

                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: spb
                                    }

                                }}
                                >
                                {
                                    list && list.length > 0 ? (
                                        list.map((item, index) => (
                                            <SwiperSlide className='Ribbon__body_slider_sl' key={index}>
                                                <Article
                                                    body={item.body}
                                                    date={item.date}
                                                    id={item.id}
                                                    title={item.title}
                                                    images={item.articleImage?.photosLinks}/>
                                            </SwiperSlide>  
                                        ))
                                    ) : <DefaultLoader/>
                                }
    
                                <div className="Ribbon__body_slider_scrollbar"></div>
                            </Swiper>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
    
}

export default Ribbon;