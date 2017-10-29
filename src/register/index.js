import React from 'react';
import md5 from 'js-md5';
import {connect} from 'react-redux';
import * as action from './action';
import { browserHistory } from 'react-router';
import './reg.css';
const url = '/biyaoweb/adduser?';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.getUserName = this.getUserName.bind(this);
        this.getPassword = this.getPassword.bind(this);
        this.fetchReg = this.fetchReg.bind(this);
        this.cheackRepeatPassword = this.cheackRepeatPassword.bind(this);
        this.getAddress = this.getAddress.bind(this);
        this.getTrueName = this.getTrueName.bind(this);
        this.state = {message:''};
    }

    getUserName(ev) {
        this.userName = ev.target.value;
        this.props.checkUserName(this.userName);

    }

    getPassword(ev) {
        this.password = ev.target.value;
        this.props.checkPassword(this.password);
    }
    getAddress(ev) {
        this.address = ev.target.value;
    }

    getTrueName(ev) {
        this.trueName = ev.target.value;
    }

    cheackRepeatPassword(ev){
        let password = ev.target.value;
        if(this.password !== password){
            this.setState({
                message: '请确认重复的密码是否正确'
            })

        }else{
            this.setState({
                message: ''
            })
        }
    }
    fetchReg(ev) {
        ev.preventDefault();

        if (this.props.isLocalValidate) {
            this.password = md5(this.password);
            const urlGet = url + "phoneNumber=" + this.userName + '&password=' + this.password +"&trueName=" + this.trueName +
                "&address=" + this.address;
            this.props.fetchReg(urlGet);
        }
    }


    render() {
        if(this.props.result === 1){
            alert('注册成功 马上跳转到登录页面');
            browserHistory.push('login');
            this.props.result = 0;
        }

        return (
            <div className ="t-body f-center">
                <form className="reg-form" onSubmit={this.fetchReg}>
                    <h3>新用户注册</h3>
                    <i className="phone-warn">{this.props.phoneWarn}</i>
                    <input className="phoneNum" placeholder="请输入手机号" onBlur={this.getUserName}/>
                    <i className="password-warn">{this.props.passwordWarn}</i>
                    <input className="password" type="password" placeholder="6-16位字符加数字的密码" onBlur={this.getPassword}/>
                    <i className="password-warn">{this.state.message}</i>
                    <input className="secPassword" type="password" placeholder="请再次输入密码" onBlur={this.cheackRepeatPassword}/>
                    <input className="address" placeholder="请输入默认配送地址" onBlur={this.getAddress}/>
                    <input className="trueName" placeholder="请输入默认收件人姓名" onBlur={this.getTrueName}/>
                    <button className="regBtn" type="submit" onSubmit={this.fetchReg}>注 册</button>
                </form>
            </div>
        )
    }
}


const mapToState = (state) => {
    console.log(state);
    return {
        phoneWarn: state.registerReducer.noticeUserName,
        passwordWarn: state.registerReducer.noticePassword,
        status:state.registerReducer.status,
        isLocalValidate: state.registerReducer.isLocalValidate,
        message:state.registerReducer.message,
        result:state.registerReducer.result,
    }
};


const mapToDispatch = (dispatch) => {

    return {
        checkUserName:(input) => dispatch(action.checkValidateUserName(input)),
        checkPassword:(input) => dispatch(action.checkValidatePassword(input)),
        fetchReg:(url) => dispatch(action.fetchReg(url))
    }
};



export default connect(mapToState, mapToDispatch)(RegisterPage)