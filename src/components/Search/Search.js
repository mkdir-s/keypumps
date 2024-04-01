import './Search.scss';
import {
    SearchOutlined
  } from '@ant-design/icons';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import dataService from '../../services/dataService';
import { Dropdown } from 'antd';
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';
import useContent from '../../hooks/useContent';
import DefaultLoader from '../Loaders/DefaultLoader/DefaultLoader';
import EmptyList from '../Placeholders/EmptyList/EmptyList';
import { endpoints } from '../../services/endpoints';
const ds = new dataService();



const Result = ({result, loading, notresult}) => {

    if(result && !loading && !notresult) {
        return (
            <div className="Result">
                {
                    result?.length > 0 ? (
                        result.map((item, index) => (
                            <Link to={`/catalog/${item.category}/${item.title}`} className="Result__item" key={index}>
                                {
                                    item.productImages?.photosLinks?.length > 0 ? (
                                        <div className="Result__item_img">
                                            <img src={item.productImages.photosLinks[0]} alt="" />
                                        </div>
                                    ) : (
                                        <div className="Result__item_img">
                                            
                                        </div>
                                    )
                                }
                                <div className="Result__item_body">
                                    <div className="Result__item_body_name">{item.title}</div>
                                    <div className="Result__item_body_price">
                                        <NumericFormat value={item.price} suffix={'₽'} thousandSeparator={' '} thousandsGroupStyle={'thousand'}/>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : null
                }
                
            </div>
        )
    }

    if(loading || (loading && result)) {
        return (
            <div className="Result">
                <DefaultLoader/>
            </div>
        )
    }

    if(notresult) {
        return (
            <div className="Result">
                <EmptyList text={'Ничего не найдено'}/>
            </div>
        )
    }
    
}
const controller = new AbortController();
  
const Search = () => {
    const [searchVal, setSearchVal] = useState('');
    const [resultVis, setResultVis] = useState(false);
    const [resultList, setResultList] = useState([]);
    const inputRef = useRef();

    const {loading, error, setLoading, setError} = useContent();
    
  

    useEffect(() => {
        
        if(searchVal?.length > 0) {
            setResultVis(true)
        } else {
            setResultList(false)
        }

        setResultList([])
        setLoading(true)
        
        const control = new AbortController();
        
        ds.search(searchVal, 7, control).then(res => {
            
            if(res?.length > 0 && res[0] != null) {
                setError(false);
                setResultList(res)
                // console.log(res)
            } else {
                setResultList([])
                setError(true)
            }

        }).finally(_ => {
            setLoading(false)
        })

    }, [searchVal])

    const handleSearch = (e) => {
        setSearchVal(e.target.value)
    }



    const closeResult = (e) => {
        if(e.target.classList.contains('Result') || 
        e.target.classList.contains('Result__item') || 
        e.target.classList.contains('Result__item_img') || 
        e.target.classList.contains('Result__item_body') || 
        e.target.classList.contains('Result__item_body_name') ||
        e.target.classList.contains('Result__item_body_price') || 
        e.target.classList.contains('Search__input_icon')) {

            setResultVis(true)
        } else {
            setResultVis(false)
        }
    }

   

    useEffect(() => {
        window.addEventListener('click', closeResult)

        return () => {
            window.removeEventListener('click', closeResult)
        }
    }, [])

 
    return (

        <Dropdown overlay={<Result result={resultList} loading={loading} notresult={error}/>} open={resultVis}>
            <div className="Search">
                <div className="Search__input">
                    <input value={searchVal} ref={inputRef} onChange={handleSearch}  type="text" className='Search__input_el' placeholder='Поиск'/>
                    <div className="Search__input_icon">
                        <SearchOutlined style={{pointerEvents: 'none'}}/>
                    </div>
                </div>
            </div>
        </Dropdown>
        
    )
}

export default Search;