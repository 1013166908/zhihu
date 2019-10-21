/**
 * Created by Administrator on 2019/10/20.
 */
import React from 'react'
import '../css/index/side.css'
import {withRouter} from 'react-router';
import img_head from '../images/index/head.jpg'
import img_side_00 from '../images/index/side_00.png'
import img_side_01 from '../images/index/side_01.png'
import img_index from '../images/index/index.png'
class Side extends React.Component{
    render(){
        return (
            <div className="side" id="side">
                <header>
                    <div className="top">
                        <div><img src={img_head} alt=""/></div>
                        <p>小遥姐姐</p>
                    </div>
                    <div className="bottom">
                        <button onClick={this.toColl.bind(this)}>
                            <img src={img_side_00} alt=""/><span>我的收藏</span>
                        </button>
                        <button>
                            <img src={img_side_01} alt=""/><span>离线下载</span>
                        </button>
                    </div>
                </header>
                <div className="content">
                    <div onClick={this.toContent.bind(this)}>
                        <img src={img_index} alt=""/><p>首页</p>
                    </div>
                </div>
            </div>
        )
    }


    //去往收藏 10-21
    toColl(){
        this.props.history.push('/collections');
        //允许滚动 10-21
        document.body.style.overflow="visible";
    }

    //回到首页 10-20
    toContent(){
        //回到首页 10-21
        this.props.history.push('/index')

        //允许滚动 10-20
        document.body.style.overflow="visible";

        //遮罩层消失 10-20
        let mask=document.getElementById("mask");
        mask.style.display="none";

        //侧导航滑回 10-20
        let side =document.getElementById("side");
        let step=913;
        let timer=setInterval(function () {
            step-=40;
            if(step<0) {
                step=0;
                clearInterval(timer);
            }
            side.style.left=step/100-9.13+"rem";
        },1);
    }
}

export default  withRouter(Side)