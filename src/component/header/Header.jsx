import { useState } from 'react';
import ShopCart from '../shopCart/ShopCart'
import css from './Header.module.css'
const Header = () => {

  const [showCartList, setShowCartList] = useState(false);

  const toggleShopCart = () => {
    setShowCartList(!showCartList);
  }

  return (
    <>
      <header className={css.header}>
        <div>
          <i className="fa fa-shopping-cart"></i>
          <span>ORDER SUMMARY</span>
          <i className={showCartList ? "fa fa-angle-up" : "fa fa-angle-right"} onClick={toggleShopCart}></i>
        </div>
        <div>
          <i className="fa fa-usd"></i>
          <span>49.98</span>
        </div>
      </header>
      {showCartList && <ShopCart />}
    </>
  )
}

export default Header
