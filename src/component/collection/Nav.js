/**
 * Created by Administrator on 2019/10/21.
 */
import React from 'react'
import Store from '../../store/index'
import '../../css/collection/nav.css'
import img_1 from '../../images/index/index_1.png'
import axios from 'axios'
import {withRouter} from 'react-router';
import Top from '../Top'

class Nav extends React.Component{
    // state={
    //     num:Store.state.commentNum
    // }
    render(){
        return (
            <div className="nav-wrap">
                <Top/>
                <div className="nav collections-nav">
                    <img src={img_1} alt="" onClick={this.openNav.bind(this)} /><span>{Store.state.collectionsList.length}条收藏</span>
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

export default  withRouter(Nav)