/**
 * Created by Administrator on 2019/10/20.
 */
import React from 'react'
import '../../css/mask.css'
class Mask extends React.Component{
    render(){
        return (
            <div className="mask" id="mask" onClick={this.toContent.bind(this)}>
            </div>
        )
    }

    toContent(){
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

export default  Mask