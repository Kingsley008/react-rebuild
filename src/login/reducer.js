import * as actionTypes from './actionTypes';
import * as Status from '../status';


export const loginReducer  = (state = {status: Status.LOADING, noticePassword :"", noticeUserName:"",message:"",user:{}} , action) => {
      switch (action.type){
          case actionTypes.FETCH_LOGIN_STARTED:{
              return {
                  ...state, status:Status.LOADING
              }
          }
          case actionTypes.FETCH_LOGIN_SUCCESS:{
              return {
                  ...state, status:Status.SUCCESS, ...action.result
              }
          }
          case actionTypes.FETCH_LOGIN_FAILURE:{
              return {
                  ...state, status:Status.FAILURE
              }
          }
          case actionTypes.CHECK_VALIDATE_LOCAL_USERNAME:{
              let isLocalValidate = true;
              if (!/^1\d{10}$/.test(action.input)) {
                  isLocalValidate = false;
                  let notice = "请输入正确的手机号";
                  return {
                      ...state, isLocalValidate, noticeUserName:notice
                  }
              }
              return {
                  ...state, isLocalValidate, noticeUserName:""
              }

          }
          case actionTypes.CHECK_VALIDATE_LOCAL_PASSWORD:{
              let isLocalValidate = true;
              let pswd = action.input;
              if (pswd.length >16 || pswd.length < 6){
                  isLocalValidate = false;
               let notice = "请确认您的密码的长度是否符合要求";
                  return {
                      ...state, isLocalValidate, noticePassword:notice
                  }
              }else if (!/\d/.test(pswd) || !/[a-z]/i.test(pswd)){
                  let notice = "请确认您的密码包含了数字和字母";
                  isLocalValidate = false;
                  return {
                      ...state, isLocalValidate, noticePassword:notice
                  }
              }else {
                  isLocalValidate = true;
                  return {
                      ...state, isLocalValidate, noticePassword:""
                  }
              }

          }
          case actionTypes.CHECK_VALIDATE_SERVER_SUCCESS:{
              return {
                  ...state, isServerValidate:true
              }
          }
          case actionTypes.CHECK_VALIDATE_SERVER_FAIL:{
              return {
                  ...state, isServerValidate:false
              }
          }
          default:
              return state
      }
};