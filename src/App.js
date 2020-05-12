import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './styles/App.css';
import Navigation from './components/Navigation';
import Container from './components/Container';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from 'react-router-scroll-top';
import Cookies from './components/Cookies';
import {connect} from 'react-redux';
import cookieAction from './actions/cookieAction';
import Cookie from 'js-cookie';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount(){
    if(Cookie.get('generalcookie')){
      this.props.cookieSet()
    }

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
                  {this.props.cookieState === true ? null : <Cookies />}
                </div>
              </div>
              </ScrollToTop>
          </Router>
      </>
     );
  }
}
 
const mapStateToProps =(state)=>{
  return{
    cookieState:state.setCookie,
    cookieCheck: state.checkCookie
  }
}
const mapDispatchToProps =(dispatch)=>{
  return{
    cookieSet: ()=>dispatch(cookieAction()),
    cookieCheck: ()=> dispatch(cookieAction())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);