import React from 'react';
import FactoryIntro from './FactoryIntro';
import ManClothes from './ManClothes';
import LadyClothes from './LadyClothes';
import NewProduct from './NewProduct';
import Comment from './Comment';
import Side from "../../side/Side";

class Content extends React.Component{
    constructor(){
        super()

    }


    render(){

        return(
            <div className ="t-bd" style={{position: 'relative',zIndex: '1'}}>
                <FactoryIntro/>
                <NewProduct/>
                <ManClothes/>
                <LadyClothes/>
                <Comment/>
                <Side/>
            </div>
        )

    }
}

export default Content;