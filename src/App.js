import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './styles/App.css'
import Navigation from './components/Navigation';
import Container from './components/Container';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from 'react-router-scroll-top';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return ( 
      <>
          <Router basename={process.env.PUBLIC_URL} onUpdate={()=>window.scrollTo(0,0)}>
            <ScrollToTop>
              <div className='container-fluid'>
                <div className='row'>
                  <Navigation />
                  <Container />
                  <Footer />
                </div>
              </div>
              </ScrollToTop>
          </Router>
  
      </>
     );
  }
}
 
export default App;