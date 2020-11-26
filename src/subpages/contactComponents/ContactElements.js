import React from 'react';
import '../../styles/contact.css';

const ContactElements = () => {
    return ( 
        <>
        <div className='adress'>
            <div className='adress-element'>
                <i className="fas fa-home footer-icon"></i>
                <p className='adress-element-title'>Firma</p>
                <p>EMDOM-BHP</p>
                <p>Usługi BHP i PPOŻ</p>
            </div>
            <div className='adress-element'>
                <i className="fas fa-directions footer-icon"></i>
                <p className='adress-element-title'>Adres</p>
                <p>26-640 Chomentów-Puszcz</p>
                <p>05-500 Piaseczno</p>
            </div>
            <div className='adress-element'>
                <i className="fas fa-envelope-open footer-icon"></i>
                <p className='adress-element-title'>Adres e-mail</p>
                <p>emdom.bhp@gmail.com</p>
            </div>
            <div className='adress-element'>
                <i className="fas fa-phone-square footer-icon"></i>
                <p className='adress-element-title'>Telefon</p>
                <p>503544971</p>
            </div>
        </div>
        </>
     );
}
 
export default ContactElements;