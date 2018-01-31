import React from 'react';
import {browserHistory, Link} from 'react-router';
import './category.css';

const Part = ({x})=>{
    const url = "http://localhost:8080/biyaoweb/" + x.icon;
    return(
        <li>
            <div className="hd">
                <div className="f-csp" onClick={() => {
                    browserHistory.push('/product/' + x.id)
                }}>
                    <i className="f-oh">
                        <img src={url}/>
                    </i>
                </div>
            </div>
            <div className="bd">
                <h3>{x.name}</h3>
                <div className="price">￥{x.price}</div>
            </div>
        </li>
    )
};

export  default  class SearchPage extends React.Component{
    constructor(props){
        super(props);
        this.fetchProduct = this.fetchProduct.bind(this);
        this.state = {
            dataList:null
        };
        this.fetchProduct();
    }

    fetchProduct(){
        let self = this;
        fetch('http://localhost:8080/biyaoweb/showSearchProduct?name=' + this.props.name,{
            method: 'GET',
            mode:'cors',
            credentials: 'include',
        }).then((response) => {
            if((response.status >= 200 && response.status < 300) || response.status === 304 ){
                response.json().then(responseJSON=> {
                    let dataList = [];
                    responseJSON.searchList.forEach((v)=>{
                        dataList.push(v);
                    });

                    self.setState({
                        dataList : dataList,
                    });
                    console.log(dataList, self.state.dataList)
                })
            } else {
                throw new Error('Fail to get response with status ' + response.status);
            }
        })
    }

    render(){
        if(this.state.dataList == null){
            return(
                <div style={{textAlign:'center'}}>抱歉没有搜索到相关的商品</div>
            )
        }else{
            let arr = [];
            this.state.dataList.forEach((v,i)=>{
                arr.push(<Part x = {v} key = {i}/>)
            });

            return(
                <div className="t-bd f-center">
                    <div className="nav">
                        <ul>
                            <li><Link to="/home">首页</Link></li>
                            <i>&gt;</i>
                        </ul>
                    </div>
                    <div className="tab">
                        <ul className="cateGoryList">
                            <li id="280">
                                <div className="list">
                                    <h3 className="nav" >搜索结果</h3>
                                    <ul className="f-cb">
                                        {arr}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        }
    }
}