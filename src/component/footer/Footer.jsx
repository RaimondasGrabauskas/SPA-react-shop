import css from './Footer.module.css';

import logoipsum from '../../images/logoipsum-logo.svg';
const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css['footer-icon']}>
        <img src={logoipsum} alt="" />
      </div>
      <div>
        <ul>
          <li>Terms of services</li>
          <li>Privacy Policy</li>
          <li>Returns</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div>
        <span>&copy; 2022 MAXHDS. All rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer
