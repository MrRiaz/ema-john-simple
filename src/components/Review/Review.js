import React, { useState } from 'react';
import { useEffect } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [carts, setCarts] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false)

    const handlePlaceOrder = () => {
        setCarts([]);
        setOrderPlaced(true)
        processOrder();
    }

    const removeItem = (productKey) => {
        const newCart = carts.filter(pd => pd.key !== productKey);
        setCarts(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        const savedCart = getDatabaseCart(); //ati database theke asce, auto local storage ar data akne input hoy.
        const productKeys = Object.keys(savedCart);

        const cartProduct = productKeys.map( key => {
            const product = fakeData.find( pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
            setCarts(cartProduct);
    }, []);

    let thankYou;
    if(orderPlaced){
        thankYou = <img src={happyImage} alt=""/>
    }

    return (
        <div className = 'twin-container'>
            <div className = 'product-container'>
            {
                carts.map(pd => <ReviewItems 
                     removeItem = {removeItem}
                     key = {pd.key} 
                     product = {pd}></ReviewItems>)
            }

            { thankYou }

            </div>
            <div className = 'cart'>
                <Cart cart = {carts}>
                    <button onClick = {handlePlaceOrder} className="main-button">Place Order</button>
                </Cart>
            </div>
        </div>
    )
};

export default Review;