import './DeliveryPage.scss';
import DelMain from './components/DelMain/DelMain';
import DelBody from './components/DelBody/DelBody';
import {motion} from 'framer-motion';


const DeliveryPage = () => {


    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className="DeliveryPage body-part">
            <DelMain/>
            <DelBody/>
        </motion.div>
    )
}

export default DeliveryPage;