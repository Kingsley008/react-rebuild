import React from 'react';
import * as Status from '../status';
import {connect} from 'react-redux';
import {fetchManClothesCategory} from './action';
import {Link} from 'react-router';
import { browserHistory } from 'react-router';
import './category.css';


const Part = ({x})=> {
    const url = "http://localhost:8080/biyaoweb/" + x.icon;
    return(
        <li>
            <div className="hd">
                <div className="f-csp" onClick={()=>{browserHistory.push('/product/'+x.id)}}>
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


class CategoryPage extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchCategory('/biyaoweb/categoryJson?category='+this.props.gender);
    }



    render() {
        console.log(this.props.status);
        switch (this.props.status){
            case Status.LOADING:{
                return(
                    <div className="t-bd f-center">
                        内容加载中
                    </div>
                )
            }

            case Status.SUCCESS:{

                const {subCatagory, mainCatagory, list} = this.props.category;
                let  subOne = subCatagory[0].subCatagory;
                let productArr = [];
                let productListOne = list[0];
                for(let i = 1; i < productListOne.length; i++){
                    productArr.push(<Part x = {productListOne[i]} key={productListOne[i].id}/>)
                }

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

                            <ul className="f-cb">
                                <h3>{mainCatagory}：</h3>

                        <li><a href={subOne}>{subOne}</a></li>

                            </ul>
                        </div>

                        <ul className="cateGoryList">
                            <li id="280">
                                <div className="list">
                                    <h3 className="nav" id={subOne}>{subOne}</h3>
                                    <ul className="f-cb">
                                        {productArr}
                                    </ul>
                                </div>
                            </li>

                        </ul>
                    </div>
                )
            }

            case Status.FAILURE:{
                return(
                    <div className="t-bd f-center">
                        内容加载失败
                    </div>
                )
            }
            default:{

                    return(
                        <div className="t-bd f-center">
                            内容加载中
                        </div>
                    )

            }
        }


    }
}



const mapState = (state)=>{

  return {
      category: state.categoryReducer,
      status:state.categoryReducer.status
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