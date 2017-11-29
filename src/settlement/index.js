import React from 'react';
import {Footer} from "../footer/index";
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from './actions';
import {browserHistory} from 'react-router';
import $ from "jquery";
import './settlement.css';

let urlChangeInfo = '/biyaoweb/alterOderInfo';
let urlOrder = '/biyaoweb/buy';

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
        super(props);
        this.changeAddress = this.changeAddress.bind(this);
        this.getName = this.getName.bind(this);
        this.getAddress = this.getAddress.bind(this);
        this.getPhoneNumber = this.getPhoneNumber.bind(this);
        this.cancelOrder = this.cancelOrder.bind(this);
        this.makeOrder = this.makeOrder.bind(this);
        const {trueName, phoneNumber, address} = this.props.user;
        this.state = {
            trueName:trueName,
            phoneNumber:phoneNumber,
            address:address
        }
    }

    // 修改地址信息
    changeAddress(){
        const {trueName, phoneNumber, address} = this.state;
        urlChangeInfo += `?trueName=${trueName}&phoneNumber=${phoneNumber}&address=${address}`;
        this.props.changeInfo(urlChangeInfo);
        alert('修改成功');
    }

    // 取消订单
    cancelOrder(){

         localStorage.removeItem('order');
         browserHistory.push({
             pathname:'/home'
         })
    }

    orderProducts() {
        let productOrderList = [];
        this.props.shoppingCart.forEach(function (p1, p2, p3) {
            let product = {};
            product.productId = p1.id;
            product.name = p1.productName;
            product.color = p1.productColor;
            product.size = p1.productSize;
            product.icon = p1.imgURL;
            product.price = parseInt(p1.productPrice);
            product.buyNumber = parseInt(p1.productNumber);
            productOrderList.push(product);
        });

        return productOrderList;

    }
    // TODO 代理 BUG 放到服务器端测试
    makeOrder(){
        let productOrderList = this.orderProducts();
        $.ajax({
            type:'POST',
            url:"http://localhost:8080/biyaoweb/buy",
            dataType:"json",
            contentType:"application/json",
            data: JSON.stringify(productOrderList),
            xhrFields: {
                withCredentials: true
            },
            success:function (data) {
                console.log(data);
                if (data.result){
                    alert('订单登记成功');
                    localStorage.removeItem('order');
                    browserHistory.push(
                        {
                            pathname:'/success',
                        }
                    );
                } else {
                    console.log('失败');
                    browserHistory.push(
                        {
                            pathname:'/fail',
                        }
                    );
                }
            },
            fail:function () {
                browserHistory.push(
                    {
                        pathname:'/fail',
                    }
                );
            }

        });
        // this.props.makeOrder(urlOrder, productOrderList);
        console.log('order');
    }

    getName(e){
        const value = e.target.value;
        this.setState({trueName:value})

    }

    getAddress(e){
        const value = e.target.value;
        this.setState({address:value})
    }

    getPhoneNumber(e){
        const value = e.target.value;
        this.setState({phoneNumber:value})
    }



    render(){
        const {trueName, phoneNumber, address} = this.state;
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
                    <label>真实姓名：<input className="trueName" type="text" value={trueName} onInput={this.getName} /></label>
                    <label>收货地址：<input className="address alter" name="address" type="text" value={address} onInput={this.getAddress} /></label>
                    <label>联系电话：<input className="phoneNumber" type="tel" value={phoneNumber}  onInput={this.getPhoneNumber} /></label>
                    <button className="changeAddr" onClick={this.changeAddress}>修改收货地址</button>
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
                                    <button className="cart-btn cancel-btn" onClick={this.cancelOrder}>取消订单</button>
                                    <button className="order-btn" onClick={this.makeOrder}>提交订单</button>
                            </div>
                        </div>
                </div>
                <Footer/>
            </div>
        )
    }
}


// TODO 根据用户的状态 来填写信息 用户状态维持的问题先解决 cookies
const mapState = (state) => {
    console.log(state.settlementReducer.shoppingCart);
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
        makeOrder: (url, content)=>{
            dispatch(actions.makeOrder(url, content));
        },
    }
};

export default connect(mapState, mapDispatch)(OrderList);