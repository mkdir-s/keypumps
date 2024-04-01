import './AboutWh.scss';
import img from '../../../../assets/about-wh.png'

const AboutWh = () => {

    return (
        <div className="AboutWh">
            <div className="container">
                <div className="AboutWh__in">
                    <h2 className="AboutWh__head">Почему KeyPumps?</h2>
                    <div className="AboutWh__body">
                        <div className="AboutWh__body_img">
                            <img src={img} alt="" />
                        </div>
                        <div className="AboutWh__body_content">
                            <div className="AboutWh__body_content_item">
                                <div className="AboutWh__body_content_item_icon"></div>
                                <div className="AboutWh__body_content_item_main">
                                    <div className="AboutWh__body_content_item_main_name">Возврат стоимости</div>
                                    <div className="AboutWh__body_content_item_main_text">За каждый отправленый товар который окажеться бракованным, мы вернем вам стоимость.</div>
                                </div>
                            </div>
                            <div className="AboutWh__body_content_item">
                                <div className="AboutWh__body_content_item_icon"></div>
                                <div className="AboutWh__body_content_item_main">
                                    <div className="AboutWh__body_content_item_main_name">Монтаж</div>
                                    <div className="AboutWh__body_content_item_main_text">Наши квалифицированные специалисты обеспечат высокое качество монтажа и наладки электрооборудования</div>
                                </div>
                            </div>
                            <div className="AboutWh__body_content_item">
                                <div className="AboutWh__body_content_item_icon"></div>
                                <div className="AboutWh__body_content_item_main">
                                    <div className="AboutWh__body_content_item_main_name">Надежность</div>
                                    <div className="AboutWh__body_content_item_main_text">Мы поставляем лучшее в своем классе оборудование ведущих зарубежных производителей</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutWh;