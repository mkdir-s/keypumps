import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import HomeCat from "../../components/HomeCat/HomeCat";
import Ribbon from "../../components/Ribbon/Ribbon";
import Fb from '../../components/Fb/Fb';
import Footer from "../../components/Footer/Footer";

import dataService from "../../services/dataService";
import { useEffect, useState } from "react";
import Adv from "../../components/Adv/Adv";
import {motion} from 'framer-motion';
const ds = new dataService();


const HomePage = () => {
    const [prodsList, setProdsList] = useState([]);
    const [articlesList, setArticlesList] = useState([]);
    const [catsList, setCatsList] = useState([]);


    useEffect(() => {
        ds.getPopularProds().then(res => {
            setProdsList(res)
        })
        ds.getArticles().then(res => {
            setArticlesList(res.posts?.slice(0, 10))
        })
        ds.getCategories().then(res => {
            const sorted = res.posts.sort((a, b) => a.order > b.order ? 1 : -1)
            setCatsList(sorted.slice(0, 4))
        })
    }, [])

    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className="HomePage body-part">
            <Hero/>
            <Adv/>
            <HomeCat list={catsList}/>
            <Ribbon popular={true} list={prodsList} spv={4} spb={0} title={'Наши популярные продукты'} type='products'/>
            <Ribbon list={articlesList} spv={3} spb={8} title={'Статьи'} type='articles'/>
            <Fb/>
        </motion.div>
    )
}


export default HomePage;
