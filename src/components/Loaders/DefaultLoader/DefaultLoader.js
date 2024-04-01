import './DefaultLoader.scss';
import PropagateLoader from 'react-spinners/PropagateLoader';


const DefaultLoader = ({style}) => {
    return (
        <div className="DefaultLoader" style={{...style}}>
            <PropagateLoader color='#000' /> 
        </div>
    )
}

export default DefaultLoader;