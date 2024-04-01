import './Adv.scss';
import adv1 from '../../assets/svg/adv-1.svg'
import adv2 from '../../assets/svg/adv-2.svg'
import adv3 from '../../assets/svg/adv-3.svg'
import adv_img from '../../assets/adv-img.png';

const Adv = () => {

    return (
        <div className="Adv">
            <div className="container">
                <div className="Adv__in">
                    <h2 className="Adv__title section-title">
                        Почему в качестве источника тепла или холода нужно
                        выбрать тепловой насос?
                    </h2>
                    <div className="Adv__list">
                        <div className="Adv__list_item">
                            <div className="Adv__list_item_img">
                                <img src={adv1} alt="" />
                            </div>
                            <div className="Adv__list_item_name">
                                Экономия на газе, электричестве и топливе.
                            </div>
                        </div>
                        <div className="Adv__list_item">
                            <div className="Adv__list_item_img">
                                <img src={adv2} alt="" />
                            </div>
                            <div className="Adv__list_item_name">
                                Источник тепла не закончится ближайшие 5 000 лет.
                            </div>
                        </div>
                        <div className="Adv__list_item">
                            <div className="Adv__list_item_img">
                                <img src={adv3} alt="" />
                            </div>
                            <div className="Adv__list_item_name">
                                Тепловой насос не взрывается и не горит, он абсолютно безопасен.
                            </div>
                        </div>
                    </div>
                    <div className="Adv__body">
                        <div className="Adv__body_descr">
                            <h3 className="Adv__body_descr_head">Преимущества</h3>
                            <div className="Adv__body_descr_text">
                                <p>
                                    Электрический котел забирает столько же энергии, сколько выдает тепла. Тепловой насос, наоборот, тратит минимум электроэнергии, 
                                    а тепла производит в три-семь раз больше. Оборудование может потратить 5 кВт/ч, однако тепла оно выделяет не менее 17 кВт/ч. Высокий КПД — самое привлекательное качество тепловых котлов.
                                </p>
                            </div>
                            <ul className="Adv__body_descr_list">
                                <li className="Adv__body_descr_list_item">Возможность установки в любой местности</li>
                                <li className="Adv__body_descr_list_item">Универсальность. Зимой они обеспечивают тепло, летом  прохладу</li>
                                <li className="Adv__body_descr_list_item">Безопасность для окружающей среды</li>
                                <li className="Adv__body_descr_list_item">Долговечность</li>
                            </ul>
                        </div>
                        <div className="Adv__body_img">
                            <img src={adv_img} alt="" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Adv;