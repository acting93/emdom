import React from 'react';
import '../../styles/contact.css';

const ContactElements = () => {
    return ( 
        <>
        <div className='adress'>
            <div className='adress-element'>
                <i className="fas fa-home footer-icon"></i>
                <p className='adress-element-title'>Firma</p>
                <p>Usługi BHP i PPOŻ EMDOM-BHP</p>
            </div>
            <div className='adress-element'>
                <i className="fas fa-directions footer-icon"></i>
                <p className='adress-element-title'>Adres</p>
                <p>26-640 Chomentów-Puszcz</p>
                <p>05-550 Piaseczno</p>
            </div>
            <div className='adress-element'>
                <i className="fas fa-envelope-open footer-icon"></i>
                <p className='adress-element-title'>Adres e-mail</p>
                <p>"EMDOM-BHP"</p>
            </div>
            <div className='adress-element'>
                <i className="fas fa-phone-square footer-icon"></i>
                <p className='adress-element-title'>Telefon</p>
                <p>123-456-789</p>
            </div>
        </div>
        </>
     );
}
 
export default ContactElements;