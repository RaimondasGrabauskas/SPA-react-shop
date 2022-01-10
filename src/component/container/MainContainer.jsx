import FormContainer from './FormContainer';
import css from './MainContainer.module.css';

const MainContainer = () => {
  return (
    <main className={css['main-container']}>
      <div>
        <h5>PAYMENT AND SHIPPING</h5>
      </div>
      <FormContainer />
    </main>
  )
}

export default MainContainer
