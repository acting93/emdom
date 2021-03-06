import React from 'react';
import '../styles/prize.css';
import AttentionImg from '../images/UWAGA.png';

const ServicesFirm = (props) => {

    const {value} = props;

    const ServicesFirm = value.map(item=> <ServiceFirm key={item.id} name={item.name} prize={item.prize} gross={item.gross}/>);

    return ( 
          <>
            <div className="firm-container">
                {ServicesFirm}
            </div>
            <div className='services-description col-12'>
                <div className='description-element col-12 col-md-6'>
                    <img src={AttentionImg} alt=''/>
                </div>
                <div className='description-element col-12 col-md-6'>
                    <p>Powyższy cennik zawiera orientacyjne koszty usług proponowanych przez moją firmę. Każda oferta wyceniana jest indywidualnie i dostosowana do aktualnych zapotrzebowań klienta.</p>
                </div>
            </div>
          </>      
     );
}

const ServiceFirm = props =>{
    
    const {name,prize,gross} = props;

    return(
        <div className="prize-firm">
            <div className='prize-employee'>
                <p className="name-prize">Zatrudnienie: <br/>{name}</p><br/>
            </div>
            <div className='prize-prize'>
                <p className="prize">{prize} {gross}</p>
            </div>
        </div>
    )
};
 
export default ServicesFirm;