import React from 'react';
import {browserHistory, Link} from 'react-router';
import ProductDetail from "./ProductDetail";
import ProductComments from './ProductComment';
import {connect} from 'react-redux';
import * as actions from '../action';
import * as Status from '../../status';
import * as util from '../../util/escapeXSS';

/**
 * 重新组织一下模块的组合
 * **/
const ProductRecommendation = () => {
    return (
        <li>
            <div className="hd">
                <a href="" target="_blank">
                    <img
                        src="http://localhost:8080/biyaoweb/imgs/product/recommendation/recommdation.jpg"
                        alt="推荐商品"/>
                </a>
            </div>
            <div className="bd">
                <p>咖啡碳纤维休闲裤</p>
                <b className="price">￥279</b>
            </div>
        </li>
    )
};
const ProductSizes = ({size, sizeSelected}) => (
    <div>
        <li className={size === sizeSelected ? 'specs-detail lowModel-specs-active' : 'color-detail'}>{size}<em></em>
        </li>
    </div>
);

const ProductColors = ({color, colorSelected}) => {
    return (
        <li className={colorSelected === color ? 'color-detail lowModel-specs-active' : 'color-detail'}>
            {color}
            <em></em>
        </li>
    )
};
const prefix = 'http://localhost:8080/biyaoweb/';

const ProductImg = ({imgUrl}) => (
    <li><img src={imgUrl} alt="商品图片"/></li>
);

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        const url = '/biyaoweb/productJson?productId=' + this.props.id;
        this.props.fetchProduct(url);
        this.onClickColor = this.onClickColor.bind(this);
        this.onClickSize = this.onClickSize.bind(this);
        this.decreaseNumber = this.decreaseNumber.bind(this);
        this.increaseNumber = this.increaseNumber.bind(this);
        this.onClickPicture = this.onClickPicture.bind(this);
        this.onClickShopCart = this.onClickShopCart.bind(this);
        this.onClickBuy = this.onClickBuy.bind(this);
    }

    onClickColor(e) {
        const target = e.target;
        this.props.onSelectColor(target.textContent);
    }

    onClickSize(e) {
        const target = e.target;
        this.props.onSelectSize(target.textContent);

    }

    decreaseNumber() {
        this.props.onDecrease(this.props.productNumber)
    }

    increaseNumber() {
        this.props.onIncrease(this.props.productNumber)
    }

    onClickPicture(e) {
        const target = e.target;
        if (e.target.src) {
            this.props.onChangeIcon(target.src);
        }
    }

    getProductInfo(){
        let self = this;
        let {colorSelected, sizeSelected, numberSelected} = self.props;
        let id = self.props.productDetail.product.id;
        const product = {
            id: id,
            productColor: colorSelected,
            productSize: sizeSelected,
            productNumber: numberSelected,
            productPrice: self.props.productDetail.product.price,
            productName: self.props.productDetail.product.name,
            imgURL: prefix + self.props.productDetail.product.icon,
        };
        console.log(product);
        return product
    }
    onClickBuy(){
        let product = this.getProductInfo();
        if (product.productSize == null || product.productColor == null) {
            alert('请选择衣服的型号和颜色');
            return;
        }
        // 还没登录
        if(!this.props.user.trueName){
            browserHistory.push(
                {
                    pathname:'/login',
                }
            );
            return
        }

        let orderList = JSON.parse(localStorage.getItem('order')) || [];
        orderList.push(product);
        localStorage.setItem('order', JSON.stringify(orderList));
        browserHistory.push({
            pathname: '/settlement'
        })

    }

    onClickShopCart() {

        let product = this.getProductInfo();
        if (product.productSize == null || product.productColor == null) {
            alert('请选择衣服的型号和颜色');
            return;
        }
        // 还没登录
        if(!this.props.user.trueName){
            browserHistory.push(
                {
                    pathname:'/login',
                }
            );
            return
        }

        this.props.addToShopCart(product);
        browserHistory.push({
            pathname: '/shoppingCart'
        })

    }

    render() {
        switch (this.props.status) {
            case Status.LOADING: {
                return (
                    <div>
                        内容正在加载
                    </div>
                )
            }
            case Status.FAILURE: {
                return (
                    <div>
                        内容加载失败
                    </div>
                )
            }
            case Status.SUCCESS: {
                const recommentArr = [];
                for (let i = 0; i < 4; i++) {
                    recommentArr.push(<ProductRecommendation/>)
                }
                const {catagory, arrColor, arrImg, arrSize} = this.props.productDetail;
                const {name, price, text, id, subCatagory,produceDate, icon,intro} = this.props.productDetail.product;

                const sizeParts = [];
                const colorParts = [];
                const imgParts = [];
                const productDes = util.escape(text);
                arrSize.forEach((v, i) => {
                    sizeParts.push(<ProductSizes key={i} size={v} sizeSelected={this.props.sizeSelected}/>)
                });
                arrColor.forEach((v, i) => {
                    colorParts.push(<ProductColors color={v} key={i} colorSelected={this.props.colorSelected}/>)
                });
                arrImg.forEach((v, i) => {
                    if (v.indexOf('localhost') > -1) {
                        imgParts.push(<ProductImg imgUrl={v} key={i}/>)
                    } else {
                        imgParts.push(<ProductImg imgUrl={prefix + v} key={i}/>)
                    }

                });

                const iconURL = this.props.showIcon.indexOf('localhost') > -1 ? this.props.showIcon : prefix + this.props.showIcon;

                return (
                    <div style={{backgroundColor: "#fff"}}>
                        <div className="section  f-center">
                            <div className="section-bread">
                                <Link to="/home">首页</Link>
                                <span className="bread-title">&gt;{name}</span>
                            </div>
                            <div className="section-editor f-cb">
                                <div className="editor-main">
                                    <div className="editor-pic f-cb">
                                        <p><img className="main-pic" src={iconURL}/></p>
                                        <ul className="group-pic" onClick={this.onClickPicture}>
                                            {imgParts}
                                        </ul>
                                    </div>

                                    <ul className="editor-policy f-cb">
                                        <li>
                                            <span>7天无忧退换</span>
                                            <div>
                                                <i></i>
                                                <p>实物破损、不符、质量问题，退换货商家承担往返运费。</p>
                                            </div>
                                        </li>
                                        <li>
                                            <span>先行赔付</span>
                                            <div>
                                                <i></i>
                                                <p>争议可申诉，申诉成功，立即退款。</p>
                                            </div>
                                        </li>
                                        <li>
                                            <span>超时赔偿</span>
                                            <div>
                                                <i></i>
                                                <p>未按承诺时间发货，系统自动赔付（赔款金额为订单商品金额的30%，上限500元）。</p>
                                            </div>
                                        </li>
                                        <li>
                                            <span>顺丰包邮</span>
                                            <div>
                                                <i></i>
                                                <p>运费由商家承担</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="editor-panel">
                                    <div className="panel-top">
                                        <h1 className="product-name">{name}</h1>
                                        <p>{intro}</p>
                                    </div>
                                    <ul className="panel-main">
                                        <li className="panel-press">
                                            <span>售价</span>
                                            <div>
                                                <span className="panel-money">￥<i>{price}</i></span>
                                                <span className="panel-duration">生产周期：<span>{produceDate}</span>天</span>
                                            </div>
                                        </li>

                                        <li className="panel-specs">
                                            <ul>
                                                <li className="specs-dimension clearfix"><span>颜色</span>
                                                    <div>
                                                        <ul className="specs-style f-cb" onClick={this.onClickColor}>
                                                            {colorParts}
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="specs-dimension clearfix"><span>尺寸</span>
                                                    <div>
                                                        <ul className="specs-size" onClick={this.onClickSize}>
                                                            {sizeParts}
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
{/*                                        <li className="panel-sizeImg">
                                            <div><span>查看尺码对照表</span></div>
                                        </li>*/}

                                        <li className="panel-count"><span>数量</span>
                                            <div>
                                                <p className="panel-num">
                                                    <span className="panel-minus" onClick={this.decreaseNumber}>-</span>
                                                    <span className="panel-number">{this.props.productNumber}</span>
                                                    <span className="panel-add" onClick={this.increaseNumber}>+</span>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="panel-bottom">
                                        <p id="buyNow" className="panel-buyNow" onClick={this.onClickBuy}>立即购买</p>
                                        <Link className="addShopCar" onClick={this.onClickShopCart}>加入购物车</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="detail-page f-cb">
                                <div className="view-title f-cb">
                                    <a href="" className="brand">EMP服饰</a>
                                    <a href="" className={this.props.isDetail ? 'tab-selected' : ''} data-tab="detail"
                                       onClick={this.props.onClickProductDetail}>商品信息</a>
                                    <a href="" className={this.props.isDetail ? '' : 'tab-selected'} data-tab="comment"
                                       onClick={this.props.onClickProductComments}>评价详情</a>
                                </div>
                                <div className="left-recommendation">
                                    <ul>
                                        {recommentArr}
                                    </ul>
                                </div>
                                <div className="right-product-detail">
                                    {this.props.isDetail ? <ProductDetail text={productDes}/> :
                                        <ProductComments id={this.props.id}/>}
                                </div>

                            </div>

                        </div>
                    </div>
                )
            }
            default: {
                return (
                    <div>加载中</div>
                )
            }
        }


    }
}

