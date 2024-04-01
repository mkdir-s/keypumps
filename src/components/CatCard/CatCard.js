import './CatCard.scss';
import Button from '../Button/Button';
import img from '../../assets/cat-img.png'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const CatCard = ({id, title, images, link}) => {
    
    return (
        <div className="CatCard">
            {
                images?.length > 0 ? (
                    <div className="CatCard__img">
                        <img src={images[0]} alt=""/>
                    </div>
                ) : null
            }
            
            <div className="CatCard__body">
                <h3 className="CatCard__body_name">{title}</h3>
                <div className="CatCard__body_action">
                    <Link to={`/catalog/${link}`} className={'CatCard__body_action_item'}>
                        <Button text={'Перейти'} variant={'warning-tr'}/>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default CatCard;