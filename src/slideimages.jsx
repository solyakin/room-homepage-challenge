import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css';
import front from './photos/desktop-image-hero-1.jpg';
import second from './photos/desktop-image-hero-2.jpg';
import third from './photos/desktop-image-hero-3.jpg';

class Images extends Component {
    constructor(){
        super();
        this.state = {
            img : [
                front, second, third
            ]
        }
        }
    render(){
        console.log(this.state.img)
        const slides = [];

        for( let i = 0; i < 3; i += 1){
         slides.push(
                <SwiperSlide className="sizes">
                {
                    this.state.img.map((images, i) => {
                    return <img key={i} src={images} alt="" width="500px" height="300px"/>
                    })
                }
                </SwiperSlide>
           )
        }

           
            
        return(
            // <div>
            //     {
            //         this.state.img.map(images => {
            //             return <img key={images.id} src={images} alt=""/>
            //         })
            //     }
            // </div>
            <React.Fragment>
                <Swiper>
                    {/* <SwiperSlide className="sizes">
                        {
                            this.state.img.map((images, i) => {
                            return <img key={i} src={images} alt="" width="500px" height="300px"/>
                            })
                        }
                    </SwiperSlide> */}
                </Swiper>
            </React.Fragment>
        )
    }
}

export default Images;