const mapState = (state) => {

    const reducer = state.productReducer;
    return {
        productDetail: reducer,
        status: state.productReducer.status,
        isDetail: state.productReducer.isDetail,
        colorSelected: state.productReducer.productColor,
        sizeSelected: state.productReducer.productSize,
        numberSelected: state.productReducer.productNumber,
        productNumber: reducer.productNumber,
        showIcon: reducer.showIcon,
        user: state.loginReducer.user,
    }
};

const mapDispatch = (dispatch) => {

    return {
        fetchProduct: (url) => {
            dispatch(actions.fetchProduct(url))
        },
        onClickProductDetail: (ev) => {
            ev.preventDefault();
            dispatch(actions.showProductDetail())
        },
        onClickProductComments: (ev) => {
            ev.preventDefault();
            dispatch(actions.showProductComments())
        },
        onSelectColor: (color) => {
            dispatch(actions.chooseColor(color))
        },
        onSelectSize: (size) => {
            dispatch(actions.chooseSize(size))
        },
        onIncrease: (number) => {
            dispatch(actions.increaseNumber(number))
        },
        onDecrease: (number) => {
            dispatch(actions.decreaseNumber(number))
        },
        onChangeIcon: (src) => {
            dispatch(actions.changeIcon(src))
        },
        addToShopCart: (json) => {
            dispatch(actions.addToShoppingCart(json))
        },

    }
};

export default connect(mapState, mapDispatch)(ProductPage)