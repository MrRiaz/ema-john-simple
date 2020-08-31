import React from 'react';
import './ReviewItems.css';

const ReviewItems = (props) => {
    const {name, quantity, key, price} = props.product;
    const style = {
       borderBottom: '1px solid lightgray',
       marginBottom: '5px',
       paddingBottom: '5px',
       marginLeft: '200px',
    }
    return (
            <div style={style}>
                <h5 className='product-name'>{name}</h5>
                <p>Quantity: {quantity} </p>
                <p><small>$ {price}</small></p>
                <button onClick = { () => props.removeItem(key)} className='main-button'> Remove </button>
            </div>
    );
};

export default ReviewItems;