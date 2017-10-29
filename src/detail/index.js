import React from 'react';
import ProudctPage from './component/ProductPage';
import './product.css';
import {Footer} from "../footer/index"


class ProductDetail extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
               <ProudctPage id ={this.props.id}/>
                <Footer/>
            </div>
        )
    }
}

export default ProductDetail;