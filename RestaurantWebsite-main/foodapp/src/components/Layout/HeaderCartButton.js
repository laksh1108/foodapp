import React from 'react'
import CartIcon from '../Cart/CartIcom'
import classes from './HeaderCartButton.module.css'
import { useContext } from 'react'
import cartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {
  const cartCtx=useContext(cartContext);
  const numberOfCartItems=cartCtx.items.reduce((curNumber,item)=>{
    return curNumber+item.amount;
  },0);


  return (
    <button className={classes.button} onClick={props.onClick}>
        <span>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}> {numberOfCartItems}</span>
    </button>
   
  )
}

export default HeaderCartButton