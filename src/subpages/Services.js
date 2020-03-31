import React from 'react';
import '../styles/services.css'
import Miasto from '../images/miasta.png'

const Services = () => {
    return ( 
        <>
            <section className='services-section col-12'>
                <img src={Miasto} alt="miasta" />
            </section>
        </>
     );
}
 
export default Services;