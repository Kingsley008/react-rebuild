import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {routerReducer} from 'react-router-redux';
import promiseMiddleware from './middleWare/promiseMiddleware';
import {sliderReducer,manReducer,ladyReducer, commentReducer} from './home/reducer';
import {loginReducer} from "./login/reducer"
import {registerReducer} from './register/reducer';
import {categoryReducer} from './category/reducer';
import {productReducer} from "./detail/reducer";
import {cartReducer} from './shoppingCart/reducer';
import {settlementReducer} from "./settlement/reducer"



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
    settlementReducer,
    cartReducer,
    productReducer,
    categoryReducer,
    registerReducer,
    loginReducer,
    commentReducer,
    sliderReducer,
    manReducer,
    ladyReducer,
    routing: routerReducer,

});

const store = createStore(reducer, initialState, storeEnhancers);

export default store;