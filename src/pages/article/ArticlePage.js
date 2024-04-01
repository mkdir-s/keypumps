import './ArticlePage.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import dataService from '../../services/dataService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useContent from '../../hooks/useContent';
import DefaultLoader from '../../components/Loaders/DefaultLoader/DefaultLoader';
import 'moment/locale/ru';
import 'moment-timezone';
import Moment from 'react-moment';
import { motion } from 'framer-motion';

const ds = new dataService();

const ArticlePage = () => {
    const {loading, setLoading} = useContent();
    const {article} = useParams();
    const [articleData, setArticleData] = useState({});

    useEffect(() => {
        setLoading(true)
        if(article) {
            ds.getDetailArticle(article).then(res => {
                console.log(res);
                setArticleData(res.post) 
            }).finally(_ => setLoading(false))
        }
        
    }, [article])

    

    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className="ArticlePage body-part">
            {/* <Breadcrumbs/> */}
            <div className="container">
                <div className="ArticlePage__in">
                    <div className="ArticlePage__body">
                        {
                            loading ? (
                                <DefaultLoader/>
                            ) : (
                                <>
                                    <h2 className="ArticlePage__body_head">
                                        {articleData.title}
                                    </h2>
                                    {
                                        articleData.postImages?.photosLinks?.length > 0 ? (
                                            <div className="ArticlePage__body_img">
                                                <img src={articleData.postImages?.photosLinks[0]} alt="" />
                                            </div>
                                        ) : null
                                    }

                                    <div className="ArticlePage__body_descr">
                                        {articleData.body}
                                    </div>
                                    <div className="ArticlePage__body_info">
                                        <div className="ArticlePage__body_info_part"></div>
                                        <div className="ArticlePage__body_info_date">
                                        <Moment locale='ru' date={articleData.date} format={"DD.MM.YYYY"}/>
                                        </div>
                                    </div>
                                    
                                </>
                            )
                        }
                        
                    </div>
                </div>
            </div>
            
        </motion.div>
    )
}

export default ArticlePage;