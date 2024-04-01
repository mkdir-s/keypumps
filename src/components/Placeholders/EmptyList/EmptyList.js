import './EmptyList.scss';
import {FrownOutlined} from '@ant-design/icons';

const EmptyList = ({text}) => {
    return (
        <div className="EmptyList">
            <div className="EmptyList__icon">
            <FrownOutlined />
            </div>
            <div className="EmptyList__text">{text}</div>
        </div>
    )
}

export default EmptyList