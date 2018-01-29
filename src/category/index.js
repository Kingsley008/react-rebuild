import React from 'react';
import * as Status from '../status';
import {connect} from 'react-redux';
import {fetchManClothesCategory} from './action';
import {browserHistory, Link} from 'react-router';
import './category.css';

const Spart = ({x})=>{
    const url = "http://localhost:8080/biyaoweb/" + x.icon;
    return(
        <li>
            <div className="hd">
                <div className="f-csp" onClick={() => {
                    browserHistory.push('/product/' + x.id)
                }}>
                    <i className="f-oh">
                        <img src={url}/>
                    </i>
                </div>
            </div>
            <div className="bd">
                <h3>{x.name}</h3>
                <div className="price">￥{x.price}</div>
            </div>
        </li>
    )
};

class Part extends React.Component {
    constructor(props){
        super(props)

    }
    render(){
        const {sub,arr} = this.props;
        console.log(sub);
        console.log(arr);
        let productPart = [];
        arr.forEach((v,i)=>{
           productPart.push(<Spart x = {v} key={i} />)
        });
        return (
            <ul className="cateGoryList">
                <li id="280">
                    <div className="list">
                        <h3 className="nav" id={sub}>{sub}</h3>
                        <ul className="f-cb">
                            {productPart}
                        </ul>
                    </div>
                </li>
            </ul>
        )
    }
};




class CategoryPage extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchCategory('/biyaoweb/categoryJson?category=' + this.props.gender);
    }

    render() {
        console.log(this.props.status);
        switch (this.props.status) {
            case Status.LOADING: {
                return (
                    <div className="t-bd f-center">
                        内容加载中
                    </div>
                )
            }

            case Status.SUCCESS: {

                const {subCatagory, mainCatagory, list} = this.props.category;
                let subArr = [];
                for (let i = 0; i < subCatagory.length; i++) {
                    let obj = {};
                    let productArr = list[i];
                    obj.sub = subCatagory[i];
                    obj.arr = productArr;
                    subArr.push(obj)
                }
                let productArrs = [];
                for (let i = 0; i < subArr.length; i++) {
                    productArrs.push(<Part  sub = {subArr[i].sub.subCatagory} arr={subArr[i].arr} key= {i} />)
                }
                console.log('sub', productArrs);

                return (
                    <div className="t-bd f-center">
                        <div className="nav">
                            <ul>
                                <li><Link to="/home">首页</Link></li>
                                <i>&gt;</i>
                                <li><Link to="category:man">{mainCatagory}</Link></li>
                            </ul>
                        </div>
                        <div className="tab">
                            {productArrs}
                        </div>

                    </div>
                )
            }

            case Status.FAILURE: {
                return (
                    <div className="t-bd f-center">
                        内容加载失败
                    </div>
                )
            }
            default: {

                return (
                    <div className="t-bd f-center">
                        内容加载中
                    </div>
                )

            }
        }


    }
}


const mapState = (state) => {

    return {
        category: state.categoryReducer,
        status: state.categoryReducer.status
    }
};

const mapDispatch = (dispatch) => {
    return {
        fetchCategory: (url) => {
            dispatch(fetchManClothesCategory(url))
        }
    }
};

export default connect(mapState, mapDispatch)(CategoryPage)