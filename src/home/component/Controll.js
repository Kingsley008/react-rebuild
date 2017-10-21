import React from 'react';

const activeClass = 'hintActive';

const Controller = ({isSelected, bindHint, id})=>{
    if(isSelected){
        return(
            <li className={activeClass} onClick={()=>{bindHint(id)}}>

            </li>
        )
    } else {
        return(
            <li onClick={()=>{bindHint(id)}}>

            </li>
        )
    }

};

export {Controller}