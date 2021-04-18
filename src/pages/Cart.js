import React from 'react';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom'

const Cart = ({cart, removeItem}) => {
  return cart.length ? (
    <div className="container">
      <div className="grid">
       {cart.map((product) => (
        <CartItem
          key={product.id}
          product={product}
          removeItem={removeItem}
        />
       ))}
       </div>
    </div>
  ) : (
      <div className="container">
        <div className="text-info text-center mt-5">
          <i className="fas fa-shopping-basket" style={{fontSize: "10rem"}}></i>
          <h2>We're sorry but your shopping basket is empty</h2>
          <p>Click this button to go home</p>
          <button className="btn btn-primary"><Link to="/">Home</Link></button>
          </div>
    </div>
  )
}

export default Cart
