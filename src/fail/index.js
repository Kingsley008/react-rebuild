import React from 'react';
import {Footer} from "../footer/index";

class Fail extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div className="m-success f-center">
                    <h3 style={{fontSize: '24px', textAlign:'center' }}>操作失败，服务器异常，请稍后再试</h3>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Fail;