import './DelBody.scss';

const DelBody = () => {
    return (
        <div className="DelBody">
            <div className="container">

                <div className="DelBody__in">
                    <div className="DelBody__part ">
                        <h3 className="DelBody__part_head">Оплата</h3>
                        <div className="DelBody__part_content pay">
                            <div className="DelBody__part_content_item">
                                <div className="DelBody__part_content_item_name">Банковская карта</div>
                                <div className="DelBody__part_content_item_text">
                                Онлайн заказ можно оплатить с помощью банковской карты, выпущенной на территории России. Оформляя заказ на сайте, в пункте «Оплата» выберите «Банковская карта». После переадресации на страницу системы безопасных платежей, необходимо лишь подтвердить платеж.
                                </div>
                            </div>
                            <div className="DelBody__part_content_item">
                                <div className="DelBody__part_content_item_name">Оплата при получении товара</div>
                                <div className="DelBody__part_content_item_text">
                                Онлайн заказ можно оплатить непосредственно при получении. Оформляя заказ на сайте, в пункте «Оплата» выберите «Оплата при получении товара». После того как товар будет доставлен к заказчику, после полного осмотра, оплатите стоимость товара удобным для вас способом.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="DelBody__part">
                        <h3 className="DelBody__part_head">Гарантии</h3>
                        <div className="DelBody__part_content">
                            <div className="DelBody__part_content_item">
                                <div className="DelBody__part_content_item_name">На все товары, приобретенные в нашем магазине, предоставляется гарантия, дающая право на:</div>
                                <div className="DelBody__part_content_item_list">
                                    <div className="DelBody__part_content_item_list_item">обмен или возврат товара в срок до 14 дней с момента приобретения;</div>
                                    <div className="DelBody__part_content_item_list_item">обмен или возврат товара на основании акта, выданного Авторизованным сервисным центром по результатам гарантийного обслуживания (в соответствии с Законом РФ «О защите прав потребителей»).
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="DelBody__part">
                        <h3 className="DelBody__part_head">Возврат товара</h3>
                        <div className="DelBody__part_content">
                            <div className="DelBody__part_content_item">
                                <div className="DelBody__part_content_item_name">Подготовьте, пожалуйста, все необходимые документы:
                                </div>
                                <div className="DelBody__part_content_item_list">
                                    <div className="DelBody__part_content_item_list_item">выданный продавцом расчетный документ (чек / акт приема-передачи / накладная или др.), подтверждающий факт приобретения;
                                    </div>
                                    <div className="DelBody__part_content_item_list_item">гарантийный талон;
                                    </div>
                                    <div className="DelBody__part_content_item_list_item">документ, удостоверяющий личность;
                                    </div>
                                    <div className="DelBody__part_content_item_list_item">идентификационный налоговый номер (ИНН);
                                    </div>
                                    <div className="DelBody__part_content_item_list_item">в случае оплаты покупки банковской картой – актуальные реквизиты карточного счета.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="DelBody__part_content">
                            <div className="DelBody__part_content_item">
                                <div className="DelBody__part_content_item_name">Передайте товар на гарантийное обслуживание, обязательно приложите указанные выше документы.
                                </div>
                                <div className="DelBody__part_content_item_text">
                                Полезная информация о правах потребителя в случае приобретения им товара ненадлежащего качества – <span>Закона РФ 
                                «О защите прав потребителей».</span>
                                <br></br>
                                <br></br>
                                Уважаемый покупатель, приносим извинения за неудобства, случившиеся в связи с выходом из строя. По вашему обращению будут приняты все меры для быстрого решения вашей проблемы.

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DelBody;