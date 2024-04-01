import './HomeCat.scss';
import CatCard from '../CatCard/CatCard';
import Button from '../Button/Button';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeCat = ({list}) => {
    const nav = useNavigate();
    

    return (
        <div className="HomeCat">
            <div className="container">
                <div className="HomeCat__in">
                    <h2 className="HomeCat__title section-title">
                        Категории
                    </h2>
                    <div className="HomeCat__body">
                        {
                            list && list.length > 0 ? (
                                list.map(item => (
                                    <div className="HomeCat__body_item" key={item.id}>
                                        <CatCard 
                                            id={item.id} 
                                            title={item.title} 
                                            images={item.categoryImage?.photosLinks}
                                            link={item.title}/>
                                    </div>
                                ))
                            ) : null
                        }
                        
                        
                    </div>
                    <div className="HomeCat__action">
                        <Button onClick={() => nav('/catalog')} variant={'warning'} text={'Все категории'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCat;

