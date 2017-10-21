import React from 'react';

class Side extends React.Component{
    constructor(props){
        super(props);
        this.upStyle = {visibility:'hidden'};
        this.state = {
            style: this.upStyle
        };
        this.onScrollBack = this.onScrollBack.bind(this);
    }

    onScrollBack(){
        this.intervalHandler = setInterval(()=>{
           let winS = document.documentElement.scrollTop;
           let speed = Math.ceil(winS / 6);
           if(winS === 0){
               this.upStyle = {visibility:'hidden'};
               this.setState({style:this.upStyle});
               clearInterval(this.intervalHandler);
           }
            document.documentElement.scrollTop = winS - speed;
        },30)
    }

    componentDidMount(){
        window.addEventListener('scroll', ()=>{
            let winS = document.documentElement.scrollTop;
            let winH = document.documentElement.clientHeight;
            if(winS > winH) {
                this.upStyle = {visibility:'visible'};
                this.setState({style:this.upStyle});
            }else if (winS === 0){
                this.upStyle = {visibility:'hidden'};
                this.setState({style:this.upStyle});
            }
        })
    }

    render(){
        return(
            <div className="t-side" style={this.state.style}>
                <ul className="right-bar-fixed" >
                    <li className="rightBar-code">
                        <div className="rightBar-code-show">
                            <span></span>
                            <dl>
                                <dt></dt>
                                <dd>扫码下载必要App</dd>
                            </dl>
                        </div>
                    </li>
                    <li className="rightBar-top"  onClick={this.onScrollBack}></li>
                </ul>
            </div>
        )
    }

}

export default Side;