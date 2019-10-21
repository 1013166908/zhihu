/**
 * Created by Administrator on 2019/10/21.
 */
import React from 'react'
import '../../css/mask.css'
class Mask extends React.Component{
    render(){
        return (
            <div className="mask" id="detail-mask" onClick={this.toContent.bind(this)}>
            </div>
        )
    }

    toContent(){
        //允许滚动 10-20
        document.body.style.overflow="visible";

        //遮罩层消失 10-20
        let mask=document.getElementById("detail-mask");
        mask.style.display="none";

        //分享页消失 10-20
        let share = document.getElementById("detail-share");
        share.style.display="none"
    }
}

export default  Mask