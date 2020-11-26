import React, { Component } from 'react';
import '../styles/homepage.css';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() {
        return (
            <> 
                <div className='homepage-slider'>
                    <span><p>Usługi BHP i PPOŻ</p></span><br/>
                    <span><p>Bezpieczeństwo i ochrona pracy</p></span>
                </div>
                <section className='container-homepage col-12'>
                    <div className="homepage-info col-12 col-md-8 col-lg-12">
                        <div className="info-photo col-12 col-lg-6"></div>
                        <div className="info col-12 col-lg-6">
                            <span className="span-title">Czym się zajmujemy ?</span>
                            <span className="span-description">Firma świadczy usługi BHP na najwyższym poziomie, z pełnym zaangażowaniem, na bieżąco szkoli w zakresie zarządzania bezpieczeństwem i higieną pracy.
                                  Standardem jest zadowolenie pracowników i pracodawców z przeprowadzonych szkoleń. Stosuje jasne i zrozumiałe, a zarazem skuteczne rozwiązania z zakresu bezpieczeństwa pracy zgodnie z polskim prawodawstwem. Usługi świadczy doraźnie wedle potrzeb lub poprzez umowę współpracy.
                            </span>
                        </div>
                    </div>
                </section>
                <section className='container-homepage col-12'>
                    <div className="homepage-info col-12 col-md-8 col-lg-12">
                        <div className="info col-12 col-lg-6">
                        <span className="span-title">Firma Emdom-BHP realizuje:</span>
                            <span className="span-description">
                                <ul>
                                    <li>wdrażanie systemów bezpieczeństwa</li>
                                    <li>przeprowadzanie kontroli stanu urządzeń technicznych BHP i PPOŻ</li>
                                    <li>zarządzanie bezpieczeństwem i ochroną pracy wykorzystując najnowsze technologie i rozwiązania techniczne.</li>
                                    <li>dobieranie odpowiednich rozwiązań dla obniżenia kosztów w firmie, a tym samym zwiększenie wydajności.</li>
                                </ul>
                            </span>
                        </div>
                        <div className="info-photo col-12 col-lg-6"></div>
                    </div>
                </section>
                <section className='container-homepage col-12'>
                    <div className="homepage-info col-xl-12">
                        <div className="info">
                            <p>Firma Emdom-BHP zapewnia bezpieczeństwo w zakresie obsługi różnych podmiotów gospodarczych dotyczy to zarówno firm o działalności typowo biurowej jak i obsługi BHP dużych inwestycji budowlanych.</p>
                            <p>Świadczymy usługi BHP na najwyższym poziomie, z pełnym zaangażowaniem, na bieżąco szkoli w zakresie zarządzania bezpieczeństwem i higieną pracy.</p>
                            <p>Standardem jest zadowolenie pracowników i pracodawców z przeprowadzonych szkoleń. Stosuje jasne i zrozumiałe, a zarazem skuteczne rozwiązania z zakresu bezpieczeństwa pracy zgodnie z polskim prawodawstwem. Usługi świadczy doraźnie wedle potrzeb lub poprzez umowę współpracy.</p>
                            <p>Oferuję usługi BHP oraz PPOŻ na terenie Warszawy, Radomia oraz okolic tych miast. </p>
                        </div>
                    </div>
                </section>
                <section className='maps'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1250800.7735279389!2d20.072840856956958!3d52.243923821372775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ed1800c8bd8f9%3A0x1029fb79438c080!2sMasovian%20Voivodeship!5e0!3m2!1sen!2spl!4v1605992890726!5m2!1sen!2spl" title='map' style={{width:'100%',height:'100%'}}></iframe>
                </section>        
            </> 
        );
    }
}
 
export default Homepage;