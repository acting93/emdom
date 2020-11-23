import React from 'react';
import '../../styles/contact.css';

const FormSent = () => {
    return ( 
        <>
            <div className='info-sent'>
                <div className='icon-sent'>
                    <i className="fa fa-check ok-icon" aria-hidden="true"></i>
                </div>
                <p>Formularz został wysłany, dziękujemy za kontakt.</p>
            </div> 
        </>
     );
};
 
export default FormSent;