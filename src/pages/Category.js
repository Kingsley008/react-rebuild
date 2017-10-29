import CategoryPage from '../category/index';
import React from 'react';

export const Category = ({params}) => {
    return(
        <div><CategoryPage gender={params.gender}/></div>
    )
};

