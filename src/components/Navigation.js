import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/navigation.css';
import Logo from '../images/embud2.png'

class Navigation extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            active: false,
            position:false
        }
        this.handleActive = this.handleActive.bind(this);
        this.handleMenuWidth = this.handleMenuWidth.bind(this);
        this.handleSticky = this.handleSticky.bind(this);
        this.refMenu = React.createRef();
    }

    handleActive(){
        this.setState({
            active: !this.state.active
        })
    };

    
    handleMenuWidth(){
        const width = window.innerWidth;
        
        if(width < 767){
            this.setState({
                active: false,
            })
        }else{
            this.setState({
                active: true,
            }) 
        }
    };
    handleSticky(){
        const positionPage = window.pageYOffset;
        const positionNavbar = this.refMenu.current.offsetHeight;
        if(positionPage > positionNavbar){
            this.setState({
                position: true
            })
        }else{
            this.setState({
                position: false
            })
        }

    };

    componentDidMount(){
        window.addEventListener('resize',this.handleMenuWidth.bind(this));
        window.addEventListener('scroll',this.handleSticky.bind(this));
    } 
    componentWillUnmount(){
        window.removeEventListener('resize',this.handleMenuWidth.bind(this));
        window.removeEventListener('scroll',this.handleSticky.bind(this));
    }

    render(){
            const {active} = this.state
            return (
                <> 
                    <div ref={this.refMenu} className={this.state.position === true ? 'sticky' : 'nav-container'} >
                        <div className='navigation-elements col-12 col-xl-10'>
                            <NavLink to='/'><div className='menu-logo'><img src={Logo} alt="logo" style={{width:"100%",height:"100%"}} /></div></NavLink>
                            <div className='menu'>
                                <button className={this.state.active ? 'navbar-btnX' :'navbar-btn'} onClick={this.handleActive}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                                <div className='contact-container'>
                                    <ul style={active === true ? {display:"flex"}: null}>
                                        <li>
                                            <NavLink exact to='/' onClick={this.handleActive} activeStyle={{color:"orange"}}><i className="fa fa-home fa-home li-icon"></i>Strona Główna</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/prize' onClick={this.handleActive} activeStyle={{color:"orange"}}><i className="fa fa-eur li-icon"></i>Cennik i Usługi</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/contact' onClick={this.handleActive} activeStyle={{color:"orange"}}><i className="fa fa-phone-square li-icon"></i>Kontakt</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>            
                    </div>
                </>
            );
        };
 };

 
export default Navigation;