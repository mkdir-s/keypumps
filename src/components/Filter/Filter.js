import './Filter.scss';
import Button from '../Button/Button';
import { Collapse, Slider } from 'antd';
import { useState, useEffect } from 'react';
import { NumericFormat } from 'react-number-format';
import { Checkbox } from 'antd';
const { Panel } = Collapse;

const Filter = ({filters, selectFilters, selected, priceFilter, setOffset}) => {
    const [priceStart, setPriceStart] = useState(0);
    const [priceEnd, setPriceEnd] = useState(2000000);

  

    const handlePriceChangeSlider = (v) => {
        setPriceStart(v[0]);
        setPriceEnd(v[1])
        
    }

    const handleStartPriceChange = (v) => {
        setPriceStart(v.floatValue)
    }

    const handleEndPriceChange = (v) => {
        setPriceEnd(v.floatValue)
    }

    const afterChange = (v) => {
        setOffset(0)
        priceFilter(v[0], v[1])
    }



    // фильтарция

    const filterHandle = (e) => {
        setOffset(0)
        if(e.target.checked) {
            selectFilters(filters => {
                return [
                    ...filters,
                    e.target.name
                ]
            })
        } else {
            selectFilters(filters => {
                return filters.filter(item => item != e.target.name)
            })
        }
    }

    const resetFilter = () => {
        selectFilters([])
        setOffset(0)
    }

    
    



    return (
        <div className="Filter">
            <div className="Filter__reset">
                <Button onClick={resetFilter} text={'Сбросить фильтры'} variant={'warning-tr'}/>
            </div>
            <div className="Filter__body">
                <h3 className="Filter__body_name">Фильтр</h3>
                <div className="Filter__body_part">
                    <Collapse expandIconPosition='end'>
                        <Panel header='Цена'>
                            <div className="Filter__body_part_in">
                                <div className="Filter__body_part_prc">
                                    <div className="Filter__body_part_prc_vals">
                                        <div className="Filter__body_part_prc_vals_item">
                                            <NumericFormat 
                                                type='text' 
                                                value={priceStart} 
                                                thousandsGroupStyle={'thousand'} 
                                                thousandSeparator={' '}
                                                suffix={' ₽'}
                                                isAllowed={(values, sourceInfo) => {
                                                    const { value } = values;
                                                    return value <= 2000000 && value >= 0;
                                                  }}
                                                
                                                onChange={handleStartPriceChange}
                                                />
                                        </div>
                                        <div className="Filter__body_part_prc_vals_item">
                                            <NumericFormat 
                                                type='text' 
                                                value={priceEnd} 
                                                thousandsGroupStyle={'thousand'} 
                                                thousandSeparator={' '}
                                                suffix={' ₽'}
                                                isAllowed={(values, sourceInfo) => {
                                                    const { value } = values;
                                                    return value <= 2000000 && value >= 0;
                                                  }}
                                                onChange={handleEndPriceChange}
                                                />
                                        </div>
                                    </div>
                                    <div className="Filter__body_part_prc_slider">
                                        <Slider 
                                            onAfterChange={afterChange}
                                            min={0} 
                                            max={2000000} 
                                            range 
                                            value={[priceStart, priceEnd]}
                                            tooltip={{
                                                open: false
                                            }}
                                            onMouseUp
                                            onChange={handlePriceChangeSlider}
                                            
                                            
                                            />
                                    </div>
                                </div>
                            </div>
                        </Panel>
                    </Collapse>
                </div>
                {
                    filters && filters.length > 0 ? (
                        filters.map((item, index) => (
                            <div className="Filter__body_part" key={index}>
                                <Collapse expandIconPosition='end'>
                                    <Panel header={item.title}>
                                        <div className="Filter__body_part_in">
                                            <div className="Filter__body_part_chs">
                                                {
                                                    item.subfilters?.length > 0 ? (
                                                        item.subfilters.map((item, index) => (
                                                            <div className="Filter__body_part_chs_item" key={index}>
                                                                <Checkbox checked={
                                                                    selected.find(i => {
                                                                        if(i == item) {
                                                                            return true
                                                                        } else {
                                                                            return false
                                                                        }
                                                                    })
                                                                } onChange={filterHandle} name={item}>{item}</Checkbox>
                                                                {/* <span className="Filter__body_part_chs_item_vl">(10)</span> */}
                                                            </div>
                                                        ))
                                                    ) : null
                                                }
                                                
                                            </div>
                                        </div>
                                    </Panel>
                                </Collapse>
                            </div>
                        ))
                    ) : null
                }
            </div>
        </div>
    )
}

export default Filter;