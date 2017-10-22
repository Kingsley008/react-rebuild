import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {routerReducer} from 'react-router-redux';
import promiseMiddleware from './middleWare/promiseMiddleware';
import {sliderReducer,manReducer,ladyReducer, commentReducer} from './home/reducer';
import {loginReducer} from "./login/reducer"

/*
let state = {
    imgSlider:[],
    imgNewProduct:[],
    imgFactory :[],
    user:{
        name:'xxx',
        address:'xxx'
    },
    comments:[{
      userName:'xxx',
      productName:'xxx',
      comment:'xxx'
    }],
    // 对应后台product对象的字段即可
    product:[{
       id:1,
       productName:'xxx',
       productPrice:'xxx',
       isNewProduct:1,
    }],
    // 对应 localStorage 中 存储的购物车
    cartList:[{

    }],
    // 对应 localStorage
    orderList:[{

    }],
    // 对应 后台对象
    purchasedList:[{

    }]

};*/

const win = window;



// 定义中间件
const middlewares = [promiseMiddleware];
const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f
);


const initialState = {
};

// 集成 reducer
const reducer = combineReducers({
    loginReducer,
    commentReducer,
    sliderReducer,
    manReducer,
    ladyReducer,
    routing: routerReducer,

});

const store = createStore(reducer, initialState, storeEnhancers);

export default store;