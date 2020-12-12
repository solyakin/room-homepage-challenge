import React from 'react';
import hamburger from '../images/icon-hamburger.svg';
import close from '../images/icon-close.svg';
import logo from '../images/logo.svg';
import { Component } from 'react';
import '../Navbar/navbar.css';

class Navbar extends Component{
         state = {
             isToggleOn: false
             };
    
         handleChange = () => {
             this.setState(
             {isToggleOn : !this.state.isToggleOn});
    }
         closeHandle = () =>{
             this.setState({
                 isToggleOn : false
             })
         }

    render(){
        return(
            <div  className="nav__container">
                <div className="nav">
                        <div className="hamburger_with_logo">
                            <img src={hamburger} alt="" className="hide" onClick = {this.handleChange}/>  
                            <img src={logo} alt="company logo" className="logo"/>
                        </div>
                       
                        {
                             this.state.isToggleOn &&
                             <div className="menu">
                                  <img src={close} alt="close" className="hide" onClick = {this.closeHandle}/>
                                <div className = "menu__list" >
                                    <ul>
                                        <li>HOME</li>
                                        <li>SHOP</li>
                                        <li>ABOUT</li>
                                        <li>CONTACT</li>
                                    </ul>
                                </div>
                                 
                              </div>
                        }
                       
                </div>
            </div>
        )
    }
}

export default Navbar;