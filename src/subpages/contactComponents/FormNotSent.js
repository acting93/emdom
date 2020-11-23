import React from 'react';
import '../../styles/contact.css';


const FormNotSent = () => {
    return ( 
        <>
            <div className='info-sent'>
                <div className='icon-sent'>
                    <i className="fas fa-times" aria-hidden="true"></i>
                </div>
                <p>Formularz z przyczyn technicznych nie został wysłany, wybacz. Proszę zadzwoń do mnie lub napisz maila przez swoją własną pocztę. Dziękuję. </p>
            </div> 
        </>
     );
};
 
export default FormNotSent;