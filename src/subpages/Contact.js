import React, { Component } from 'react';
import {Spinner} from 'react-bootstrap';
import '../styles/contact.css';
//import Cookie from 'js-cookie';
import axios from 'axios';
import {connect} from 'react-redux';
import cookieAction from '../actions/cookieAction';
import FormSent from './contactComponents/FormSent';
import FormNotSent from './contactComponents/FormNotSent';
import ContactElements from './contactComponents/ContactElements';

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
            sent:null,
            spinner:false
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
    });
};

hideElement(){
    const {sent,count} = this.state; 
    if(sent === (false || sent) ){
        this.setState(prevstate =>({
            count: prevstate.count -= 1
        }))
        if(count < 0){
            this.setState({
                sent:null,
                count:3
            })
            return clearInterval(this.interval)
        };
    };
};

start(){
    this.interval = setInterval(() => {
        this.hideElement();
    }, 1000);
};

sendMail(){
    axios('http://localhost/emilmailer/index.php',{
        method:'post',
        mode:'no-cors',
        headers:{'Content-Type':'application/json'},
        data: JSON.stringify(this.state)
    })
    .then(response =>{
        if(response.status === 200){
            this.setState({
               sent:true,
               spinner:false,
            });
            this.start();
        }
    })
    .catch(error =>{
        this.setState({
            sent:false,
            spinner:false
        });
        this.start()
    });
};


handleSubmit(e){
    e.preventDefault();
    const correctVal = this.validation();
    if(correctVal.validate){
        //this.setCookie();
        this.sendMail();
        this.setState({
            spinner:true,
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
                name:!correctVal.name,
                subject:!correctVal.subject,
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


    render() { 
        const {sent,name,subject,phone,mail,text,errors,spinner} = this.state;
        return ( 
            <>  
                <section className='contact-content col-12'>
                    <div className='contact-background col-12 col-xl-10'>
                        <div className='contact-header'><p>Kontakt</p></div>
                        <div className='form-adress'>
                            <div className='form-contact' style={sent === true || sent === false || spinner === true ? {display:"none"} : {display:"block"}}>
                                <p>Masz pytanie ? Wypełnij formularz, oddzwonię w ciągu 24h.</p>
                                <form onSubmit={this.handleSubmit} noValidate>
                                    <input 
                                        type='text'
                                        value={name}
                                        name='name'
                                        onChange={this.handleChange}                                
                                        placeholder={errors.name? 'Conajmniej 3 znaki' : 'Imię' }       
                                    />
                                    <input
                                        type='text' 
                                        value={subject}
                                        name='subject'
                                        onChange={this.handleChange}
                                        placeholder={errors.subject? 'Temat zbyt krótki' : 'Temat'}
                                    />
                                    <input
                                        type='number' 
                                        value={phone}
                                        name='phone'
                                        onChange={this.handleChange}
                                        placeholder={errors.phone ? 'Number zbyt krótki' : 'Telefon' }
                                    />
                                    <input
                                        type='text' 
                                        value={mail}
                                        name='mail'
                                        onChange={this.handleChange}
                                        placeholder={errors.mail ? 'Brak @' : 'Adres E-mail' }
                                    />
                                    <textarea
                                        type='text' 
                                        value={text}
                                        name='text'
                                        onChange={this.handleChange}
                                        placeholder={errors.text ? 'Wiadomość za krótka' : 'Wiadomość' }
                                    />
                                    <button onClick={this.handleSubmit}>Wyślij</button>
                                </form>
                            </div>
                            {spinner ?
                                <div className='spinner-content'>
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="xl"
                                        role="status"
                                        aria-hidden="true"
                                        className="spinner-border"
                                    >
                                    </Spinner>
                                </div>
                            : null}
                            {sent === true ? <FormSent /> : null}
                            {sent === false ? <FormNotSent /> : null}
                            <ContactElements />
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

