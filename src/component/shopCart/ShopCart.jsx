import { useEffect, useState } from 'react'
import data from '../../data/mockData';
import ShopCartItem from './ShopCartItem';
import css from './ShopCart.module.css';

const ShopCart = () => {
  const [cartData, setCartData] = useState([]);
 
  useEffect(() => {
    setCartData(data);
  }, [])
  
  const deleteItem = (itemId) => {
    const removeItem = cartData.filter((item) => item.id !== itemId);
    setCartData(removeItem);
  }
  
  const totalSum = () => {
     let sum = cartData.reduce((a, b) => a + b.price, 0);
     return sum.toFixed(2);
  }
  

  return (
    <section className={css.cart} >
      {cartData.map((data) => (
        <ShopCartItem key={data.id} 
          item={data}
          onDeleteItem={deleteItem}
        /> 
      ))}
      <div className={css['shop-cart__total__wrapper']}>
        <div>
          <span>Total</span>
        </div>
        <div>
          <span>USD</span>
          <i className="fa fa-usd"></i>
          <span>{totalSum()}</span>
        </div>
      </div>
    </section>
  )
}

export default ShopCart
