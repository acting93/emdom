import React from 'react';
import '../styles/alert.css';
import {useDispatch} from 'react-redux';

const InformationAlert = () => {

    const dispatch = useDispatch();

    const closeAlert =()=>{
        dispatch({type:'CLOSE_ALERT',isAlert:false});
    };

    return ( 
        <>
            <section className='information-alert'>
                <div className='alert-title'>
                    <button className='close-alert' onClick={closeAlert}>
                        <span></span>
                        <span></span>
                    </button>
                    <p>Zapraszamy do skorzystania z usług: </p>
                </div>
                
                <div className='alert-content'>
                    <p><i className="fa fa-check" aria-hidden="true"></i> Ocena ryzyka COVID-19 </p>
                    <p><i className="fa fa-check" aria-hidden="true"></i> Opracowywania planu działań zapobiegawczych w związku z zagrożeniem SARS-CoV-2 (COVID-19) </p>
                    <p><i className="fa fa-check" aria-hidden="true"></i> Wdrożenie działań zapobiegawczych w związku z zagrożeniem SARS-CoV-2 (COVID-19) </p>
                </div>
            </section>
        </>
     );
};
 
export default InformationAlert;