import React from 'react';
import  TopMenu from '../topMenu/';

const App = ({children}) => (
    <div>
        <TopMenu/>
        <div>{children}</div>
    </div>
);

export {App};