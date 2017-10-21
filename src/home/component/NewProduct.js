import React from 'react';

class NewProduct extends React.Component{
    constructor(props){
        super(props);
        this.offset = 1080;
        this.currentOffset = 0;
        this.state = {
            offsetStyle: {right: this.currentOffset + 'px'},
        };
        this.max = 5400;
        this.min = 0;
        this.onNextClick = this.onNextClick.bind(this);
        this.onPrevClick = this.onPrevClick.bind(this);
    }

    onPrevClick() {

        this.currentOffset = Math.max(this.currentOffset - this.offset, this.min);

        this.setState({ offsetStyle: {right: this.currentOffset + 'px'},});

    }

    onNextClick(){
        this.currentOffset   = Math.min(this.currentOffset + this.offset, this.max);
        this.setState({ offsetStyle: {right: this.currentOffset + 'px'},});
    }

    render(){
       const Style = this.state.offsetStyle;
       // TODO 死去活来
        return(
            <div className="m-new f-center" style={{position:'relative'}}>
                <h3 className="m-title">新品首发</h3>
                <small className="m-intro">周一周四上新 , 为你寻觅世间好物</small>
                <span className="new-prev" onClick={this.onPrevClick}></span>
                <span className="new-next" onClick={this.onNextClick}></span>
                <div className="m-new wrap f-cb">
                    <div className="m-move" style={Style}>
                        <ul className="m-move-sub" >
                            <li>
                            <div className="hd">
                                <a href="" target="_blank">
                                    <img className="new-pic1 " src="http://localhost:8080/biyaoweb/imgs/new/new-1a.png" alt="花样年华女士小白鞋"/>
                                        <img style={{position:'relative', zIndex:'2'}} className="new-pic2 f-dn"
                                             src="http://localhost:8080/biyaoweb/imgs/new/new-1b.jpg" alt="花样年华女士小白鞋"/>
                                            <div className="color-num">2色可选</div>
                                </a>
                            </div>
                            <div className="bd">
                                <a href=""><h3 className="name" title="花样年华女士小白鞋">花样年华女士小白鞋</h3></a>
                                <span className="price">&yen;259 </span>
                            </div>
                        </li>
                            <li>
                                <div className="hd">
                                    <a href="" target="_blank">
                                        <img className="new-pic1 " src="http://localhost:8080/biyaoweb/imgs/new/new-1a.png" alt="花样年华女士小白鞋"/>
                                            <img style={{position:'relative', zIndex:'2'}} className="new-pic2 f-dn"
                                                 src="http://localhost:8080/biyaoweb/imgs/new/new-1b.jpg" alt="花样年华女士小白鞋"/>
                                            <div className="color-num">2色可选</div>
                                    </a>
                                </div>
                                <div className="bd">
                                    <a href=""><h3 className="name" title="花样年华女士小白鞋">花样年华女士小白鞋</h3></a>
                                    <span className="price">&yen;259 </span>
                                </div>
                            </li>
                            <li>
                                <div className="hd">
                                    <a href="" target="_blank">
                                        <img className="new-pic1 " src="http://localhost:8080/biyaoweb/imgs/new/new-1a.png" alt="花样年华女士小白鞋"/>
                                            <img style={{position:'relative', zIndex:'2'}} className="new-pic2 f-dn"
                                                 src="http://localhost:8080/biyaoweb/imgs/new/new-1b.jpg" alt="花样年华女士小白鞋"/>
                                            <div className="color-num">2色可选</div>
                                    </a>
                                </div>
                                <div className="bd">
                                    <a href=""><h3 className="name" title="花样年华女士小白鞋">花样年华女士小白鞋</h3></a>
                                    <span className="price">&yen;259 </span>
                                </div>
                            </li>
                            <li>
                                <div className="hd">
                                    <a href="" target="_blank">
                                        <img className="new-pic1 " src="http://localhost:8080/biyaoweb/imgs/new/new-1a.png" alt="花样年华女士小白鞋"/>
                                            <img style={{position:'relative', zIndex:'2'}} className="new-pic2 f-dn"
                                                 src="http://localhost:8080/biyaoweb/imgs/new/new-1b.jpg" alt="花样年华女士小白鞋"/>
                                            <div className="color-num">2色可选</div>
                                    </a>
                                </div>
                                <div className="bd">
                                    <a href=""><h3 className="name" title="花样年华女士小白鞋">花样年华女士小白鞋</h3></a>
                                    <span className="price">&yen;259 </span>
                                </div>
                            </li>
                        </ul>
                        <ul className="m-move-sub">
                            <li>
                                <div className="hd">
                                    <a href="" target="_blank">
                                        <img className="new-pic1 " src="http://localhost:8080/biyaoweb/imgs/new/new-2a.png" alt="花样年华女士小白鞋"/>
                                            <img style={{position:'relative', zIndex:'2'}} className="new-pic2 f-dn"
                                                 src="http://localhost:8080/biyaoweb/imgs/new/new-2b.jpg" alt="花样年华女士小白鞋"/>
                                                <div className="color-num">2色可选</div>
                                    </a>
                                </div>
                                <div className="bd">
                                    <a href=""><h3 className="name" title="花样年华女士小白鞋">花样年华女士小白鞋</h3></a>
                                    <span className="price">&yen;259 </span>
                                </div>
                            </li>
                            <li>
                                <div className="hd">
                                    <a href="" target="_blank">
                                        <img className="new-pic1 " src="http://localhost:8080/biyaoweb/imgs/new/new-2a.png" alt="花样年华女士小白鞋"/>
                                        <img style={{position:'relative', zIndex:'2'}} className="new-pic2 f-dn"
                                             src="http://localhost:8080/biyaoweb/imgs/new/new-2b.jpg" alt="花样年华女士小白鞋"/>
                                        <div className="color-num">2色可选</div>
                                    </a>
                                </div>
                                <div className="bd">
                                    <a href=""><h3 className="name" title="花样年华女士小白鞋">花样年华女士小白鞋</h3></a>
                                    <span className="price">&yen;259 </span>
                                </div>
                            </li>
                            <li>
                                <div className="hd">
                                    <a href="" target="_blank">
                                        <img className="new-pic1 " src="http://localhost:8080/biyaoweb/imgs/new/new-2a.png" alt="花样年华女士小白鞋"/>
                                        <img style={{position:'relative', zIndex:'2'}} className="new-pic2 f-dn"
                                             src="http://localhost:8080/biyaoweb/imgs/new/new-2b.jpg" alt="花样年华女士小白鞋"/>
                                        <div className="color-num">2色可选</div>
                                    </a>
                                </div>
                                <div className="bd">
                                    <a href=""><h3 className="name" title="花样年华女士小白鞋">花样年华女士小白鞋</h3></a>
                                    <span className="price">&yen;259 </span>
                                </div>
                            </li>
                            <li>
                                <div className="hd">
                                    <a href="" target="_blank">
                                        <img className="new-pic1 " src="http://localhost:8080/biyaoweb/imgs/new/new-2a.png" alt="花样年华女士小白鞋"/>
                                        <img style={{position:'relative', zIndex:'2'}} className="new-pic2 f-dn"
                                             src="http://localhost:8080/biyaoweb/imgs/new/new-2b.jpg" alt="花样年华女士小白鞋"/>
                                        <div className="color-num">2色可选</div>
                                    </a>
                                </div>
                                <div className="bd">
                                    <a href=""><h3 className="name" title="花样年华女士小白鞋">花样年华女士小白鞋</h3></a>
                                    <span className="price">&yen;259 </span>
                                </div>
                            </li>
                        </ul>
                        <ul className="m-move-sub">
                            <li>
                                <div className="hd">
                                    <a href="" target="_blank">
                                        <img className="new-pic1 " src="http://localhost:8080/biyaoweb/imgs/new/new-1a.png" alt="花样年华女士小白鞋"/>
                                        <img style={{position:'relative', zIndex:'2'}} className="new-pic2 f-dn"
                                             src="http://localhost:8080/biyaoweb/imgs/new/new-1b.jpg" alt="花样年华女士小白鞋"/>
                                        <div className="color-num">2色可选</div>
                                    </a>
                                </div>
                                <div className="bd">
                                    <a href=""><h3 className="name" title="花样年华女士小白鞋">花样年华女士小白鞋</h3></a>
                                    <span className="price">&yen;259 </span>
                                </div>
                            </li>
                            <li>
                                <div className="hd">
                                    <a href="" target="_blank">
                                        <img className="new-pic1 " src="http://localhost:8080/biyaoweb/imgs/new/new-1a.png" alt="花样年华女士小白鞋"/>
                                        <img style={{position:'relative', zIndex:'2'}} className="new-pic2 f-dn"
                                             src="http://localhost:8080/biyaoweb/imgs/new/new-1b.jpg" alt="花样年华女士小白鞋"/>
                                        <div className="color-num">2色可选</div>
                                    </a>
                                </div>
                                <div className="bd">
                                    <a href=""><h3 className="name" title="花样年华女士小白鞋">花样年华女士小白鞋</h3></a>
                                    <span className="price">&yen;259 </span>
                                </div>
                            </li>
                            <li>
                                <div className="hd">
                                    <a href="" target="_blank">
                                        <img className="new-pic1 " src="http://localhost:8080/biyaoweb/imgs/new/new-1a.png" alt="花样年华女士小白鞋"/>
                                        <img style={{position:'relative', zIndex:'2'}} className="new-pic2 f-dn"
                                             src="http://localhost:8080/biyaoweb/imgs/new/new-1b.jpg" alt="花样年华女士小白鞋"/>
                                        <div className="color-num">2色可选</div>
                                    </a>
                                </div>
                                <div className="bd">
                                    <a href=""><h3 className="name" title="花样年华女士小白鞋">花样年华女士小白鞋</h3></a>
                                    <span className="price">&yen;259 </span>
                                </div>
                            </li>
                            <li>
                                <div className="hd">
                                    <a href="" target="_blank">
                                        <img className="new-pic1 " src="http://localhost:8080/biyaoweb/imgs/new/new-1a.png" alt="花样年华女士小白鞋"/>
                                        <img style={{position:'relative', zIndex:'2'}} className="new-pic2 f-dn"
                                             src="http://localhost:8080/biyaoweb/imgs/new/new-1b.jpg" alt="花样年华女士小白鞋"/>
                                        <div className="color-num">2色可选</div>
                                    </a>
                                </div>
                                <div className="bd">
                                    <a href=""><h3 className="name" title="花样年华女士小白鞋">花样年华女士小白鞋</h3></a>
                                    <span className="price">&yen;259 </span>
                                </div>
                            </li>
                        </ul>
                        <ul className="m-move-sub">
                            <li>
                                <div className="hd">
                                    <a href="" target="_blank">
                                        <img className="new-pic1 " src="http://localhost:8080/biyaoweb/imgs/new/new-2a.png" alt="花样年华女士小白鞋"/>
                                        <img style={{position:'relative', zIndex:'2'}} className="new-pic2 f-dn"
                                             src="http://localhost:8080/biyaoweb/imgs/new/new-2b.jpg" alt="花样年华女士小白鞋"/>
                                        <div className="color-num">2色可选</div>
                                    </a>
                                </div>
                                <div className="bd">
                                    <a href=""><h3 className="name" title="花样年华女士小白鞋">花样年华女士小白鞋</h3></a>
                                    <span className="price">&yen;259 </span>
                                </div>
                            </li>
                            <li>
                                <div className="hd">
                                    <a href="" target="_blank">
                                        <img className="new-pic1 " src="http://localhost:8080/biyaoweb/imgs/new/new-2a.png" alt="花样年华女士小白鞋"/>
                                        <img style={{position:'relative', zIndex:'2'}} className="new-pic2 f-dn"
                                             src="http://localhost:8080/biyaoweb/imgs/new/new-2b.jpg" alt="花样年华女士小白鞋"/>
                                        <div className="color-num">2色可选</div>
                                    </a>
                                </div>
                                <div className="bd">
                                    <a href=""><h3 className="name" title="花样年华女士小白鞋">花样年华女士小白鞋</h3></a>
                                    <span className="price">&yen;259 </span>
                                </div>
                            </li>
                            <li>
                                <div className="hd">
                                    <a href="" target="_blank">
                                        <img className="new-pic1 " src="http://localhost:8080/biyaoweb/imgs/new/new-2a.png" alt="花样年华女士小白鞋"/>
                                        <img style={{position:'relative', zIndex:'2'}} className="new-pic2 f-dn"
                                             src="http://localhost:8080/biyaoweb/imgs/new/new-2b.jpg" alt="花样年华女士小白鞋"/>
                                        <div className="color-num">2色可选</div>
                                    </a>
                                </div>
                                <div className="bd">
                                    <a href=""><h3 className="name" title="花样年华女士小白鞋">花样年华女士小白鞋</h3></a>
                                    <span className="price">&yen;259 </span>
                                </div>
                            </li>
                            <li>
                                <div className="hd">
                                    <a href="" target="_blank">
                                        <img className="new-pic1 " src="http://localhost:8080/biyaoweb/imgs/new/new-2a.png" alt="花样年华女士小白鞋"/>
                                        <img style={{position:'relative', zIndex:'2'}} className="new-pic2 f-dn"
                                             src="http://localhost:8080/biyaoweb/imgs/new/new-2b.jpg" alt="花样年华女士小白鞋"/>
                                        <div className="color-num">2色可选</div>
                                    </a>
                                </div>
                                <div className="bd">
                                    <a href=""><h3 className="name" title="花样年华女士小白鞋">花样年华女士小白鞋</h3></a>
                                    <span className="price">&yen;259 </span>
                                </div>
                            </li>
                        </ul>
                        <ul className="m-move-sub">
                            <li>
                                <div className="hd">
                                    <a href="" target="_blank">
                                        <img className="new-pic1 " src="http://localhost:8080/biyaoweb/imgs/new/new-1a.png" alt="花样年华女士小白鞋"/>
                                        <img style={{position:'relative', zIndex:'2'}} className="new-pic2 f-dn"
                                             src="http://localhost:8080/biyaoweb/imgs/new/new-1b.jpg" alt="花样年华女士小白鞋"/>
                                        <div className="color-num">2色可选</div>
                                    </a>
                                </div>
                                <div className="bd">
                                    <a href=""><h3 className="name" title="花样年华女士小白鞋">花样年华女士小白鞋</h3></a>
                                    <span className="price">&yen;259 </span>
                                </div>
                            </li>
                            <li>
                                <div className="hd">
                                    <a href="" target="_blank">
                                        <img className="new-pic1 " src="http://localhost:8080/biyaoweb/imgs/new/new-1a.png" alt="花样年华女士小白鞋"/>
                                        <img style={{position:'relative', zIndex:'2'}} className="new-pic2 f-dn"
                                             src="http://localhost:8080/biyaoweb/imgs/new/new-1b.jpg" alt="花样年华女士小白鞋"/>
                                        <div className="color-num">2色可选</div>
                                    </a>
                                </div>
                                <div className="bd">
                                    <a href=""><h3 className="name" title="花样年华女士小白鞋">花样年华女士小白鞋</h3></a>
                                    <span className="price">&yen;259 </span>
                                </div>
                            </li>
                            <li>
                                <div className="hd">
                                    <a href="" target="_blank">
                                        <img className="new-pic1 " src="http://localhost:8080/biyaoweb/imgs/new/new-1a.png" alt="花样年华女士小白鞋"/>
                                        <img style={{position:'relative', zIndex:'2'}} className="new-pic2 f-dn"
                                             src="http://localhost:8080/biyaoweb/imgs/new/new-1b.jpg" alt="花样年华女士小白鞋"/>
                                        <div className="color-num">2色可选</div>
                                    </a>
                                </div>
                                <div className="bd">
                                    <a href=""><h3 className="name" title="花样年华女士小白鞋">花样年华女士小白鞋</h3></a>
                                    <span className="price">&yen;259 </span>
                                </div>
                            </li>
                            <li>
                                <div className="hd">
                                    <a href="" target="_blank">
                                        <img className="new-pic1 " src="http://localhost:8080/biyaoweb/imgs/new/new-1a.png" alt="花样年华女士小白鞋"/>
                                        <img style={{position:'relative', zIndex:'2'}} className="new-pic2 f-dn"
                                             src="http://localhost:8080/biyaoweb/imgs/new/new-1b.jpg" alt="花样年华女士小白鞋"/>
                                        <div className="color-num">2色可选</div>
                                    </a>
                                </div>
                                <div className="bd">
                                    <a href=""><h3 className="name" title="花样年华女士小白鞋">花样年华女士小白鞋</h3></a>
                                    <span className="price">&yen;259 </span>
                                </div>
                            </li>
                        </ul>
                        <ul className="m-move-sub">
                            <li>
                                <div className="hd">
                                    <a href="" target="_blank">
                                        <img className="new-pic1 " src="http://localhost:8080/biyaoweb/imgs/new/new-2a.png" alt="花样年华女士小白鞋"/>
                                        <img style={{position:'relative', zIndex:'2'}} className="new-pic2 f-dn"
                                             src="http://localhost:8080/biyaoweb/imgs/new/new-2b.jpg" alt="花样年华女士小白鞋"/>
                                        <div className="color-num">2色可选</div>
                                    </a>
                                </div>
                                <div className="bd">
                                    <a href=""><h3 className="name" title="花样年华女士小白鞋">花样年华女士小白鞋</h3></a>
                                    <span className="price">&yen;259 </span>
                                </div>
                            </li>
                            <li>
                                <div className="hd">
                                    <a href="" target="_blank">
                                        <img className="new-pic1 " src="http://localhost:8080/biyaoweb/imgs/new/new-2a.png" alt="花样年华女士小白鞋"/>
                                        <img style={{position:'relative', zIndex:'2'}} className="new-pic2 f-dn"
                                             src="http://localhost:8080/biyaoweb/imgs/new/new-2b.jpg" alt="花样年华女士小白鞋"/>
                                        <div className="color-num">2色可选</div>
                                    </a>
                                </div>
                                <div className="bd">
                                    <a href=""><h3 className="name" title="花样年华女士小白鞋">花样年华女士小白鞋</h3></a>
                                    <span className="price">&yen;259 </span>
                                </div>
                            </li>
                            <li>
                                <div className="hd">
                                    <a href="" target="_blank">
                                        <img className="new-pic1 " src="http://localhost:8080/biyaoweb/imgs/new/new-2a.png" alt="花样年华女士小白鞋"/>
                                        <img style={{position:'relative', zIndex:'2'}} className="new-pic2 f-dn"
                                             src="http://localhost:8080/biyaoweb/imgs/new/new-2b.jpg" alt="花样年华女士小白鞋"/>
                                        <div className="color-num">2色可选</div>
                                    </a>
                                </div>
                                <div className="bd">
                                    <a href=""><h3 className="name" title="花样年华女士小白鞋">花样年华女士小白鞋</h3></a>
                                    <span className="price">&yen;259 </span>
                                </div>
                            </li>
                            <li>
                                <div className="hd">
                                    <a href="" target="_blank">
                                        <img className="new-pic1 " src="http://localhost:8080/biyaoweb/imgs/new/new-2a.png" alt="花样年华女士小白鞋"/>
                                        <img style={{position:'relative', zIndex:'2'}} className="new-pic2 f-dn"
                                             src="http://localhost:8080/biyaoweb/imgs/new/new-2b.jpg" alt="花样年华女士小白鞋"/>
                                        <div className="color-num">2色可选</div>
                                    </a>
                                </div>
                                <div className="bd">
                                    <a href=""><h3 className="name" title="花样年华女士小白鞋">花样年华女士小白鞋</h3></a>
                                    <span className="price">&yen;259 </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewProduct;