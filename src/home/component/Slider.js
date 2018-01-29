import React from 'react';
import { hashHistory,browserHistory } from 'react-router';

const Slider = ({imgUrl,isSelected})=>{

    if(isSelected){
        return(
            <li className="showSlider"><a onClick={()=>{browserHistory.push('/product/36')}}><img src={imgUrl} alt="banner" width="1080"/></a></li>
        )
    }else{
        return(
            <li><a href="#"><img src={imgUrl} alt="banner" width="1080"/></a></li>
        )
    }

};




export {Slider};