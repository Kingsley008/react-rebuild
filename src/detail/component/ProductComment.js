import React from 'react';
const admin = require('../../imgs/icon/admin.png');

const CommentParts = ({rank, rankIcon, name, comments, buyTime, color, size,admin }) => {

    return (
        <li className="f-cb">
            <div className="eval-user">
                <img className="user-icon" src={admin} width="40" height="40"/>
                <span className="user-id">{name}</span>
            </div>
            <dl className="eval-result">
                <dt className={rankIcon}></dt>
                <dd>{rank}</dd>
            </dl>
            <div className="eval-content">
                <p>{comments}</p>
            </div>
            <div className="eval-product">
                <span> {buyTime}</span>
                <span> {color}</span>
                <span> {size}</span>
            </div>
        </li>
    )
};

class ProductComment extends React.Component{
    constructor(props){
        super(props);
        this.commentsPart = [];
        this.initComments = this.initComments.bind(this);
        this.state = {
            commentsPart: this.commentsPart
        };
        this.initComments();
    }

    initComments(){
        let self = this;
        fetch('/biyaoweb/getComments?productId='+this.props.id, {
            method:'GET',
            credentials:'include'
        }).then((res) => {
            if((res.status >= 200 && res.status < 300) || res.status === 304) {
                res.json().then((responseText)=> {
                    console.log(responseText);
                    const commentList = responseText.commentsList;
                    let mapComment = null;
                    let mapIcon = null;

                    commentList.forEach(function (value, index, p3) {
                        mapComment = {
                            1: '好评',
                            2: '中评',
                            3: '差评'
                        };
                        mapIcon = {
                            1: 'good-icon',
                            2: 'good-icon',
                            3: 'bad-icon'
                        };

                        const rank = mapComment[value.rank];
                        const rankIcon = mapIcon[value.rank];
                        self.commentsPart.push(<CommentParts key ={index} rank = {rank} rankIcon = {rankIcon} name = {value.trueName.substring(0,1) +'***'}
                                                                comments = {value.comments} buyTime = {value.buyTime} color={value.color} size = {value.size} admin ={admin}  />)

                    })

                    this.setState({
                        commentsPart: self.commentsPart
                    })


                })
            }
        }).catch((error) => { throw new Error('ERROR' + error)})
    }
    render(){
        return (
            <div className="comment-list">
                <p>商品满意度：<span className="total - eval">4.8分</span></p>
                <ul>
                    {this.state.commentsPart}
                </ul>
            </div>
        )
    }


}

export default ProductComment;