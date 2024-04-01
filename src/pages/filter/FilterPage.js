import Filter from "../../components/Filter/Filter";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import './FilterPage.scss';
import FilterList from "../../components/FilterList/FilterList";
import Ribbon from '../../components/Ribbon/Ribbon';
import dataService from '../../services/dataService';
import { useEffect, useState } from "react";
import Fb from '../../components/Fb/Fb'; 
import { useParams } from "react-router-dom";
import useContent from "../../hooks/useContent";
import {motion} from 'framer-motion';

const ds = new dataService();





const FilterPage = () => {
    const {loading, setLoading} = useContent();
    const [recentList, setRecentList] = useState([]);
    const {categoryTitle} = useParams();

    const [catProds, setCatProds] = useState([]);
    const [filtersList, setFiltersList] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState([]);

    const [startPrice, setStartPrice] = useState(0);
    const [endPrice, setEndPrice] = useState(2000000);
    const [count, setCount] = useState(18);
    const [offset, setOffset] = useState(0);

    const [sorting, setSorting] = useState(1)
    const [totalLength, setTotalLength] = useState(0);

    const [btnDis, setBtnDis] = useState(false);
    const [fns, setFns] = useState(false)
    

    useEffect(() => {
        document.body.classList.add('touch-disabled')
        if(categoryTitle) {
            ds.getPopularProds().then(res => setRecentList(res))
            ds.getDetailCategory(categoryTitle).then(res => {
                setSelectedFilters([])
                setFiltersList(res?.post?.filters);
            })
        }
    }, [categoryTitle])





    // useEffect(() => {
    //     setOffset(0)
    // }, [sorting, categoryTitle])

  



    // фильтровать
    useEffect(() => {
        document.body.classList.add('touch-disabled')
        setLoading(true)  


        if(categoryTitle && sorting) {
            if(offset == 0) {
                
                ds.getProductFilter(
                    categoryTitle, 
                    selectedFilters, 
                    startPrice, 
                    endPrice, 
                    count,
                    offset,
                    sorting).then(res => {
                      
                    setTotalLength(res.length);
                    setCatProds(res)

                    
                    
                    if(res.length <= 0) {
                        setFns(true)
                    } else {
                        setFns(false)
                    }

                    
                }).finally(_ => {
                    setLoading(false)
                    document.body.classList.remove('touch-disabled')
                })
            }
            if(offset > 0) {
               
                setBtnDis(true)
                ds.getProductFilter(
                    categoryTitle, 
                    selectedFilters, 
                    startPrice, 
                    endPrice, 
                    count,
                    offset,
                    sorting).then(res => {
                        
                    setTotalLength(res.length);
                    setCatProds(state => {
                        return [
                            ...state,
                            ...res
                        ]
                    })
                    
                    if(res.length <= 0) {
                        setFns(true)
                    } else {
                        setFns(false)
                    }
                    
                    
                }).finally(_ => {
                    setBtnDis(false)
                    setLoading(false)
                    document.body.classList.remove('touch-disabled')
                })
            }
        }
        
    }, [selectedFilters, startPrice, endPrice, sorting, categoryTitle, count, offset])









    const priceFilter = (start, end) => {
        setStartPrice(start)
        setEndPrice(end)
    }
    const handleRemoveChip = (chip) => {
        setSelectedFilters(state => {
            return state.filter(item => item != chip);
        })
    }



    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className="FilterPage body-part">
            {/* <Breadcrumbs/> */}
            <div className="container">
                <div className="FilterPage__in">
                    <div className="FilterPage__head section-title">{categoryTitle}
                     {/* <span>({catProds?.length > 0 ? catProds.length : 0})</span> */}
                     </div>
                    <div className="FilterPage__body">
                        
                        <Filter 
                            selected={selectedFilters} 
                            selectFilters={setSelectedFilters} 
                            filters={filtersList}
                            priceFilter={priceFilter}
                            setOffset={setOffset}/>

                        
                        <FilterList
                            totalLength={totalLength} 
                            loading={loading}
                            removeFilter={handleRemoveChip} 
                            chips={selectedFilters} 
                            list={catProds}
                            setSorting={setSorting}
                            setOffset={setOffset}
                            btnDis={btnDis}
                            fns={fns}/>

                    </div>
                    <Ribbon 
                        list={recentList} 
                        title={'Популярные продукты'} 
                        type={'products'} 
                        spv={4}/>
                </div>
            </div>
            <Fb/>
        </motion.div>
    )
}

export default FilterPage;