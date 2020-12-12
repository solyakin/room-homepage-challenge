import React from 'react';
import '../bottomview/bottomview.css';
import dark from '../images/image-about-dark.jpg';
import light from '../images/image-about-light.jpg';


const Bottomview =()=>{
    return( 
        <div className="bottom-view">
           <div className="container">
                <img src={dark} alt="dark funiture"/>
                <div className="content">
                    <h2>ABOUT OUR FURNITURE</h2>
                    <p>Our multifunctional collection blend design and function to suit your individual taste. Make each room unique, or pick a cohensive theme that express your interest and inspires you. Find the furniture pieces you need from traditional to comtemporary or anything inbetween. Product specialists are avaliable to help you create your dream space</p>
                </div>
                <img src={light} alt="ight funiture" className="white"/>
            </div>
            
        </div>
    )
}

export default Bottomview;