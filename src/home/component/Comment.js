import React from 'react';
import {connect} from 'react-redux';
import * as Status from '../../status';
import {fetchComment} from '../action';


const url = 'biyaoweb/showComments';

const CommentPart = ({icon, productName, trueName, buyTime, comments}) => {
    return (
        <li>
            <div className="hd">
                <a href="" target="_blank">
                    <img className="new-pic1" src={icon} alt={productName}/>
                </a>
            </div>
            <div className="bd">
                <div className="user-id">{trueName.substring(0, 1) + '***'}</div>
                <div className="comment-time">{buyTime}</div>
                <h3 className="name f-toe" title={productName}>{productName}</h3>
                <p className="commnet-content f-toe">{comments}</p>
            </div>
        </li>
    )
};

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchComment(url);
        this.offset = 360; // 每次滚动的偏移量
        this.timing = 3000; // 定时器间隔
        this.currentOffset = 0; // 当前的偏移量
        this.maxOffset = 5400; // 最大偏移量
        this.minOffset = 0;
        this.state = {
            style:{ right:this.currentOffset + 'px'}
        };

        this.onPrveBtn = this.onPrveBtn.bind(this);
        this.onNextBtn = this.onNextBtn.bind(this);
        this.onMoveIn = this.onMoveIn.bind(this);
        this.onMoveOut = this.onMoveOut.bind(this);
    }

    goPrve(){
        this.currentOffset = Math.max(this.minOffset,this.currentOffset - this.offset);
        this.setState({style:{right:this.currentOffset + 'px'}})
    }
    goNext(){
        if(this.currentOffset === this.maxOffset){
            this.currentOffset = 0;
        }
        this.currentOffset = Math.min(this.maxOffset, this.currentOffset + this.offset);
        this.setState({style:{right:this.currentOffset + 'px'}})
    }

    loop(){
        const self = this;
        this.intervalHandler = setInterval(()=>{
            self.goNext();
        },self.timing)
    }
    onMoveIn(){
        clearInterval(this.intervalHandler);
    }

    onMoveOut(){
        this.loop();
    }

    componentDidMount(){
        this.loop();
    }

    onPrveBtn(){
        this.goPrve();
    }

    onNextBtn(){
        console.log('click');
        this.goNext();
    }


    render() {
        switch (this.props.status) {
            case Status.LOADING: {
                return (
                    <div className="m-comment f-center" style={{position:'relative'}}>
                        <h3 className="m-title">大家都在说</h3>
                        <small className="m-intro">生活, 没有统一标准</small>
                        <span className="comment-prev"></span>
                        <span className="comment-next"></span>
                        <div className="m-comment wrap f-cb">
                            <div className="m-move-comment">
                                <ul className="m-move-sub-comment f-cb">
                                    数据请求中
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
            case Status.SUCCESS: {
                const commentArr = [];
                this.props.commentList.forEach((v) => {
                   commentArr.push(<CommentPart key={v.id} icon ={"http://localhost:8080/biyaoweb/"+ v.icon} productName={v.productName}
                                                trueName = {v.trueName} buyTime ={v.buyTime} comments={v.comments}/>)
                });
                return (
                    <div className="m-comment f-center" style={{position:'relative'}}>
                        <h3 className="m-title">大家都在说</h3>
                        <small className="m-intro">生活, 没有统一标准</small>
                        <span className="comment-prev" onClick={this.onPrveBtn} onMouseOver={this.onMoveIn} onMouseLeave={this.onMoveOut}></span>
                        <span className="comment-next" onClick={this.onNextBtn} onMouseOver={this.onMoveIn} onMouseLeave={this.onMoveOut}></span>
                        <div className="m-comment wrap f-cb">
                            <div className="m-move-comment">
                                <ul className="m-move-sub-comment f-cb" style={this.state.style} onMouseOver={this.onMoveIn} onMouseLeave={this.onMoveOut}>
                                    {commentArr}
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
            case Status.FAILURE: {
                return (
                    <div className="m-comment f-center" style={{position:'relative'}}>
                        <h3 className="m-title">大家都在说</h3>
                        <small className="m-intro">生活, 没有统一标准</small>
                        <span className="comment-prev"></span>
                        <span className="comment-next"></span>
                        <div className="m-comment wrap f-cb">
                            <div className="m-move-comment">
                                <ul className="m-move-sub-comment f-cb">
                                    数据请求失败
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
            default: {
                return (
                    <div className="m-comment f-center" style={{position:'relative'}}>
                        <h3 className="m-title">大家都在说</h3>
                        <small className="m-intro">生活, 没有统一标准</small>
                        <span className="comment-prev"></span>
                        <span className="comment-next"></span>
                        <div className="m-comment wrap f-cb">
                            <div className="m-move-comment">
                                <ul className="m-move-sub-comment f-cb">

                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }
}


const mapState = (state) => {
    return {
        status: state.commentReducer.status,
        commentList: state.commentReducer.commentsList,
    }
};


const mapDispatch = (dispatch) => {
    return {
        fetchComment: (url) => {
            dispatch(fetchComment(url))
        }
    }
};

export default connect(mapState, mapDispatch)(Comment);
