import React from 'react';

export const Footer = ()=>{
    return(
        <div className="ft">
            <div className="ft-wrap f-center">
                <div className="special-serve">
                    <ul className="f-cb">
                        <li className="serve-make">直连一线制造</li>
                        <li className="serve-shipping">全品类包邮</li>
                        <li className="serve-pay">平台先行赔付</li>
                        <li className="serve-refund">7天无忧退货</li>
                    </ul>
                </div>
                <div className="ft-content f-cb">
                    <ul className="f-cb">
                        <li>
                            <h3>帮助中心</h3>
                            <a href="">平台政策</a><a href="">商家入驻</a></li>
                        <li>
                            <h3>关注必要</h3>
                            <a href="">新浪微博</a><a href="">官方微信</a></li>
                        <li>
                            <h3>关于必要</h3>
                            <a href="">了解必要</a><a href="">加入必要</a><a href="">联系我们</a></li>
                        <li>
                            <h3>下载必要app</h3>
                            <img src="http://localhost:8080/biyaoweb/imgs/app.png"/></li>
                    </ul>
                    <dl>
                        <dt>服务监督邮箱</dt>
                        <dd>service@biyao.com</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
};