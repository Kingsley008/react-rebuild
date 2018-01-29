import React from 'react';

class Category extends React.Component{
/*    constructor(){
        super()
    }*/

    render(){
        return(
            <div className="catalog m-dn" style={{marginTop:'-6px'}}>
            <ul>
            <li className="nav-main"><p><a href="/biyaoweb/category?category=男装">男装</a> <span>/</span><a href="">定制</a></p>
            <ul className="nav-sub-p">
            <li className="nav-sub-li">
            <div className="left-sub"><a href="/biyaoweb/category?category=男装">男士上装</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="/biyaoweb/category?category=男装">POLO衫</a>
            <a href="/biyaoweb/category?category=男装">男T恤</a>
            <a href="/biyaoweb/category?category=男装">西服/套装</a>
            <a href="/biyaoweb/category?category=男装">卫衣/针织衫</a>
            </div>
            </li>
            <li className="nav-sub">
            <div className="left-sub"><a href="/biyaoweb/category?category=男装">男士下装</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="/biyaoweb/category?category=男装">牛仔裤</a>
            <a href="/biyaoweb/category?category=男装">休闲裤</a>
            <a href="/biyaoweb/category?category=男装">西裤</a>
            <a href="/biyaoweb/category?category=男装">短裤</a>
            </div>
            </li>
            </ul>
            </li>
            <li className="nav-main"><p><a href="/biyaoweb/category?category=女装">女装</a><span>/</span><a href="">定制</a></p>
            <ul className="nav-sub-p">
            <li className="nav-sub-li">
            <div className="left-sub"><a href="/biyaoweb/category?category=女装">女士上衣</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">POLO衫</a>
            <a href="">女T恤</a>
            <a href="">西服/套装</a>
            <a href="">卫衣/针织衫</a>
            </div>
            </li>
            <li className="nav-sub">
            <div className="left-sub"><a href="">女士下装</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">牛仔裤</a>
            <a href="">休闲裤</a>
            <a href="">西裤</a>
            <a href="">短裤</a>
            </div>
            </li>

            </ul>
            </li>
            <li className="nav-main"><p><a href="">鞋靴</a><span>/</span><a href="">运动</a></p>
            <ul className="nav-sub-p">
            <li className="nav-sub-li">
            <div className="left-sub"><a href="">男士上装3</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">POLO衫</a>
            <a href="">男T恤</a>
            <a href="">西服/套装</a>
            <a href="">卫衣/针织衫</a>
            </div>
            </li>
            <li className="nav-sub">
            <div className="left-sub"><a href="">男士下装</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">牛仔裤</a>
            <a href="">休闲裤</a>
            <a href="">西裤</a>
            <a href="">短裤</a>
            </div>
            </li>
            <li className="nav-sub">
            <div className="left-sub"><a href="">男士上装</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">POLO衫</a>
            <a href="">男T恤</a>
            <a href="">西服/套装</a>
            <a href="">卫衣/针织衫</a>
            </div>
            </li>
            <li className="nav-sub">
            <div className="left-sub"><a href="">男士下装</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">牛仔裤</a>
            <a href="">休闲裤</a>
            <a href="">西裤</a>
            <a href="">短裤</a>
            </div>
            </li>
            <li className="nav-sub">
            <div className="left-sub"><a href="">男士下装</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">牛仔裤</a>
            <a href="">休闲裤</a>
            <a href="">西裤</a>
            <a href="">短裤</a>
            </div>
            </li>
            </ul>
            </li>
            <li className="nav-main"><p><a href="">皮具</a><span>/</span><a href="">出行</a></p>
            <ul className="nav-sub-p">
            <li className="nav-sub-li">
            <div className="left-sub"><a href="">男士上装3</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">POLO衫</a>
            <a href="">男T恤</a>
            <a href="">西服/套装</a>
            <a href="">卫衣/针织衫</a>
            </div>
            </li>
            <li className="nav-sub">
            <div className="left-sub"><a href="">男士下装</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">牛仔裤</a>
            <a href="">休闲裤</a>
            <a href="">西裤</a>
            <a href="">短裤</a>
            </div>
            </li>
            <li className="nav-sub">
            <div className="left-sub"><a href="">男士上装</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">POLO衫</a>
            <a href="">男T恤</a>
            <a href="">西服/套装</a>
            <a href="">卫衣/针织衫</a>
            </div>
            </li>
            <li className="nav-sub">
            <div className="left-sub"><a href="">男士下装</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">牛仔裤</a>
            <a href="">休闲裤</a>
            <a href="">西裤</a>
            <a href="">短裤</a>
            </div>
            </li>
            <li className="nav-sub">
            <div className="left-sub"><a href="">男士下装</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">牛仔裤</a>
            <a href="">休闲裤</a>
            <a href="">西裤</a>
            <a href="">短裤</a>
            </div>
            </li>
            </ul>
            </li>
            <li className="nav-main"><p><a href="">居家</a><span>/</span><a href="">婴童</a></p>
            <ul className="nav-sub-p">
            <li className="nav-sub-li">
            <div className="left-sub"><a href="">男士上装3</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">POLO衫</a>
            <a href="">男T恤</a>
            <a href="">西服/套装</a>
            <a href="">卫衣/针织衫</a>
            </div>
            </li>
            <li className="nav-sub">
            <div className="left-sub"><a href="">男士下装</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">牛仔裤</a>
            <a href="">休闲裤</a>
            <a href="">西裤</a>
            <a href="">短裤</a>
            </div>
            </li>
            <li className="nav-sub">
            <div className="left-sub"><a href="">男士上装</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">POLO衫</a>
            <a href="">男T恤</a>
            <a href="">西服/套装</a>
            <a href="">卫衣/针织衫</a>
            </div>
            </li>
            <li className="nav-sub">
            <div className="left-sub"><a href="">男士下装</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">牛仔裤</a>
            <a href="">休闲裤</a>
            <a href="">西裤</a>
            <a href="">短裤</a>
            </div>
            </li>
            <li className="nav-sub">
            <div className="left-sub"><a href="">男士下装</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">牛仔裤</a>
            <a href="">休闲裤</a>
            <a href="">西裤</a>
            <a href="">短裤</a>
            </div>
            </li>
            </ul>
            </li>
            <li className="nav-main"><p><a href="">美妆</a><span>/</span><a href="">个护</a></p>
            <ul className="nav-sub-p">
            <li className="nav-sub-li">
            <div className="left-sub"><a href="">男士上装3</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">POLO衫</a>
            <a href="">男T恤</a>
            <a href="">西服/套装</a>
            <a href="">卫衣/针织衫</a>
            </div>
            </li>
            <li className="nav-sub">
            <div className="left-sub"><a href="">男士下装</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">牛仔裤</a>
            <a href="">休闲裤</a>
            <a href="">西裤</a>
            <a href="">短裤</a>
            </div>
            </li>
            <li className="nav-sub">
            <div className="left-sub"><a href="">男士上装</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">POLO衫</a>
            <a href="">男T恤</a>
            <a href="">西服/套装</a>
            <a href="">卫衣/针织衫</a>
            </div>
            </li>
            <li className="nav-sub">
            <div className="left-sub"><a href="">男士下装</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">牛仔裤</a>
            <a href="">休闲裤</a>
            <a href="">西裤</a>
            <a href="">短裤</a>
            </div>
            </li>
            <li className="nav-sub">
            <div className="left-sub"><a href="">男士下装</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">牛仔裤</a>
            <a href="">休闲裤</a>
            <a href="">西裤</a>
            <a href="">短裤</a>
            </div>
            </li>
            </ul>
            </li>
            <li className="nav-main"><p><a href="">厨具</a><span>/</span><a href="">家电</a><span>/</span><a
        href="">数码</a></p>
            <ul className="nav-sub-p">
            <li className="nav-sub-li">
            <div className="left-sub"><a href="">男士上装3</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">POLO衫</a>
            <a href="">男T恤</a>
            <a href="">西服/套装</a>
            <a href="">卫衣/针织衫</a>
            </div>
            </li>
            <li className="nav-sub">
            <div className="left-sub"><a href="">男士下装</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">牛仔裤</a>
            <a href="">休闲裤</a>
            <a href="">西裤</a>
            <a href="">短裤</a>
            </div>
            </li>
            <li className="nav-sub">
            <div className="left-sub"><a href="">男士上装</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">POLO衫</a>
            <a href="">男T恤</a>
            <a href="">西服/套装</a>
            <a href="">卫衣/针织衫</a>
            </div>
            </li>
            <li className="nav-sub">
            <div className="left-sub"><a href="">男士下装</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">牛仔裤</a>
            <a href="">休闲裤</a>
            <a href="">西裤</a>
            <a href="">短裤</a>
            </div>
            </li>
            <li className="nav-sub">
            <div className="left-sub"><a href="">男士下装</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">牛仔裤</a>
            <a href="">休闲裤</a>
            <a href="">西裤</a>
            <a href="">短裤</a>
            </div>
            </li>
            </ul>
            </li>
            <li className="nav-main"><p><a href="">家装</a><span>/</span><a href="">家居</a><span>/</span><a
        href="">汽配</a></p>
            <ul className="nav-sub-p">
            <li className="nav-sub-li">
            <div className="left-sub"><a href="">男士上装3</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">POLO衫</a>
            <a href="">男T恤</a>
            <a href="">西服/套装</a>
            <a href="">卫衣/针织衫</a>
            </div>
            </li>
            <li className="nav-sub">
            <div className="left-sub"><a href="">男士下装</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">牛仔裤</a>
            <a href="">休闲裤</a>
            <a href="">西裤</a>
            <a href="">短裤</a>
            </div>
            </li>
            <li className="nav-sub">
            <div className="left-sub"><a href="">男士上装</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">POLO衫</a>
            <a href="">男T恤</a>
            <a href="">西服/套装</a>
            <a href="">卫衣/针织衫</a>
            </div>
            </li>
            <li className="nav-sub">
            <div className="left-sub"><a href="">男士下装</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">牛仔裤</a>
            <a href="">休闲裤</a>
            <a href="">西裤</a>
            <a href="">短裤</a>
            </div>
            </li>
            <li className="nav-sub">
            <div className="left-sub"><a href="">男士下装</a><span>&gt;</span></div>
            <div className="right-sub">
            <a href="">牛仔裤</a>
            <a href="">休闲裤</a>
            <a href="">西裤</a>
            <a href="">短裤</a>
            </div>
            </li>
            </ul>
            </li>
            </ul>
            </div>
            )
    }
}
export {Category}