import React from 'react';
import {nav as TopMenu} from '../topMenu/';

const App = ({children}) => (
    <div>
        <TopMenu/>
        <div>{children}</div>
    </div>
);

export {App};