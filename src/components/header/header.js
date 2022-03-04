import React from "react";

import './header.css'

import Logo from '../images/logo.png';
import { LINKS } from "./header.data";
import CustomButton from "../custom-button/custom-button.component";

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
              
              <div className='header-items'>
                {collections.map(obj => {
                   return <CustomButton key={obj.id}>{obj.link}</CustomButton>
                }
                )}
                </div>
            </div>
        </>
        )
    }
}

export default Header