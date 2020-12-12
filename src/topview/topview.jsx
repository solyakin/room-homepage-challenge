import React, { useState } from 'react';
import iconAngleLeft from '../images/icon-angle-left.svg';
import iconAngleRight from '../images/icon-angle-right.svg';
import data from '../slider.json';

import '../topview/topview.css';

const Topview = () => {
    const [current, setCurrent] = useState(0);
    const [headerSlides] = useState(data);

    const prev = () => {
        setCurrent(current === 0 ? headerSlides.length - 1 : current - 1)
    }

    const next = () => {
        setCurrent(current !== headerSlides.length - 1 ? current + 1 : 0)
    }

    return (
            <div className="topview">
                <div className="header__image__container">
                    <img src={require(`../images/desktop-` + headerSlides[current].image).default} alt="Contemporary furniture" className="image desktop" />
                    
                    <img src={require(`../images/mobile-` + headerSlides[current].image).default} alt="Contemporary furniture" className="image image--mobile hide" />
                </div>

                <div className="header__textbox">
                    <h1 className="header__textbox__heading">{headerSlides[current].heading}</h1>
                    <p className="header__textbox__subheading">{headerSlides[current].subheading}</p>
                    <a href="!#" className="header__textbox__link">
                        <span>Shop Now</span> 
                        <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fillRule="nonzero"/>
                        </svg>
                    </a>

                    <div className="__arrows">
                        <button aria-label="Go to previous slide" onClick={prev}  className="left-icon">
                            <img src={iconAngleLeft} alt="Angle left icon" />
                        </button>
                        <button aria-label="Go to next slide" onClick={next}  className="right-icon">
                            <img src={iconAngleRight} alt="Angle right icon" />
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default Topview;




// import React, { Component } from 'react';
// import '../topview/topview.css';


// class Topview extends Component{
//     state = {
//         isToggleOn: false,
//         width: ''
//         };

//     handleChange = () => {
//         this.setState(
//         {isToggleOn : !this.state.isToggleOn});
//     }
//     closeHandle = () =>{
//         this.setState({
//             isToggleOn : false
//         })
//     }
    
//     render(){
        
//         return(
//             <div className="topview">
//                 <div className="image-left"  ref={el => {
//                         if (!el) return;
//                     let value = el.getBoundingClientRect().width
//                         console.log(value);
//             }}>
//                 {
//                     // let width = document.getElementsByClassName('image-left');
//                     // console.log(width.offsetWidth)
//                 /* style ={{backgroundImage : "url('/images/desktop-image-hero-1.jpg')", 
//                 backgroundPosition: 'center', 
//                 backgroundSize:'850px',
//                 backgroundRepeat: 'no-repeat'
//                 }} */}
//                     <img src="/images/desktop-image-hero-1.jpg" alt="left"/>
//                     <div className="nav">
//                         <img src="/images/icon-hamburger.svg" alt="" className="hide" onClick = {this.handleChange}/>  
//                         <h1 className="logo">room</h1>
//                         {
//                             this.state.isToggleOn && 
//                             <div className="menu-list">
//                                 <div>
//                                  <img src="/images/icon-close.svg" alt="close" className="hide" onClick = {this.closeHandle}/>
//                                 </div>
                                
//                                 <ul>
//                                     <li>HOME</li>
//                                     <li>SHOP</li>
//                                     <li>ABOUT</li>
//                                     <li>CONTACT</li>
//                                 </ul>
//                             </div>
                           
//                         }
                       
//                     </div>
//                 </div>
                
//                 <div className="image-right">
//                     <div className="content-right">
//                         <h1>Discover innovative <br/>ways to decorate</h1>
//                         <p>we provide unmatched quality, comfort and style for property owners across the country. our experts combine form and function in bringing your vision to life. create a room in your style with our collection and make your property a reflection of who you are and what you love.</p>
//                         <div className="shop-now">
//                             <p>SHOP NOW</p>
//                             <div className="pointer-container">
//                                 <img src="/images/icon-arrow.svg" alt="" className="pointer"/>
//                             </div>
                            
//                         </div>
                        
//                     </div>
//                     <div className="arrows">
//                     <img src="/images/icon-angle-left.svg" alt="left"  className="left-icon"/>
//                     <img src="/images/icon-angle-right.svg" alt="right"  className="right-icon"/>
//                 </div>
                    
//                 </div>
               
//             </div>
//         )
//     }
    
// }

// export default Topview;