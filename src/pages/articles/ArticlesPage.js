import './ArticlesPage.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { useParams } from 'react-router-dom';
import dataService from '../../services/dataService';
import { useEffect } from 'react';
import { useState } from 'react';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import EmptyList from '../../components/Placeholders/EmptyList/EmptyList'
import DefaultLoader from '../../components/Loaders/DefaultLoader/DefaultLoader';
import useContent from '../../hooks/useContent';
import { motion } from 'framer-motion';
const ds = new dataService();


const ArticlesPage = () => {
    const [articles, setArticles] = useState([]);
    const {loading, error, setLoading, setError} = useContent()

    useEffect(() => {
        setLoading(true)
        ds.getArticles().then(res => {
            if(res.posts.length > 0) {
                setArticles(res.posts)
            } else {
                setArticles([])
                setError(true)
            }
        }).finally(_ => setLoading(false))
    }, [])


    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className="ArticlesPage body-part">
            {/* <Breadcrumbs/> */}
            <div className="container">
                <div className="ArticlesPage__in">
                    <div className="ArticlesPage__body">
                        {
                            loading ? (
                                <DefaultLoader/>
                            ) : (
                                error ? (
                                    <EmptyList text={'Нет статей'}/>
                                ) : (
                                    articles.map((item,index) => (
                                        <div className="ArticlesPage__body_item" key={index}>
                                            <ArticleCard 
                                                title={item.title}
                                                date={item.date}
                                                descr={item.body}
                                                link={`/articles/${item.title}`}
                                                image={item.articleImage?.photosLinks?.length > 0 ? item.articleImage?.photosLinks[0] : null}/>
                                        </div>
                                    ))
                                )
                            )
                        }
                        
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ArticlesPage;