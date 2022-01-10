import imageNorton from '../../images/norton_logo.png'
import imageMcafee from '../../images/mcafee_logo.png'
import imageComodo from '../../images/comodo_logo.png'
import imageVerisign from '../../images/verisign_logo.png'
import css from './CustomerInfo.module.css';

const CustomerInfo = () => {
  return (
    <section className={css['custumer-info']}>
      <div className={css['customer-info__title']}>
        <h5>Customer Information</h5>
        <h6>Fields marked as (*) are required.</h6>
      </div>
      <form className={css.form}>
        <div>
          <input type="text" placeholder='First name*' />
        </div>
        <div>
          <input type="text" placeholder='Last name*'/>
        </div>
        <div>
          <h5>Customer Information</h5>
        </div>
        <div className={css['shipping-input__wrapper']}>
          <input type="text" placeholder='Address*'/>
        </div>
        <div className={css['select__wrapper']}>
          <label htmlFor="country">Country*</label>
          <select type="text" placeholder='Select'>
          <option value="">Select</option>
          </select >
        </div>
        <div className={css['select__wrapper']}>
          <label htmlFor="region">Region/State*</label>
          <select type="text" placeholder='region*'>
          <option value="">Select</option>
          </select >
        </div>
        <div>
          <input className={css['shipping-input__wrapper']} type="text" placeholder='Postal code*'/>
        </div>
        <div>
          <h5>Payment Method</h5>
        </div>
        <div className={css['payment-method']}>
          <div>
            <h5>Credit card</h5>
          </div>
          <div className={css['payment-method__grid__container']}>
            <div className={css['input1']}>
              <input type="text" placeholder='Card number'/>
            </div>
            <div className={css['input2']}>
              <input type="text" placeholder='MM/YY'/>
            </div>
            <div className={css['input3']}>
              <input type="text" placeholder='CVV'/>
            </div>
          </div>
        </div>
        <div>
          <button className={css['form-button']}>COMPLETE ORDER</button>
        </div>
        <div className={css['secure-icons__container']}>
          <div className={css['secure-icons']}>
            <img src={imageNorton} alt="" />
          </div>
          <div className={css['secure-icons']}>
            <img src={imageVerisign} alt="" />
          </div>
          <div className={css['secure-icons']}>
            <img src={imageMcafee} alt="" />
          </div>
          <div className={css['secure-icons']}>
            <img src={imageComodo} alt="" />
          </div>
        </div>
      </form>
    </section>
  )
}

export default CustomerInfo
