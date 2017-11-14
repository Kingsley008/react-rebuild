import React from 'react';
import {Footer} from "../footer/index";
import {connect} from 'react-redux';
import {Link} from 'react-router';
import  * as actions from '../detail/action';


const Part = ({id, productName, productColor,productNumber,imgURL, productSize, productPrice}) => {

    let table = 'shopping-table shopping-table' + id;
    return (
        <div>
            <table className={table}>
            <input className={productName}  value={id} hidden/>
                <tbody>
                        <tr>
                                <td width="30" align="left"><input className="single-check" type="checkbox" name="single-check" checked/></td>
                                <td>
                                            <span className="shop-img">
                                                <a href="" target="_blank">
                                                    <img width="100" height="100" src={imgURL}/>
                                                </a>
                                            </span>
                                    </td>
                                <td align="left">
                                        <a target="_blank" href="">
                                                <span className="product-name">{ productName }</span>
                                            </a>
                                        <div className="product-des">
                                                <p>颜色:{ productColor }</p>
                                                <p>尺寸：{ productSize }</p>
                                            </div>
                                    </td>
                                <td width="10%" className="single-price ff6600">&yen;{ productPrice }</td>
                                    <td width="10%"><input className="total-number" type="number" max="99" min="0" value={productNumber}/></td>
                                <td width="20%">
                                        <span className="package-type">普通包装</span>
                                        <span className="package-price">免费</span>
                                    </td>
                                <td width="10%">
                                        <span className="product-price-count ff6600">¥{productPrice}</span>
                                    </td>
                                <td width="5%">
                                        <a href="javascript:;" class="link-delete"></a>
                                    </td>
                            </tr>
                        </tbody>
                </table>
        </div>
    )
};



class ShoppingCart extends React.Component {
    constructor(props){
        super(props);
        this.clearShoppingCart = this.clearShoppingCart.bind(this);

    }

    componentDidMount () {


    }


    clearShoppingCart(){
        this.props.clearShoppingCart();
    }

    render(){
        if(!this.props.productList){
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
        this.props.productList.forEach((v,i) => {
            console.log(v);
            items.push(<Part key = {i} productName={v.productName}  id = {v.id }
                             productColor = {v.productColor} productSize = {v.productSize}
                             imgURL={v.imgURL} productPrice = {v.productPrice} productNumber={v.productNumber} path = {this.props.routing}/>)
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

                <div className="cart f-center">
                    <div className="shopping-cart">
                        <h3>购物车</h3>
                        <table className="table-title" cellPadding="0" cellSpacing="0">
                            <tr>
                                <th colSpan="2" width="15%">
                                    <label data-select="all"><input name="check-all" className="checkbox checked" type="checkbox" checked />
                                        全选
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
                                <p>合计（不含运费）:<span className="cart-sum-price ff6600"></span></p>
                                <button className="settlement-btn">结算</button>
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
    const result = state.cartReducer;
    return {
        productList: state.productReducer.shoppingCart,
        location:state.routing.locationBeforeTransitions
    }
};

const mapDispatch = (dispatch) => {

    return {
        clearShoppingCart: ()=>{
            dispatch(actions.removeAll())
        }
    }

};

export  default  connect(mapState, mapDispatch)(ShoppingCart);


