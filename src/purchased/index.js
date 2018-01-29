import React from 'react';
import './purchased.css';
import './settlement.css';
import {Footer} from "../footer/index";
import {Link} from 'react-router';
import $ from 'jquery';
import {AjaxUtil} from "../util/AjaxUtil"

class CommentBox extends React.Component {

    constructor(props) {
        super(props);
        this.slideDown = this.slideDown.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.comment = this.props.comments;
        this.btn = '';
        if(this.comment == null){
            this.btn = '去评论'
        } else {
            this.btn = '已评论'
        }
        this.state = {
            commentCss: {display: 'none'},
            disabled: 0, // false
            btn:this.btn
        }

    }

    slideDown(e) {
        let target = e.target;
        if (target.firstChild.textContent + '' === '去评论') {
            this.setState({
                commentCss: {display: 'block'},
            })
        } else {
            return
        }
    }

    onSubmit(e) {
        const self = this;
        e.preventDefault();
        if (!e.target.form["comments"].value) {
            e.target.form["comments"].value = '该用户没有留下任何评论';
        }else if(!e.target.form["rank"].value){
            e.target.form["rank"].value = '1';
        }
        const data = AjaxUtil.serializeForm(e.target.form);
        $.ajax({
            url: '/biyaoweb/addComment',
            type: 'GET',
            data: data,
            success: function () {
                // 再做个提示插件
                window.alert('评论成功');
                self.setState({
                    commentCss: {display: 'none'},
                    btn:'已评论'
                })
                // TODO  disable 属性设置

            }
        });

    }

    render() {
        // 判断当前订单是否有评论 返回不同文字的按钮
        const {size, color, price, buyTime, buyNumber, productName, icon, index, id, comments} = this.props;
        let settlementClass = 'settlement-table settlement-table' + index;
        let commentClass = 'comment-submit' + index;
        return (
            <div>
                <table className={settlementClass}>
                    <tbody>
                    <tr>
                        <td width="40%">
                                        <span className="shop-img">
                                                <img width="100" height="100" src={icon}/>
                                        </span>
                        </td>
                        <td align="left">
                            <span className="product-name">{productName}</span>
                            <div className="product-des">
                                <p>{color}</p>
                                <p>{size}</p>
                            </div>
                        </td>
                        <td width="10%" className="single-price ff6600">&yen;{price}</td>
                        <td width="10%"><input className="total-number" type="number" max="99" min="0"
                                               value={buyNumber} readOnly/></td>
                        <td width="10%">
                            <span className="product-price-count ff6600">{buyTime}</span>
                            <span className="comment-btn ff6600 comment-btn" onClick={this.slideDown}>{this.state.btn}</span>
                        </td>

                    </tr>
                    </tbody>
                </table>
                <div className="comment-box comment-box'+ number+'" style={this.state.commentCss}>
                    <form><textarea name="comments" className="comment-text" cols="40" rows="5"
                                    placeholder="请输入您的评论"></textarea> <br></br>
                        <label><input type="radio" name="rank" value="1" required/>好评</label>
                        <label><input type="radio" name="rank" value="2" required/>中评</label>
                        <label><input type="radio" name="rank" value="3" required/>差评</label>
                        <input hidden name="id" value={id}/><br></br>
                        <button type="submit" className={commentClass} onClick={this.onSubmit}>提交</button>
                    </form>
                </div>
            </div>

        )


    }
}


class Purchased extends React.Component {
    constructor(props) {
        super(props);
        let self = this;
        this.state = {
            orderList: null
        };
        $.ajax({
            type: 'GET',
            url: "/biyaoweb/getOrderList",
            success: function (data) {
                console.log(data)
                self.initState(data)
            }
        })
    }

    initState(data) {
        this.setState({
            orderList: data.orderList
        })
    }

    slideDown() {

    }


    render() {
        let orderArr = [];

        if (this.state.orderList == null) {
            return (<div>数据加载中</div>)
        }
        let orderList = this.state.orderList;
        orderList.forEach((v, i) => {
            orderArr.push(<CommentBox key={i} index={i} id={v.id} buyNumber={v.buyNumber}
                                      comments={v.comments} price={v.price}
                                      icon={v.icon} buyTime={v.buyTime} size={v.size}
                                      productName={v.productName}/>)
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

                <div className="order f-center f-cb">

                    <h3 className="h-title">已购买</h3>
                    <table className="table-title" cellPadding="0" cellSpacing="0" style={{width: '1079px'}}>
                        <tr>
                            <th width="70%">产品规格</th>
                            <th width="10%">单价</th>
                            <th width="10%">数量</th>
                            <th width="10%">时间</th>
                        </tr>
                    </table>
                    {orderArr}
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Purchased;