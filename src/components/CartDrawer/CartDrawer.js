import React from 'react';
import './cartDrawer.scss'

function CartDrawer(props) {
  return(
    <div className={props.openClose ? "drawer" : "hidden"}>
    {/* <div className=> */}
      <button className="closeDrawer" onClick={props.toggleClose}>
        <i className="fas fa-times" aria-hidden="true" title="Close Cart"></i>
      </button>
      <ul>
        {props.cartItems.map((item)=> {
          return (
            <li className="cartItem">
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </li>
          );
        })}
      </ul>
      <div className="totalPrice">
      <h3>Total: ${props.finalPrice === 0 ? "" :  props.finalPrice}</h3>
      </div>
      <div className="cartBtns">
        <button className="clearCart btn" onClick={props.removeAllItem}>Clear Cart</button>
        <button className="checkOut btn">Checkout</button>
      </div>
    </div>
  );
};

export default CartDrawer;