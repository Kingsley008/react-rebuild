import React from 'react';
import {Footer} from "../footer/index";
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../detail/action';
import {browserHistory} from 'react-router';


const Part = ({id, productName, productColor, productNumber, imgURL, productSize, productPrice, alterNumber, removeOne}) => {

    let table = 'shopping-table shopping-table' + id;
    return (
        <div>
            <table className={table}>
                <input className={productName} value={id} hidden/>
                <tbody>
                <tr>
                    <td width="30" align="left"></td>
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
                            <p>颜色:{productColor}</p>
                            <p>尺寸：{productSize}</p>
                        </div>
                    </td>
                    <td width="10%" className="single-price ff6600">&yen;{productPrice}</td>
                    <td width="10%"><input data-id={id} onChange={alterNumber} className="total-number" type="number"
                                           max="99" min="0" value={productNumber}/></td>
                    <td width="20%">
                        <span className="package-type">普通包装</span>
                        <span className="package-price">免费</span>
                    </td>
                    <td width="10%">
                        <span className="product-price-count ff6600">¥{productPrice}</span>
                    </td>
                    <td width="5%">
                        <a onClick={removeOne} data-id={id} class="link-delete"></a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
};


class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.clearShoppingCart = this.clearShoppingCart.bind(this);
        this.onAlterNumber = this.onAlterNumber.bind(this);
        this.onRemoveOne = this.onRemoveOne.bind(this);
        this.onSettlement = this.onSettlement.bind(this);
    }

    componentDidMount() {

    }

    onAlterNumber(e) {
        const target = e.target;
        let value = target.value;
        let id = target.dataset.id;
        this.props.alterNumber(id, value);
    }

    onRemoveOne(e) {
        e.preventDefault();
        let ret = window.confirm("确定删除吗");
        if(!ret){
            return
        }
        const target = e.target;
        let id = target.dataset.id;
        this.props.removeOne(id);
    }

    clearShoppingCart() {
        this.props.clearShoppingCart();
    }

    // 结算购物车
    onSettlement() {
        // 还没登录
        console.log(this.props.user);
        if(!this.props.user.name){
            browserHistory.push(
                {
                    pathname:'/login',
                }
            )
            return
        }
        // 跳转到结算页面
        browserHistory.push(
            {
                pathname:'/settlement',
            }
        )
    }

    render() {
        if (!this.props.productList.length) {
            return (
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

                    <div className="cart f-center">
                        <div className="no-product">
                            <p>您的购物车空空的</p>
                            <Link to="/home">立即购物</Link>
                        </div>
                    </div>
                    <Footer/>
                </div>
            )
        }
        const items = [];
        let payment = 0;
        this.props.productList.forEach((v, i) => {
            payment += v.productPrice * v.productNumber;
            items.push(<Part key={i} productName={v.productName} id={v.id}
                             productColor={v.productColor} productSize={v.productSize}
                             imgURL={v.imgURL} productPrice={v.productPrice} productNumber={v.productNumber}
                             path={this.props.routing}
                             alterNumber={this.onAlterNumber} removeOne={this.onRemoveOne}/>)
        });


        return (
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

                <div className="cart f-center">
                    <div className="shopping-cart">
                        <h3>购物车</h3>
                        <table className="table-title" cellPadding="0" cellSpacing="0">
                            <tr>
                                <th colSpan="2" width="15%">
                                    <label data-select="all">
                                        <span name="check-all" style={{visibility: "hidden"}}>
                                        全选
                                        </span>
                                    </label>
                                </th>
                                <th align="left">商品信息</th>
                                <th width="10%">单价</th>
                                <th width="10%">数量</th>
                                <th width="20%">包装</th>
                                <th width="10%">小计</th>
                                <th width="5%">操作</th>
                            </tr>
                        </table>
                        {items}
                        <div className="cart-summary f-cb">
                            <a className="delete-all" onClick={this.clearShoppingCart}>全部删除</a>
                            <div className="settlement ">
                                <p>合计（不含运费）:<span className="cart-sum-price ff6600">{payment}</span></p>
                                <button className="settlement-btn" onClick={this.onSettlement}>结算</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

const mapState = (state) => {

    return {
        productList: state.productReducer.shoppingCart,
        location: state.routing.locationBeforeTransitions,
        user:state.loginReducer.user
    }
};

const mapDispatch = (dispatch) => {

    return {
        clearShoppingCart: () => {
            dispatch(actions.removeAll())
        },
        alterNumber: (id, value) => {
            dispatch(actions.alterNumber(id, value))
        },
        removeOne: (id) => {
            dispatch(actions.removeOne(id))
        }
    }

};

export default connect(mapState, mapDispatch)(ShoppingCart);


