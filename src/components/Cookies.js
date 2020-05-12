import React, { Component } from 'react';
import '../styles/App.css';
import {connect} from 'react-redux';
import cookieAction from '../actions/cookieAction';
import checkCookie from '../actions/checkCookie';
import Cookie from 'js-cookie';

class Cookies extends Component {

   handleCookie =()=>{
        this.props.setCookie();
            Cookie.set("generalcookie",'test',{expires:7})
            this.props.checkCookie()
   }
   
   render(){
        return (
            <>
                <div className='cookie-div'> 
                    <p>Strona korzysta z plików cookie w celu realizacji usług zgodnie z <a href="https://www.gov.pl/web/gov/polityka-dotyczaca-cookies" target="_!blank">Polityką Cookies</a>. Możesz określić warunki przechowywania lub dostępu mechanizmu cookie w Twojej przeglądarce.</p>
                    <button onClick={this.handleCookie}>Akceptuję</button>
                </div>
            </>
        );
        }
}

const mapStateToProps =(state)=>{
    return{
        cookieSet: state.setCookie,
        cookieCheck: state.checkCookie
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        setCookie: ()=> dispatch(cookieAction()),
        checkCookie: ()=>dispatch(checkCookie())
    }
}

 
export default connect(mapStateToProps,mapDispatchToProps)(Cookies);
