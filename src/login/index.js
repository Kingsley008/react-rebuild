import React from 'react';
import * as action from './action';
import {connect} from 'react-redux';
import md5 from 'js-md5';
import { browserHistory } from 'react-router';
import './login.css';

let url = '/biyaoweb/checklogin?';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.getUserName = this.getUserName.bind(this);
        this.getPassword = this.getPassword.bind(this);
        this.fetchLogin = this.fetchLogin.bind(this);
    }

    getUserName(ev){
        this.userName = ev.target.value;
        this.props.checkUserName(this.userName);

    }

    getPassword(ev){
        this.password = ev.target.value;
        this.props.checkPassword(this.password);
    }

    fetchLogin(ev){
        ev.preventDefault();

        if(this.props.isLocalValidate){
            this.password = md5(this.password);
            const urlGet = url +"username=" + this.userName + '&password='+ this.password;
            this.props.fetchLogin(urlGet);
        }
    }
    componentDidMount() {

    }

    render() {
        if(this.props.result === 1){
            browserHistory.push('home');
        }
        return (
            <div>
                <div className="t-body f-center">
                    <form className="login-form" method="post" action="" onSubmit={this.fetchLogin}>
                        <h3>用户登录</h3>
                        <i className="phone-warn">{this.props.message}</i>
                        <i className="phone-warn">{this.props.phoneWarn}</i>
                        <input className="phoneNum" placeholder="请输入手机号" onBlur={this.getUserName}/>
                        <i className="password-warn">{this.props.passwordWarn}</i>
                        <input className="password" type="password" placeholder="请输入登录密码" onBlur={this.getPassword}/>
                        <button className="loginBtn" type="submit" onSubmit={this.fetchLogin}>登 录</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapToState = (state) => {

    return {
        phoneWarn: state.loginReducer.noticeUserName,
        passwordWarn: state.loginReducer.noticePassword,
        status:state.loginReducer.status,
        isLocalValidate: state.loginReducer.isLocalValidate,
        message:state.loginReducer.message,
        result:state.loginReducer.result,
    }
};



const mapToDispatch = (dispatch) => {
  return {
      checkUserName:(input) => dispatch(action.checkValidateUserName(input)),
      checkPassword:(input) => dispatch(action.checkValidatePassword(input)),
      fetchLogin:(url) => dispatch(action.fetchLogin(url))
  }
};

export default  connect(mapToState, mapToDispatch)(Login)