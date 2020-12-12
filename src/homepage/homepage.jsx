import React, { Component } from 'react';
import Topview from '../topview/topview';
import Bottomview from '../bottomview/bottomview';
import Navbar from '../Navbar/navbar';


class Homepage extends Component {
    // constructor(){
    //     state = {
    //         image : "" 
    //     }
    // }

    render(){
        return(
            <div>
                <Navbar/>
                <Topview/>
                <Bottomview/>
            </div>
        )
    }
    
}

export default Homepage