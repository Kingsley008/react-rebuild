import React from 'react';
import {Footer} from "../footer/index";

class Success extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div className="m-success f-center">
                    <h3 style={{fontSize: '24px'}}>恭喜你操作成功，已经成功下单</h3>
                </div>
                <Footer/>
            </div>
        )
    }
}

export  default Success