import css from './ShopCartItem.module.css';


const ShopCartItem = ({item, onDeleteItem}) => {

  const removeItem = () => {
    onDeleteItem(item.id)
  }

  return (
    <>
      <div className={css['cart-item']}>
        <div className={[css['d-flex']]}>
          <img src={item.img} alt='' />
          <div>
            <span>{item.quantity}x</span>
            <span>{item.name}<sup>&reg;</sup></span>
            <div className={css.hide}>
              <span onClick={removeItem}>x Remove</span>
            </div>
          </div>
        </div>
        <div>
          <i className="fa fa-usd"></i>
          <span>{item.price}</span>
        </div>
      </div>
    </>
  )
}

export default ShopCartItem
