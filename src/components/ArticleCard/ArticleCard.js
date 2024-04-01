import './ArticleCard.scss';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import 'moment/locale/ru';
import 'moment-timezone';
import Moment from 'react-moment';




const ArticleCard = ({link, date, title, descr, image}) => {

    return (
        <div className="ArticleCard">
            <div className="ArticleCard__img">
                {
                    image ? (
                        <img src={image} alt="" />
                    ) : null
                }
                
            </div>
            <div className="ArticleCard__body">
                <Link to={link} className="ArticleCard__body_name">{title}</Link>
                <div className="ArticleCard__body_descr">{descr.length > 300 ? descr.slice(0, 300) + '...' : descr}</div>
                <div className="ArticleCard__body_action">
                    <div className="ArticleCard__body_action_info">
                        {/* <span className="ArticleCard__body_action_info_part">СОЛНЕЧНЫЕ КОЛЛЕКТОРЫ</span> */}
                        <span className="ArticleCard__body_action_info_date">
                        <Moment locale='ru' date={date} format={"DD.MM.YYYY"}/>
                        </span>
                    </div>
                    <Link to={link} className={"ArticleCard__body_action_link"}>
                        <Button variant={'warning'} text={'ДАЛЕЕ'}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard;