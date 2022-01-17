import React from "react";

import './header.css'

import Logo from '../images/logo.png';

import { LINKS } from "./header.data";

class Header extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            collections: LINKS
        };
    }



    render(){
        const { collections } = this.state;
 
        return(
        <>
            <div className='logo'>
              <img className='logo-icon' src={Logo}></img>
              
              <div className='items'>
                {collections.map(({ id, link
                }) => (
                    <span key={id}>{link}</span>
                )) }

            </div>
            </div>
           
            
            
        </>
        )
    }
}

export default Header