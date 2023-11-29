import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'


const Cart = (props) => {
  const cartCtx=useContext(CartContext);
  const totalAmount=cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  const cartItemsRemoveHandler=id=>{
    cartCtx.removeItem(id)
       
  };
  const cartItemHandler = item=>{
    console.log(item)
    cartCtx.addItem({...item,amount:1})
  };
    const cartItem= <ul className={classes['cart-items']}>
      {cartCtx.items.map(i=><CartItem 
      key={i.id} 
      i={i} 
      onRemove={cartItemsRemoveHandler.bind(null,i.id)} 
      onAdd={cartItemHandler.bind(null,i)}
      />)}
      </ul>
  return (

    <Modal onClose={props.onClose}>
        {cartItem}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>${totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div> 
    </Modal>
  )
}

export default Cart