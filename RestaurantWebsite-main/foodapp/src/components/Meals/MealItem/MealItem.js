import React from 'react'
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css'
import CartContext from '../../../store/cart-context';
import { useContext } from 'react';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

    const price=`$${props.i.price.toFixed(2)}`;
    const addToCartHandler = amount=>{
      cartCtx.addItem({
        id:props.i.id,
        name:props.i.name,
        amount:amount,
        price:props.i.price
      });
      

    };
  return (
    <li className={classes.meal}>
        <div>
            <h3>{props.i.name}</h3>
            <div className={classes.description}>{props.i.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm  onAddToCart={addToCartHandler}/>

        </div>
    </li>
  )
}

export default MealItem