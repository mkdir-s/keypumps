import './Breadcrumbs.scss';
import { Link } from 'react-router-dom';


const Breadcrumbs = ({items}) => {
    return (
        <div className="Breadcrumbs">
            <div className="container">
                <div className="Breadcrumbs__in">
                    <div className="Breadcrumbs__item">
                        <Link to={'/'}>Раздел</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumbs;