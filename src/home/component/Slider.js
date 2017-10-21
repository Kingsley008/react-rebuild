import React from 'react';


const Slider = ({imgUrl,isSelected})=>{

    if(isSelected){
        return(
            <li className="showSlider"><a href="#"><img src={imgUrl} alt="banner" width="1080"/></a></li>
        )
    }else{
        return(
            <li><a href="#"><img src={imgUrl} alt="banner" width="1080"/></a></li>
        )
    }

};




export {Slider};