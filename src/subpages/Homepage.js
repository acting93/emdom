import React, { Component } from 'react';
import '../styles/homepage.css';
import img1 from '../images/bg2.jpg';
import img2 from '../images/bg.jpg';


class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <>
                <div className='homepage'>
                    <span><p>Usługi BHP i PPOŻ</p></span><br/>
                    <span><p>Bezpieczeństwo i ochrona pracy</p></span>
                </div>
                <section className='container-homepage col-12'>
                    <div className="homepage-info col-xl-12">
                        <div className="info-photo col-12 col-md-6"><img src={img1} alt="img1"/></div>
                        <div className="info col-12 col-md-6">
                            <span className="span-title">Czym się zajmujemy ?</span>
                            <span className="span-description">Firma świadczy usługi BHP na najwyższym poziomie, z pełnym zaangażowaniem, na bieżąco szkoli w zakresie zarządzania bezpieczeństwem i higieną pracy.
                                  Standardem jest zadowolenie pracowników i pracodawców z przeprowadzonych szkoleń. Stosuje jasne i zrozumiałe, a zarazem skuteczne rozwiązania z zakresu bezpieczeństwa pracy zgodnie z polskim prawodawstwem. Usługi świadczy doraźnie wedle potrzeb lub poprzez umowę współpracy.
                            </span>
                        </div>
                    </div>
                </section>
                <section className='container-homepage col-12'>
                    <div className="homepage-info col-xl-12">
                        <div className="info col-12 col-md-6">
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
                        <div className="info-photo col-12 col-md-6"><img src={img2} alt="img2"/></div>
                    </div>
                </section>
                <section className='container-homepage col-12'>
                    <div className="homepage-info col-xl-12">
                        <div className="info">
                            <p>Firma Emdom-BHP zapewnia bezpieczeństwo w zakresie obsługi różnych podmiotów gospodarczych dotyczy to zarówno firm o działalności typowo biurowej jak i obsługi BHP dużych inwestycji budowlanych.</p>
                            <p>Świadczymy usługi BHP na najwyższym poziomie, z pełnym zaangażowaniem, na bieżąco szkoli w zakresie zarządzania bezpieczeństwem i higieną pracy.</p>
                            <p>Standardem jest zadowolenie pracowników i pracodawców z przeprowadzonych szkoleń. Stosuje jasne i zrozumiałe, a zarazem skuteczne rozwiązania z zakresu bezpieczeństwa pracy zgodnie z polskim prawodawstwem. Usługi świadczy doraźnie wedle potrzeb lub poprzez umowę współpracy.</p>
                        </div>
                    </div>
                </section>  
                          
            </> 
        );
    }
}
 
export default Homepage;