import React from 'react';
import '../styles/prize.css';

const Services = (props) => {
    const {value} = props;
    const service = value.map(item => <Service key={item.id} name={item.name} prize={item.prize} color={item.color} font={item.font} />)
     return ( 
        <>
            <div className="services col-12 col-xl-10">
                {service}
            </div>
        </>
     );
};

const Service =(props)=>{
    const {name,prize} = props;
    return(
        <>
            <div className='services-elements'>
                <div className='services-element'><p>{name}<br/></p></div>
                <div className='services-element'><p>{prize}</p></div>
            </div>            
        </>
    );
};

 
export default Services;