import React from 'react';
import {Footer} from "../footer/index";
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from './actions';
import {browserHistory} from 'react-router';
import './settlement.css';

const urlChangeInfo = '';
const urlOrder = '';

const Part = ({id, productName, productColor, productNumber, imgURL, productSize, productPrice})=> {
    return (
            <table className="settlement-table '+ number + ' ">
                <tbody>
                <tr>
                    <td>
                        <span className="shop-img">
                            <a href="" target="_blank">
                                <img width="100" height="100" src={imgURL}/>
                            </a>
                        </span>
                    </td>
                    <td align="left">
                        <a target="_blank" href="">
                            <span className="product-name">{productName}</span>
                        </a>
                        <div className="product-des">
                            <p>{productColor}</p>
                            <p>{productSize}</p>
                        </div>
                    </td>
                    <td width="10%" className="single-price ff6600">￥{productPrice}</td>
                    <td width="10%"><input className="total-number" type="number" max="99" min="0" value={productNumber} readonly /></td>
                    <td width="5%">
                        <span className="product-price-count ff6600">￥{productPrice * productNumber}</span>
                    </td>
                </tr>
                </tbody>
            </table>
    )
};


class OrderList extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        const {trueName, phoneNumber, address} = this.props.user;
        const orderArr = [];
        let payment = 0;
        let totalGoods = 0;

        this.props.shoppingCart.forEach((v, i) => {
            payment += v.productPrice * v.productNumber;
            totalGoods += v.productNumber;
            orderArr.push(<Part key={i} productName={v.productName} id={v.id}
                             productColor={v.productColor} productSize={v.productSize}
                             imgURL={v.imgURL} productPrice={v.productPrice} productNumber={v.productNumber}
                             path={this.props.routing}
                             alterNumber={this.onAlterNumber} removeOne={this.onRemoveOne}/>)
        });

        return(
            <div>
                <div className="t-nav">
                    <div className="t-nav-center f-cb">
                        <div className="nav-logo"><Link to="/home"></Link></div>
                        <div className="nav-search">
                            <span className="icon-process"></span>
                            <ul className="steps f-cb">
                                <li>查看购物车</li>
                                <li>确认订单</li>
                                <li>在线付款</li>
                                <li>收货并评价</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="address f-center">
                    <h3 className="h-title">确认收货信息</h3>
                    <label>真实姓名：<input className="trueName" type="text" value={trueName} /></label>
                    <label>收货地址：<input className="address alter" name="address" type="text" value={address} /></label>
                    <label>联系电话：<input className="phoneNumber" type="tel" value={phoneNumber} /></label>
                    <button className="changeAddr">修改收货地址</button>
                </div>

                <div className="order f-center f-cb">
                    <h3 className="h-title">确认订单</h3>
                    <table className="table-title"  style={{width:1080+'px'}} cellPadding="0" cellSpacing="0">
                        <tr >
                            <th width=""></th>
                            <th width="10%">单价</th>
                            <th width="10%">数量</th>
                            <th width="5%">小计</th>
                        </tr>

                    </table>
                    {orderArr}
                        <div className="settlement-sum">
                            <p>商品总数 <span className="total-num ff6600">{totalGoods}件</span></p>
                            <p>商品总价：<span className="total-price ff6600">￥{payment}</span></p>
                            <div>
                                    <button className="cart-btn cancel-btn">取消订单</button>
                                    <button className="order-btn">提交订单</button>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}


// TODO 根据用户的状态 来填写信息 用户状态维持的问题先解决 cookies
const mapState = (state) => {
    return {
        user: state.loginReducer.user,
        shoppingCart: state.settlementReducer.shoppingCart
    }

};

const mapDispatch = (dispatch) => {
    return {
        changeInfo: (url)=>{
            dispatch(actions.changInfo(url));
        },
        makeOrder: (url)=>{
            dispatch(actions.changInfo(url));
        },
    }
};

export default connect(mapState, mapDispatch)(OrderList);