import './DelMain.scss';
import pr from '../../../../assets/svg/pr.svg';
import dl from '../../../../assets/dl.png';
import sdek from '../../../../assets/svg/sdek.svg';

import dl1 from '../../../../assets/dl-1.png'
import dl2 from '../../../../assets/dl-2.png'
import dl3 from '../../../../assets/dl-3.png'


const DelMain = () => {
    return (
        <div className="DelMain">
            <div className="container">
                <div className="DelMain__in">
                    <div className="DelMain__head">Доставка</div>
                    <div className="DelMain__body">
                        <div className="DelMain__body_item">
                            <div className="DelMain__body_item_pl">
                                <img src={pr} alt="" />
                            </div>
                            <div className="DelMain__body_item_img">
                                <img src={dl1} alt="" />
                            </div>
                            <div className="DelMain__body_item_descr">
                                <div className="DelMain__body_item_descr_name">Почта России</div>
                                <div className="DelMain__body_item_descr_list">
                                    <div className="DelMain__body_item_descr_item">
                                    Получение посылки согласно условиям перевозчика
                                    </div>
                                    <div className="DelMain__body_item_descr_item">
                                    Доставка в течении 1-2 дней
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="DelMain__body_item">
                            <div className="DelMain__body_item_pl">
                                <img src={dl} alt="" />
                            </div>
                            <div className="DelMain__body_item_img">
                                <img src={dl2} alt="" />
                            </div>
                            <div className="DelMain__body_item_descr">
                                <div className="DelMain__body_item_descr_name">Деловые линии</div>
                                <div className="DelMain__body_item_descr_list">
                                    <div className="DelMain__body_item_descr_item">
                                    Получение посылки согласно условиям перевозчика
                                    </div>
                                    <div className="DelMain__body_item_descr_item">
                                    Доставка в течении 1-2 дней
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="DelMain__body_item">
                            <div className="DelMain__body_item_pl">
                                <img src={sdek} alt="" />
                            </div>
                            <div className="DelMain__body_item_img">
                                <img src={dl3} alt="" />
                            </div>
                            <div className="DelMain__body_item_descr">
                                <div className="DelMain__body_item_descr_name">СДЭК</div>
                                <div className="DelMain__body_item_descr_list">
                                    <div className="DelMain__body_item_descr_item">
                                    Получение посылки согласно условиям перевозчика
                                    </div>
                                    <div className="DelMain__body_item_descr_item">
                                    Доставка в течении 1-2 дней
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default DelMain;