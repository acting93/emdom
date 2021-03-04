import React from 'react';
import '../styles/prize.css';
import ExclamationSign from '../images/exclamation.png';

const Services = (props) => {
    const {value} = props;
    const service = value.map(item => <Service key={item.id} name={item.name} prize={item.prize} color={item.color} font={item.font} gross={item.gross}/>);
   
    return ( 
        <>
            <div className="services col-12 col-xl-10">
                {service}
            </div>
            <div className="service-range col-12 col-xl-10">
                <img src={ExclamationSign} alt=''/>
                <p>W ramach stałej współpracy BHP i rozliczenia ryczałtowego miesięcznego firma Emdom–BHP wykonuje:</p>
                <p>Szkolenia BHP wstępne i okresowe</p>
                <p>Szkolenia z udzielania pierwszej pomocy</p>
                <p>Szkolenia w zakresie ochrony PPOŻ.</p>
                <p>Dokumentacje BHP w tym (ocenę ryzyka zawodowego, analizy stanu BHP)</p>
                <p>Instrukcje BHP na stanowisku pracy</p>
                <p>Postępowanie powypadkowe</p>
                <p>I wiele innych w zakresie Służb BHP</p>
            </div>
        </>
     );
};

const Service =(props)=>{
    const {name,prize,gross} = props;
    return(
        <>
            <div className='services-elements'>
                <p><i className="fa fa-check-circle"></i>{name}</p><p>Koszt: {prize} {gross}</p>
            </div>            
        </>
    );
};

export default Services;