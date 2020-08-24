import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const total = cart.reduce((total, pdt) => total + pdt.price, 0);
    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     total = total + product.price;
    // }

    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }

    const tax = (total / 10).toFixed(2);

    const grandTotal = total+shipping+Number(tax);

    const formatNumber = (num) => {
        const precision = num.toFixed(2);
        return Number(precision);

    }
    return (
        <div className = 'cart'>
            <h2>Order Summary</h2>
            <p>Items order: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p><small>Shipping: {shipping}</small></p>
            <p><small>Tax + VAT: {tax} </small></p>
            <p>Total Price: {formatNumber(grandTotal)} </p>
        </div>
    );
};

export default Cart;