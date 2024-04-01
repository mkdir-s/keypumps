import './AboutInd.scss';

const AboutInd = () => {

    return (
        <div className="AboutInd">
            <div className="container">
                <div className="AboutInd__in">
                    <div className="AboutInd__item">
                        <div className="AboutInd__item_val">5,567</div>
                        <div className="AboutInd__item_text">Довольных клиентов</div>
                    </div>
                    <div className="AboutInd__item">
                        <div className="AboutInd__item_val">1245</div>
                        <div className="AboutInd__item_text">Продуктов на выбор</div>
                    </div>
                    <div className="AboutInd__item">
                        <div className="AboutInd__item_val">372</div>
                        <div className="AboutInd__item_text">Продаж в день</div>
                    </div>
                    <div className="AboutInd__item">
                        <div className="AboutInd__item_val">20</div>
                        <div className="AboutInd__item_text">Лет на рынке</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutInd;