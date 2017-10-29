import React from 'react';
import {connect} from 'react-redux';
import {Part} from "./ManClothes";
import {fetchLady} from '../action';
import * as Status from '../../status';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';

/**
 * 女装信息： 通过fetch 异步拉取数据到 store
 * **/

class LadyClothes extends React.Component{

    constructor(props){
        super(props);
        this.showAtScroll = this.showAtScroll.bind(this);
        this.isFetch = false;
    }

    showAtScroll(){
        if(this.isFetch){
            window.removeEventListener('scroll', this.showAtScroll);
        }
        let node = document.querySelector('.m-show.f-center');
        let winH = document.documentElement.clientHeight;
        let winS = document.documentElement.scrollTop;
        if(!node){
            return
        }
        if(winH + winS > node.offsetTop){
            this.props.fetchLadyInfo();
            this.isFetch = true;
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.showAtScroll);
    }

    render(){
            console.log(this.props.status);
           switch (this.props.status){
               case (Status.LOADING):{
                   return(
                       <div className="m-show f-center">
                           <div className="nav f-cb">
                               <h3 className="m-title lady">潮流女装</h3>
                               <Link className="nav-right" to="category/女装">查看全部&gt;</Link>
                           </div>

                           <ul className="m-show-wrap lady f-cb">
                               加载中
                           </ul>
                       </div>
                   )
               }
               case (Status.SUCCESS):{
                   const ladyArr = [];
                   const productList = this.props.productList;
                   productList.forEach((v) => {
                       ladyArr.push(<Part id ={v.id} key={v.id} name = {v.name}
                                          icon = {'http://localhost:8080/biyaoweb/'+v.icon} price = {v.price}
                                          />)
                   });
                   return(
                       <div className="m-show f-center">
                           <div className="nav f-cb">
                               <h3 className="m-title lady">潮流女装</h3>
                               <Link className="nav-right" to="category/女装">查看全部&gt;</Link>
                           </div>

                           <ul className="m-show-wrap lady f-cb">
                               {ladyArr}
                           </ul>
                       </div>
                   )
               }

               case (Status.FAILURE):{
                   return(
                       <div className="m-show f-center">
                           <div className="nav f-cb">
                               <h3 className="m-title lady">潮流女装</h3>
                               <Link className="nav-right" to="category/女装">查看全部&gt;</Link>
                           </div>

                           <ul className="m-show-wrap lady f-cb">
                                数据加载失败
                           </ul>
                       </div>
                   )
               }
               default:{
                   return(
                       <div className="m-show f-center">
                           <div className="nav f-cb">
                               <h3 className="m-title lady">潮流女装</h3>
                               <a className="nav-right" href="/biyaoweb/category?category=女装">查看全部&gt;</a>
                           </div>

                           <ul className="m-show-wrap lady f-cb">

                           </ul>
                       </div>
                   )
               }
           }
    }
}

const url = '/biyaoweb/getWomanCatagory';
const mapDispatch = (dispatch)=> {
    return{
        fetchLadyInfo: () => { dispatch(fetchLady(url))}
    }
};

const mapState = (state) => {
    return{
        productList:state.ladyReducer.ClotheList,
        status: state.ladyReducer.status,
    }
};

export default connect(mapState,mapDispatch)(LadyClothes)


