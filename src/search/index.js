import React from 'react';
import {Link} from 'react-router';


class Search extends React.Component{
    constructor(){
        super();
        this.state = {
            fixStyle:{}
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', ()=>{
            const nav = document.querySelector('.t-nav');
            let winS = document.documentElement.scrollTop;
            if(!nav){
                return;
            }
            let navTop = nav.offsetTop;
            if(winS > navTop ){
                this.setState({
                    fixStyle: {
                        position: 'fixed',
                        width:"100%",
                        top: '0',
                        zIndex:999
                    }
                })
            }else {
                this.setState({
                    fixStyle:{}
                })
            }
        })
    }
    render(){
        return(
            <div className="t-nav" style={this.state.fixStyle }>
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
        )
    }
}


export {Search};