/**
 * Created by Administrator on 2019/10/15.
 */
/**
 * Created by Administrator on 2019/10/15.
 */
import React from 'react'
import '../../css/index/nav.css'
import Top from '../Top'
import img_1 from '../../images/index/index_1.png'
import img_2 from '../../images/index/index_2.png'
import img_3 from '../../images/index/index_3.png'
class Nav extends React.Component{
    render(){
        return (
            <div className="nav-wrap">
                <Top/>
                <div className="nav nav-index">
                    <div className="left">
                        <div onClick={this.openNav.bind(this)}><img src={img_1} alt=""/>
                        </div>
                        <h2>首页</h2>
                    </div>
                    <div className="right">
                        <div href="#"><img src={img_2} alt=""/></div>
                        <div href="#"><img src={img_3} alt=""/></div>
                    </div>
                </div>
            </div>
        )
    }

    openNav(){
        //禁止滚动
        document.body.style.overflow="hidden";

        //出现遮罩层 10-20
        let mask=document.getElementById("mask");
        mask.style.display="block";

        //滑出侧导航 10-20
        let side =document.getElementById("side");
        let step=0;
        let timer=setInterval(function () {
            step+=40;
            if(step>913) {
                step=913;
                clearInterval(timer);
            }
            side.style.left=step/100-9.13+"rem";
        },1);
    }
}

export default  Nav