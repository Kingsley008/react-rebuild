import React from 'react';
import { hashHistory,browserHistory } from 'react-router';

const Slider = ({imgUrl,isSelected,pageUrl})=>{

    if(isSelected){
        return(
            <li className="showSlider"><a onClick={()=>{browserHistory.push(pageUrl)}}><img src={imgUrl} alt="banner" width="1080"/></a></li>
        )
    }else{
        return(
            <li><a href="#"><img src={imgUrl} alt="banner" width="1080"/></a></li>
        )
    }

};




export {Slider};