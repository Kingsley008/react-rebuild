import React from 'react';
import {connect} from 'react-redux';
import * as Status from '../../status';
import {Link} from 'react-router';
import {fetchMan} from '../action';

/**
 * 男装信息： 通过fetch 异步拉取数据到 store
 * **/
export const Part = ({id, icon, name, price, }) => {
    return(
        <li className="item-small">
            <div className="hd">
                <Link to={id}><img src={icon} width="204"/></Link>
            </div>

            <div className="bd">
                <Link to={id}><p className="item-small-intro f-toe">{name}</p></Link>
                <span className="item-samll-price">¥{price}</span>
            </div>
        </li>
    )
};

const apiGetManCategory = 'biyaoweb/getManCatagory';

class ManClothes extends React.Component{
    constructor(props){
        super(props);
        this.isFetch = false;
        this.showAtScroll = this.showAtScroll.bind(this);
    }

    showAtScroll(ev){
        if(this.isFetch){
            window.removeEventListener('scroll', this.showAtScroll);
        }
        const showManNode = document.querySelector('.m-show.f-center');
        let winH = document.documentElement.clientHeight;
        let winS = document.documentElement.scrollTop;
        if(!showManNode){
            return
        }
        if( winH + winS > showManNode.offsetTop + showManNode.clientHeight/2){
            this.props.fetchManInfo();
            this.isFetch = true;
        }
    }

    componentDidMount(){
        window.addEventListener('scroll',this.showAtScroll);
    }

    render(){
        switch (this.props.status){
            case Status.LOADING:{
               return(
                   <div className="m-show f-center">
                       <div className="nav f-cb">
                           <h3 className="m-title man">品质男装</h3>
                           <a className="nav-right" href="/biyaoweb/category?category=男装">查看全部&gt;</a>
                       </div>
                       <ul className="m-show-wrap man f-cb">
                           数据请求中
                       </ul>
                   </div>
               )
            }

            case Status.SUCCESS:{
                const productList = this.props.productList;
                const productArr = [];
                productList.forEach((v)=>{
                   productArr.push(<Part id ={v.id} key={v.id} name = {v.name} icon = {'http://localhost:8080/biyaoweb/'+v.icon} price = {v.price}/>)
                });
                return(
                    <div className="m-show f-center">
                        <div className="nav f-cb">
                            <h3 className="m-title man">品质男装</h3>
                            <a className="nav-right" href="/biyaoweb/category?category=男装">查看全部&gt;</a>
                        </div>
                        <ul className="m-show-wrap man f-cb">
                            {productArr}
                        </ul>
                    </div>
                )
            }

            case Status.FAILURE:{
                return(
                    <div>
                        服务器炸了
                    </div>
                )
            }
            default:{
                return(
                    <div className="m-show f-center">
                        <div className="nav f-cb">
                            <h3 className="m-title man">品质男装</h3>
                            <a className="nav-right" href="/biyaoweb/category?category=男装">查看全部&gt;</a>
                        </div>
                        <ul className="m-show-wrap man f-cb">

                        </ul>
                    </div>
                )
            }
        }

    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        fetchManInfo: () => {
            dispatch(fetchMan(apiGetManCategory))
        }
    }
};

const mapState = (state) => {
    const data = state.manReducer;
    return {
        status: data.status,
        productList: data.ClotheList,
    }
};


export default connect(mapState,mapDispatchToProps)(ManClothes);
