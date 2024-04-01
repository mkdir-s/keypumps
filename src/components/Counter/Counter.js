import './Counter.scss';
import {PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { useState } from 'react';

const MAX_VAL = 20;
const MIN_VAL = 0;

const Counter = ({value, dec, inc, min, max}) => {


    
    // const handleDec = () => {
    //     if(value > MIN_VAL) {
    //         setValue(value => value - 1)
    //     } else {
    //         return
    //     }
    // }

    // const handleInc = () => {
    //     if(value < MAX_VAL) {
    //         setValue(value => value + 1)    
    //     } else {
    //         return;
    //     }
        
    

    return (
        <div className="Counter">
            <button type='button' onClick={dec} className="Counter__btn Counter__btn-deс"><MinusOutlined /></button>
            <input value={value} readOnly type="number" className='Counter__input'/>
            <button type='button' onClick={inc} className="Counter__btn Counter__btn-inc"><PlusOutlined /></button>
        </div>
    )
}

export default Counter;