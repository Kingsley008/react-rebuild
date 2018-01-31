import React from 'react';
import SearchPage from '../search/searchPage';
const Search = ({params})=>(
    <SearchPage name ={params.name}/>
);

export {Search};