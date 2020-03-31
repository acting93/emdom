import React from 'react';
import '../styles/prize.css'

const Services = (props) => {
    const {value} = props 
    const service = value.map(item => <Service key={item.id} name={item.name} prize={item.prize} />)
     return ( 
        <>
            <div className="services">
                <ul>{service}</ul>
            </div>
        </>
     );
}


const Service =(props)=>{
    const {name,prize} = props
    return(
        <>
            <li>
                <span>{name}<br/></span>
                <span style={{color:"green"}}>Cena: {prize}</span>
            </li>            
        </>
    )
}

 
export default Services;