import React from 'react';
import {Search} from '../search/index';
import {NavStage, Content} from '../home/index';
import {Footer} from "../footer/index"
import './home.css';

const Home = ()=>(
    <div>
        <Search/>
        <NavStage/>
        <Content/>
        <Footer/>
    </div>
);

export {Home};