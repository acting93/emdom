import React from 'react';
import '../styles/footer.css';
import footerLogo from '../images/embud2.png';

const Footer = () => {
    return ( 
        <>
            <footer className='footer col-12'>
                <div className='footer-content col-12 col-xl-10'>
                    <div className="footer-logo col-12 col-sm-4 col-lg-3"><img src={footerLogo} alt="footer-logo" /></div>
                    <div className="footer-contact col-12 col-sm-8 col-lg-6">
                        <ul>
                            <li><p><i className="fas fa-home footer-icon"></i></p><p className="footer-info">EMIL DOMAGAŁA "EMDOM-BHP</p></li>
                            <li><p><i className="fas fa-directions footer-icon"></i></p><p className="footer-info">26-640 Chomentów-Puszcz, Mazowieckie</p></li>
                            <li><p><i className="fas fa-phone-square footer-icon"></i></p><p className="footer-info">123-456-789</p></li>
                            <li><p><i className="fas fa-envelope-open footer-icon"></i></p><p className="footer-info">EMIL DOMAGAŁA "EMDOM-BHP"</p></li>
                        </ul>
                    </div>
                    <div className='footer-nav col-12 col-lg-3'>
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