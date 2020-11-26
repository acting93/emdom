import React from 'react';
import '../styles/prize.css';

const ServicesFirm = (props) => {

    const {value} = props

    const ServicesFirm = value.map(item=> <ServiceFirm key={item.id} name={item.name} prize={item.prize} />);

    return ( 
          <>
            <div className="firm-container">
                {ServicesFirm}
            </div>
            <div className='services-description col-12'>
                <p><i className="fa fa-exclamation-circle" aria-hidden="true"></i></p>
                <p>Powyższy cennik zawiera orientacyjne koszty usług proponowanych przez moją firmę.<br/> Każda oferta wyceniana jest indywidualnie i dostosowana do aktualnych zapotrzebowań klienta.</p>
            </div>
          </>      
     );
}

const ServiceFirm = props =>{
    const {name,prize} = props;

    return(
        <div className="prize-firm">
            <div className='prize-employee'>
                <p className="name-prize">Zatrudnienie: <br/>{name}</p><br/>
            </div>
            <div className='prize-prize'>
                <p className="prize">Cena: {prize}</p>
            </div>
        </div>
    )
};
 
export default ServicesFirm;