import React from 'react';
import {Slider} from "./Slider";
import {Controller} from "./Controll";
import {Category} from "./Category";
import {fetchInfo} from '../action';
import {connect} from 'react-redux';
import * as Status from '../../status';

// 请求首页信息的 API
const indexAPI = '/biyaoweb/indexJson';

class NavStage extends React.Component{
    constructor(props){
        super(props);
        // 请求信息
        this.props.fetchIndex();
        this.state = {
            sliders: this.init()
        };
        // 当前显示的图片下标
        this.currentIndex = 0;
        this.picNum = 6;
        this.onClick = this.onClick.bind(this);
        this.resetSliders = this.resetSliders.bind(this);
        this.bindHint = this.bindHint.bind(this);
        this.bindMovein = this.bindMovein.bind(this);
        this.bindMoveOut = this.bindMoveOut.bind(this);
        this.autoChangeBanner = this.autoChangeBanner.bind(this);
    }
    // 加载轮播图片 默认显示第一张 ==>
    init(){
        this.sliders = [];
        for(let i = 1; i <= 6; i++ ){
            let slider = {};
            slider.id = i-1;
          //  slider.url = sliderList.imgURL;
            if(i === 1){
                slider.isSelected = true;
            }else{
                slider.isSelected = false;
            }
            this.sliders.push(slider);
        }
        return this.sliders;
    }

    // 响应点击 重置 属性
    resetSliders(current){

        for(let i = 0; i < this.sliders.length; i++){
            this.sliders[i].isSelected = false;
        }
        this.sliders[current].isSelected = true;
        this.setState({sliders:this.sliders});
    }

    prev(){
        this.currentIndex = this.format(this.currentIndex - 1);
        this.resetSliders(this.currentIndex);
    }

    next(){
        this.currentIndex = this.format(this.currentIndex + 1);
        this.resetSliders(this.currentIndex);
    }

    onClick(ev){
        ev.stopPropagation();
        let target = ev.target;
        switch (target.className){
            case 'prev':{
                this.prev();
                break
            }
            case 'next':{
                this.next();
                break
            }
        }
    }

    bindHint(nextIndex){
        this.resetSliders(nextIndex);
    }

    format(index){
        if(index === -1 ){
            return this.picNum - 1
        } else {
            return (index % this.picNum )
        }

    }

    autoChangeBanner(){
        this.next();
    }

    loop(){
        this.intervalHandler = setInterval(this.autoChangeBanner,3000)
    }


    bindMovein(){
        clearInterval(this.intervalHandler);
    }

    bindMoveOut(){
        this.loop()
    }

    componentDidMount(){
        this.loop();
    }

    render(){
        let {status} = this.props;
        switch (status){
            case Status.LOADING:{
                return(
                    <div>数据请求中</div>
                )
            }
            case Status.SUCCESS:{
                const SildersComponent = [];
                const Controllers = [];

                // console.log(this.props.sliders);
                const sliders = this.state.sliders;
                for(let i = 0; i < sliders.length; i++){
                    sliders[i].url = this.props.sliders[i].imgURL;
                }

                // console.log(sliders);
                for (let i = 0, len = sliders.length; i < len ; i++) {
                    SildersComponent.push(<Slider key = {sliders[i].id} imgUrl = {sliders[i].url} isSelected = {sliders[i].isSelected}/>);
                    Controllers.push(<Controller key = {sliders[i].id} id={sliders[i].id} isSelected = {sliders[i].isSelected} bindHint={this.bindHint} />);
                }

                return(
                    <div className="t-banner">
                        <div className="t-banner-center f-center">
                            <div className="banner-slider" onMouseOver={this.bindMovein} onMouseLeave={this.bindMoveOut}>
                                <ul className="sliders" >
                                    {SildersComponent}
                                </ul>
                                <span className="prev" onClick={this.onClick}></span>
                                <span className="next" onClick={this.onClick}></span>
                                <ul className="hint">
                                    {Controllers}
                                </ul>
                                <Category/>
                            </div>
                        </div>
                    </div>
                )
            }
            case Status.FAILURE:{
                return(
                    <div>对不起！服务器炸了！</div>
                )
            }
            default:
                return(
                    <div>数据请求中</div>
                )

        }

    }
}

const mapState = (state) => {
    const indexData = state.sliderReducer;

    return {
        status:indexData.status,
        sliders:indexData.sliderList,
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        fetchIndex: () => {
            dispatch(fetchInfo(indexAPI))
        }
    }
};

export default connect(mapState, mapDispatchToProps)(NavStage);