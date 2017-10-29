import ProductDetail from '../detail/index';
import React from 'react';


const Product = ({params})=>(
    <ProductDetail id ={params.id}/>
);

export {Product};