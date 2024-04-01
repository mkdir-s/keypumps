import './Article.scss';
import { Link } from 'react-router-dom';
import img from '../../assets/art-img.png';
import 'moment/locale/ru';
import 'moment-timezone';
import Moment from 'react-moment';
import placeholder from '../../assets/prod-pl.png';

const Article = ({body, date, title, id, images}) => {

    return (
        <Link to={`/articles/${title}`} className="Article">
            <div className="Article__img">
                <img src={images?.length > 0 ? images[0] : placeholder} alt="" />
            </div>
            <div className="Article__body">
                <div className="Article__body_name">
                {title}
                </div>
                <div className="Article__body_action">
                    <div className="Article__body_action_cat">СОЛНЕЧНЫЕ КОЛЛЕКТОРЫ</div>
                    <div className="Article__body_action_date"><Moment locale='ru' date={date} format={"DD.MM.YYYY"}/></div>
                </div>
            </div>
        </Link>
    )
}

export default Article;