/**
 * Created by Administrator on 2019/10/16.
 */
import React from 'react'
import Store from '../../store/index'
import '../../css/detail/nav.css'
import axios from 'axios'
import {withRouter} from 'react-router';
import Top from '../Top'
import Mask from './Mask'
import img_1 from '../../images/detail/001.png'
import img_2 from '../../images/detail/002.png'
import img_3 from '../../images/detail/003.png'
import img_4 from '../../images/detail/004.png'
import img_5 from '../../images/detail/005.png'
class Nav extends React.Component{
    state={
        num:Store.state.commentNum
    }
    render(){
        return (
            <div className="nav-wrap">
                <Mask/>
                <Top/>
                <div className="nav nav-detail">
                    <div onClick={this.toIndex.bind(this)}>
                        <img src={img_1} alt=""/>
                    </div>
                    <ul>
                        <li onClick={this.toShare.bind(this)}><div><img src={img_2} alt=""/></div></li>
                        <li><div><img src={img_3} alt=""/></div></li>
                        <li onClick={this.toComment.bind(this)}><div><img src={img_4} alt=""/></div><span>{this.state.num}</span></li>
                        <li><div><img src={img_5} alt=""/></div><span>25</span></li>
                    </ul>
                </div>
            </div>
        )
    }

    //返回 10-18
    toIndex(){
        this.props.history.push('/index')
    }

    //评论页 10-18
    toComment(){
        this.props.history.push('/comment/'+this.props.location.pathname.split('/')[2])
    }

    //分享 10-20
    toShare(){
        //禁止滚动
        document.body.style.overflow="hidden";

        //出现遮罩层 10-20
        let mask=document.getElementById("detail-mask");
        mask.style.display="block";

        //出现分享页 10-20
        let share = document.getElementById("detail-share");
        share.style.display="block"
    }
    componentDidMount(){
        axios.get("/api/4/story/"+this.props.location.pathname.split('/')[2]+"/short-comments").then((res)=>{
            this.setState({
                num:res.data.comments.length,
            })
        })
    }
}

export default  withRouter(Nav)