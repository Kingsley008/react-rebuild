import React from 'react';
import { browserHistory } from 'react-router';


const Part = ({data})=>{

    return(
            <li onClick={()=>{browserHistory.push('/product/'+ data.id)}} >
                <div className="hd">
                    <a href="" target="_blank">
                        <img className="new-pic1 " src={data.icon} alt={data.productName}  width={285} height={361}/>
                    </a>
                </div>
                <div className="bd">
                    <a href=""><h3 className="name" title={data.productName}>{data.productName}</h3></a>
                </div>
            </li>
     )
};

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
        this.fetchNewList = this.fetchNewList.bind(this);
        this.fetchNewList();
    }

    fetchNewList(){
        let self = this;
        fetch('http://localhost:8080/biyaoweb/showNewProduct',{
            method: 'GET',
            credentials: 'include',
        }).then((response) => {
            if((response.status >= 200 && response.status < 300) || response.status === 304 ){
                response.json().then(responseJSON=> {
                    let dataList = [];
                    responseJSON.newList.forEach((v)=>{
                        v.icon =  'http://localhost:8080/biyaoweb/' + v.icon;
                        dataList.push(v);
                    });

                    self.setState({
                        dataList : dataList,
                    });
                    console.log(dataList, self.state.dataList)
                })
            } else {
                throw new Error('Fail to get response with status ' + response.status);
            }
        })
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
       if(this.state.dataList == null){
           return(
               <div className="m-new f-center" style={{position:'relative'}}>
                   <h3 className="m-title">新品首发</h3>
                   <small className="m-intro">周一周四上新 , 为你寻觅世间好物</small>
                   <span className="new-prev" onClick={this.onPrevClick}></span>
                   <span className="new-next" onClick={this.onNextClick}></span>
                   <div className="m-new wrap f-cb">
                       <div className="m-move" style={Style}>
                           图片加载中...
                       </div>
                   </div>
               </div>
           )
       }else{
           let parts = [];
           this.state.dataList.forEach((v) => {
               parts.push(<Part data = {v}/>)
           });
           return(
               <div className="m-new f-center" style={{position:'relative'}}>
                   <h3 className="m-title">新品首发</h3>
                   <small className="m-intro">周一周四上新 , 为你寻觅世间好物</small>
                   <span className="new-prev" onClick={this.onPrevClick}></span>
                   <span className="new-next" onClick={this.onNextClick}></span>
                   <div className="m-new wrap f-cb">
                       <div className="m-move" style={Style}>
                           {parts}
                           {/*                        <ul className="m-move-sub" >
                            <li>
                            <div className="hd">
                                <a href="" target="_blank">
                                    <img className="new-pic1 " src="http://localhost:8080/biyaoweb/imgs/new/new-1a.png" alt="花样年华女士小白鞋"/>
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
                        </ul>*/}
                       </div>
                   </div>
               </div>
           )
       }

    }
}
export default NewProduct;