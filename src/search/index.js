import React from 'react';
import {Link} from 'react-router';


const Search = () => (
    <div className="t-nav">
        <div className="t-nav-center f-cb">
            <div className="nav-logo"><Link to ="/home"></Link></div>
            <div className="nav-search">
                <p className="f-cb">
                    <input type="text" className="searchInput" placeholder="请输入要搜索的商品"/>
                        <span className="searchBtn"></span>
                </p>
            </div>
        </div>
    </div>
);

export {Search};