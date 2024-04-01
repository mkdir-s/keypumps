import './ProductPage.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import dataService from '../../services/dataService';
import { useState } from 'react';
import Ribbon from '../../components/Ribbon/Ribbon';
import {motion} from 'framer-motion';

const ds = new dataService();


const ProductPage = () => {
    const {category, title} = useParams();
    const [productInfo, setProductInfo] = useState({})
    const [recent, setRecent] = useState([]);


    useEffect(() => {
        ds.getDetailProduct(title).then(res => {
            
            setProductInfo(res?.post)
        })
        ds.getPopularProds().then(res => {
            setRecent(res)
        })

    }, [category, title])

    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            className="ProductPage body-part">
            {/* <Breadcrumbs/> */}
            <div className="container">
                <div className="ProductPage__in">
                    <ProductCard data={productInfo}/>
                    <Ribbon title={'Популярные товары'} list={recent} type={'products'}
                    spv={4}/>
                </div>
            </div>
        </motion.div>
    )
}

export default ProductPage;