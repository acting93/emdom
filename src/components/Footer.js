import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/footer.css';
import footerLogo from '../images/embud2.png';
import react from '../images/react.png';

const Footer = () => {
    return ( 
        <>
            <footer className='footer col-12'>
                <div className='footer-content col-12 col-xl-10'>
                    <div className="footer-logo col-12 col-sm-4 col-lg-3"><img src={footerLogo} alt="footer-logo" /></div>
                    <div className="footer-contact col-12 col-sm-8 col-lg-6">
                        <p className='footer-contact-title'>Dane kontaktowe:</p>
                        <ul>
                            <li><i className="fas fa-home footer-icon"></i><p className="footer-info">EMDOM-BHP</p></li>
                            <li><i className="fas fa-directions footer-icon"></i><p className="footer-info">26-640 Chomentów-Puszcz,<br/>05-500 Piaseczno</p></li>
                            <li><i className="fas fa-phone-square footer-icon"></i><p className="footer-info">503544971</p></li>
                            <li><i className="fas fa-envelope-open footer-icon"></i><p className="footer-info">emdom.bhp@gmail.com</p></li>
                        </ul>
                    </div>
                    <div className='footer-nav col-12 col-lg-3'>
                        <ul>
                            <li><NavLink exact to='/'>Strona Główna</NavLink></li>
                            <li><NavLink to='/prize'>Cennik</NavLink></li>
                            <li><NavLink to='/contact'>Kontakt</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className='preparation col-12'>
                    <p>Przygotowanie: Wojciech Żuwalski - &copy;2020</p>
                    <img src={react} alt=''/>
                </div>
            </footer>
        </>
     );
};
 
export default Footer;