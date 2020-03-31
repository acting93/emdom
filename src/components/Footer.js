import React from 'react';
import '../styles/footer.css';
import footerLogo from '../images/kask.png';

const Footer = () => {
    return ( 
        <>
            <footer className='footer col-12'>
                <div className='footer-content col-12 col-xl-10'>
                    <div className="footer-logo"><img src={footerLogo} alt="footer-logo" /></div>
                    <div className="footer-contact">
                        <div className="footer-img"><i className="fas fa-home footer-icon"></i><span className="footer-info">EMIL DOMAGAŁA "EMDOM-BHP</span></div>
                        <div className="footer-img"><i className="fas fa-directions footer-icon"></i><span className="footer-info">26-640 Chomentów-Puszcz, Mazowieckie</span></div>
                        <div className="footer-img"><i className="fas fa-phone-square footer-icon"></i><span className="footer-info">123-456-789</span></div>
                        <div className="footer-img"><i className="fas fa-envelope-open footer-icon"></i><span className="footer-info">EMIL DOMAGAŁA "EMDOM-BHP"</span></div>
                    </div>
                    <div className='footer-nav'>
                        <ul>
                            <li>Strona Główna</li>
                            <li>Usługi</li>
                            <li>Cennik</li>
                            <li>Kontakt</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
     );
}
 
export default Footer;