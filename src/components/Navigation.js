import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/navigation.css';
import Logo from '../images/kask.png'

class Navigation extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            active: false,
            position:false
           // isOn:false
        }
        this.handleActive = this.handleActive.bind(this);
        this.handleMenuWidth = this.handleMenuWidth.bind(this);
        //this.handleOn = this.handleOn.bind(this);
        this.handleSticky = this.handleSticky.bind(this);
        this.refMenu = React.createRef();
    }

    handleActive(){
        this.setState({
            active: !this.state.active,
            isOn:true
        })
    }

    
    handleMenuWidth(){
        const width = window.innerWidth
        
        if(width < 767){
            this.setState({
                active: false,
               // isOn:true
            })
        }else{
            this.setState({
                active: true,
                //isOn:true
            }) 
        }
            
    }
    handleSticky(){
        const positionPage = window.pageYOffset;
        const positionMenu = this.refMenu.current.offsetTop
        if(positionPage>positionMenu){
            this.setState({
                position: true
            })
        }else{
            this.setState({
                position: false
            })
        }

    }

    /*handleOn(){
        this.setState({
            active:false,
            //isOn:true
        })
        console.log("klik"+ this.state.isOn)
    }*/
    
    componentDidMount(){
        this.handleMenuWidth.bind(this)
        this.handleSticky.bind(this)
        window.addEventListener('resize',this.handleMenuWidth.bind(this))
        window.addEventListener('scroll',this.handleSticky.bind(this))
    } 

    componentWillUnmount(){
        window.removeEventListener('resize',this.handleMenuWidth.bind(this))
    }
   /* const [active,setActive] = useState(true)
    console.log(active)

  /*useEffect(()=>{
      const width = window.innerWidth
       
      const autowidth =()=>{
      width <= 768 ? setActive(null): setActive(true)  
      
      console.log(window.innerWidth)
    }
    window.addEventListener('resize', autowidth())
  })*/

    render(){
            const {active} = this.state
            return (
                <> 
                    <div ref={this.refMenu} className={this.state.position ? 'sticky' : 'nav-container col-12'}>
                        <div className='menu-logo'><img src={Logo} alt="logo" style={{width:"100%",height:"100%"}} /></div>
                        <div className='menu' >
                            <button className='navbar-btn' onClick={this.handleActive}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <div className='contact-container'>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <ul style={active === true ? {display:"flex"}: null}>
                                <li>
                                    <NavLink exact to='/' onClick={this.handleActive} activeStyle={{color:"silver"}} ><i className="fas fa-home li-icon"></i>Strona Główna</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/services' onClick={this.handleActive} activeStyle={{color:"silver"}}><i className="fas fa-hard-hat li-icon"></i>Usługi</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/prize' onClick={this.handleActive} activeStyle={{color:"silver"}}><i className="fas fa-euro-sign li-icon"></i>Cennik</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/contact' onClick={this.handleActive} activeStyle={{color:"silver"}}><i className="fas fa-mobile li-icon"></i>Kontakt</NavLink>
                                </li>
                            </ul>
                        </div>            
                    </div>
                </>
            );
        }
 }

 
export default Navigation;