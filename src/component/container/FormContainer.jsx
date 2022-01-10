import CustomerInfo from '../customerInformation/CustomerInfo'
import css from './FormContainer.module.css'

const FormContainer = () => {
  return (
    <section className={css['form-container']}>
      <CustomerInfo />
    </section>
  )
}

export default FormContainer
