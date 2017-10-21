import React from 'react';

class FactoryIntro extends React.Component{
    constructor(props){
        super(props);
        this.images = [];
        this.init();
        this.state = {
            images: this.images
        }
    }
    init(){
        for(let i = 1; i <= 4; i++){
            this.images.push('http://localhost:8080/biyaoweb/imgs/muf/muf'+ i +'.jpg');
        }
    }

    render(){
        const images = this.state.images;
        return(
        <div className="m-manufacturer f-center">
            <header className="hd f-cb">
                <div className="left-title">
                    <h3 className="m-title">品牌制造商</h3>
                    <small className="m-intro">工厂直达消费者，剔除品牌溢价</small>
                </div>
                <a className="right-more">更多制造商&gt;</a>
            </header>
            <div className="bd">
                <div className="manufacturerList f-cb">
                    <a href="" className="manufacturer first large">
                        <div className="mask"></div>
                        <div className="name">新秀制造商</div>
                        <div className="price">59元起</div>
                        <img src={images[0]} width="357" alt="manufacturer"/></a>
                    <a href="" className="manufacturer second large">
                        <div className="mask"></div>
                        <div className="name">
                            "MUJI制造商"
                            <span className="newShelfTag">上新</span>
                        </div>
                        <div className="price">12.9元起</div>
                        <img src={images[1]} width="357" alt="manufacturer"/></a>
                    <a href="" className="manufacturer third small">
                        <div className="mask"></div>
                        <div className="name">
                            "潘多拉制造商"
                            <span className="newShelfTag">上新</span>
                        </div>
                        <div className="price">129元起</div>
                        <img src={images[2]} width="357" alt="manufacturer"/>
                    </a>

                    <a href="" className="manufacturer forth small">
                        <div className="mask"></div>
                        <div className="name">
                            "Nine West 制造商"
                            <span className="newShelfTag">上新</span>
                        </div>
                        <div className="price">199元起</div>
                        <img src={images[3]} width="357" alt="manufacturer"/>
                    </a>
                </div>
            </div>
        </div>
        )
    }

}

export default FactoryIntro;

