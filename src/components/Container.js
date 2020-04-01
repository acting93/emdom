import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Homepage from '../subpages/Homepage';
import Services from '../subpages/Services';
import Prize from '../subpages/Prize';
import Contact from '../subpages/Contact';
import '../styles/container.css'
import '../styles/navigation.css'

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <section className='section-content col-12'>
                    <Switch>
                        <Route exact path="/" component={Homepage}/>
                        <Route path="/services" component={Services}/>
                        <Route path="/prize" component={Prize}/>
                        <Route path="/contact" component={Contact}/>
                    </Switch>
                </section>
            </>
         );
    }
}
 
export default Container;