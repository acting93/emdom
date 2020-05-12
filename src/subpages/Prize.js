import React from 'react';
import '../styles/prize.css';
import {useState,useEffect} from 'react';
import data from '../services.json';
import Services from '../services/Services';
import ServicesFirm from '../services/ServicesFirm';
import Docs from '../services/Docs';
import {connect} from 'react-redux';

const Prize = () => {

    const[services,setServices] = useState(data.uslugi);
    const[activeService,setService] = useState(true);
    const[servicesFirm,setServicesFirm] = useState(data.firm);
    const[activeFirm,setFirm] = useState(false);
    const[activeDocs, setDocs] = useState(false);
    

const handleService =()=>{
    setService(true)
    setFirm(false)
    setDocs(false)
}
const handleFirm =()=>{
    setService(false)
    setFirm(true)
    setDocs(false)
}
const handleDocs =()=>{
    setService(false)
    setFirm(false)
    setDocs(true)
}


    return (
         <>
            <div className="photo-header">
                    <div className="prize-header">Cennik usług</div>
                    <div className="prize-services">
                        <div style={activeService ? {borderBottom:"5px solid orange"} : null} className="prize-service" onClick={handleService}>Usługi</div>
                        <div style={activeFirm ? {borderBottom:"5px solid orange"} : null} className="prize-service" onClick={handleFirm}>Obsługa firm</div>
                        <div style={activeDocs ? {borderBottom:"5px solid orange"}: null} className="prize-service" onClick={handleDocs}>Dokumentacja</div>
                    </div>
            </div>
            <section className='section-prize col-12'>
                <div className="prize-container col-12">
                    <span className="service-title">Zakres i cennik świadczonych usług:</span>
                    {activeService ? <Services value={services} /> : null}
                    {activeFirm ? <ServicesFirm value={servicesFirm} /> : null}
                    {activeDocs ? <Docs /> : null}
                </div>
            </section>
         </>
     );
}

 
export default Prize;