import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import '../css/common.css';
/**
 * 顶栏导航组件
 * 使用Link 指定路由
 * **/

const url = 'http://localhost:8080/biyaoweb/logout';
const Nav = ({user,logOut}) => {

    return(
        <div id="top" className="t-header m-dn">
            <div className="t-header-center f-tac">
                <ul className="header-nav">
                    <li className="header-nav-item"><Link to="/home">首页</Link><b className="hr-v"></b></li>
                    <li className="header-nav-item"><a href="javascript:void(0)">平台政策</a><b className="hr-v"></b></li>
                    <li className="header-nav-item"><a href="javascript:void(0)"></a></li>
                </ul>
                <ul className="header-user">
                    <li className="header-user-item login"><Link to="/login" id="loginBtn">登录</Link></li>
                    <li className="header-user-item regist"><Link to="/register" id="registBtn">注册</Link><b
                        className="hr-v"></b></li>
                    <li className="header-user-item user-center"><a href="javascript:void(0)" id="username">用户中心</a><b
                        className="hr-v"></b>
                        <div className="user-center-drop">
                            <b className="drop-icon"></b>
                            <ul>
                                <li><Link to="settlement" className="myOrder">我的订单</Link></li>
                                <li><Link to="purchased" target="_blank">已购买</Link></li>
                                <li>
                                    <a to="logout" className="logout" onClick={(e)=>{ e.preventDefault(); logOut()}}>退出登录</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="header-user-item user-app"><a href="">下载必要APP</a><b className="hr-v"></b>
                        <div className="user-app-drop">
                            <b className="drop-icon"></b>
                            <dl>
                                <dt>
                                    <p>我要的 才是必要的</p></dt>
                                <dd>
                                    <span></span>
                                </dd>
                            </dl>
                        </div>
                    </li>
                    <li className="header-user-item user-message"><a href="">{user.trueName ? user.trueName : '游客'}，你好<span
                        className="message-num"></span></a></li>
                    <li className="header-user-item user-shopCar"><Link to="shoppingCart">购物车<span
                        className="shopCar-num"></span></Link></li>
                </ul>
            </div>
        </div>
    )

};
const mapState = (state)=>{

    return {
        user: state.loginReducer.user,
        logOut:function () {
            fetch(url,{
                method: 'GET',
                credentials: 'include',
            }).then((response) => {

                if((response.status >= 200 && response.status < 300) || response.status === 304 ){
                    alert('退出成功');
                } else {
                    throw new Error('Fail to get response with status ' + response.status);
                }
            }).catch((error)=>{
                throw new Error('Error:' + error);
            })
        }
    }

};


export default connect(mapState)(Nav)