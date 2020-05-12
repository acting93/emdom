import React from 'react';
import '../styles/prize.css';

const ServicesFirm = (props) => {

    const {value} = props

    const ServicesFirm = value.map(item=> <ServiceFirm key={item.id} name={item.name} prize={item.prize} />)

    return ( 
          <>
            <div className="firm-container">
                {ServicesFirm}
            </div>
            <div className='services-description'>
                <p>Powyższy cennik zawiera orientacyjne koszty usług proponowanych przez moją firmę. Każda oferta wyceniana jest indywidualnie i dostosowana do aktualnych zapotrzebowań klienta.</p>
            </div>
          </>      
     );
}


const ServiceFirm = props =>{
    const {name,prize} = props

    return(
        <div className="prize-firm">
            <div className='prize-employee'>
                <span className="name-prize">Zatrudnienie: <br/>{name}</span><br/>
            </div>
            <div className='prize-prize'>
                <span className="prize">Cena: {prize}</span>
            </div>
        </div>
    )
}
 
export default ServicesFirm;