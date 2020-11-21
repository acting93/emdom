import React, { Component } from 'react';
import '../styles/contact.css';
import Cookie from 'js-cookie';
import axios from 'axios';
import {connect} from 'react-redux';
import cookieAction from '../actions/cookieAction';

class Contact extends Component {
    interval = ''
    constructor(props) {
        super(props);
        this.state = {
            name:'', 
            subject:'',
            phone:'',
            mail:'',
            text:'',
            count:3,
            stopInterval:false,
            errors:{
                name:false, 
                subject:false,
                phone:false,
                mail:false,
                text:false
            },
            sent:false
         }
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
         this.validation = this.validation.bind(this);
         this.hideElement = this.hideElement.bind(this);
         //this.setCookie = this.setCookie.bind(this);
         this.sendMail = this.sendMail.bind(this);
         this.start = this.start.bind(this);
    };


handleChange(e){
    const name = e.target.name;
    this.setState({
        [name]:e.target.value
    })
};

hideElement(){
    if(this.state.sent === true){
        this.setState(prevstate =>({
            count: prevstate.count += -1
        }))
        if(this.state.count < 0){
            this.setState({
                sent:false,
                count:3
            })
            clearInterval(this.interval)
        };
    };
};

start(){
        this.interval = setInterval(() => {
            this.hideElement();
        }, 1000);
};


handleSubmit(e){
    e.preventDefault();
    const correctVal = this.validation();
    if(correctVal.validate){
        this.start();
        //this.setCookie();
        this.sendMail();
        this.setState({
            sent:true,
            name:'',
            subject:'',
            phone:'',
            mail:'',
            text:'',
            errors:{
                name:false,
                subject: false,
                phone:false,
                mail:false,
                text:false
            },
        })
    }else{
        this.setState({
            errors:{
                name: !correctVal.name,
                subject: !correctVal.subject,
                phone:!correctVal.phone,
                mail:!correctVal.mail,
                text:!correctVal.text
            }
        })
    };
     
};

validation(){
    let name = false;
    let subject = false;
    let phone = false;
    let mail = false;
    let text = false;
    let validate = false;

    if(this.state.name.length > 2){
        name = true
    }

    if(this.state.subject.length > 5){
        subject = true
    }
    if(this.state.phone.length > 8){
        phone = true
    }
    if(this.state.mail.indexOf('@') !== -1){
        mail = true
    }
    if(this.state.text.length > 10){
        text = true
    }
    if(name && subject && phone && mail && text){
        validate = true
    }

    return({name,subject,phone,mail,text,validate});
};

/*setCookie(){
   if(this.props.cookieSet === true){
        Cookie.set('name',"działa",{expires:7})
  }
}*/

sendMail(){
    axios('http://localhost/emilmailer/index.php',{
        method:'post',
        mode:'no-cors',
        headers:{'Content-Type':'application/json'},
        data: JSON.stringify(this.state)
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
};

    render() { 
        return ( 
            <>  
                <section className='contact-content col-12'>
                    <div className='contact-background col-12 col-xl-10'>
                        <div className='contact-header'><p>Kontakt</p></div>
                        <div className='form-adress'>
                            <div className='form-contact' style={this.state.sent === true ? {display:"none"} : {display:"block"}}>
                                <p>Masz pytanie ? Wypełnij formularz, oddzwonię w ciągu 24h.</p>
                                <form onSubmit={this.handleSubmit} noValidate>
                                    <input 
                                        type='text'
                                        value={this.state.name}
                                        name='name'
                                        onChange={this.handleChange}                                
                                        placeholder='Imię'       
                                    />{this.state.errors.name? <p>Conajmniej 3 znaki</p> : null }
                                    <input
                                        type='text' 
                                        value={this.state.subject}
                                        name='subject'
                                        onChange={this.handleChange}
                                        placeholder='Temat'
                                    />{this.state.errors.subject? <p>Temat zbyt krótki</p> : null }
                                    <input
                                        type='number' 
                                        value={this.state.phone}
                                        name='phone'
                                        onChange={this.handleChange}
                                        placeholder='Telefon'
                                    />{this.state.errors.phone ? <p>Number zbyt krótki</p> : null }
                                    <input
                                        type='text' 
                                        value={this.state.mail}
                                        name='mail'
                                        onChange={this.handleChange}
                                        placeholder='Mail'
                                    />{this.state.errors.mail ? <p>Brak @</p> : null }
                                    <textarea
                                        type='text' 
                                        value={this.state.text}
                                        name='text'
                                        onChange={this.handleChange}
                                        placeholder='Wiadomość'
                                    />{this.state.errors.text ? <p>Wiadomość za krótka</p> : null }
                                    <button onClick={this.handleSubmit}>Wyślij</button>
                                </form>
                            </div>
                            <div className='info-sent' style={this.state.sent === true ? {display:"block"}: {display:"none"}}>
                                <div className='icon-sent'>
                                    <i className="fa fa-check ok-icon" aria-hidden="true"></i>
                                </div>
                                <p>Formularz został wysłany, dziękujemy za kontakt.</p>
                            </div> 
                            <div className='adress'>
                                <p><i className="fas fa-home footer-icon"></i>Usługi BHP i PPOŻ EMDOM-BHP</p>
                                <p><i className="fas fa-directions footer-icon"></i>Adres:<br/>
                                        26-640 Chomentów-Puszcz, Mazowieckie<br/>
                                        05-550 Piaseczno
                                </p>
                                <p><i className="fas fa-phone-square footer-icon"></i>Tel. 123-456-789</p>
                                <p><i className="fas fa-envelope-open footer-icon"></i>Adres e-mail: "EMDOM-BHP"</p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
         );
    }
}

const MapStateToProps =(state)=>{
    return{
        cookieSet: state.setCookie
    }
};

const MapDispatchToProps =(dispatch)=>{
    return{
        setCookie: ()=> dispatch(cookieAction()),
    }
};
 
export default connect(MapStateToProps,MapDispatchToProps)(Contact);

