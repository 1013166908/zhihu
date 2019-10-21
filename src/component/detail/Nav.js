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
import img_3_1 from '../../images/detail/003-1.png'
import img_4 from '../../images/detail/004.png'
import img_5 from '../../images/detail/005.png'
class Nav extends React.Component{
    state={
        num:Store.state.commentNum,
        id:""
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
                        <li onClick={this.changeCollected.bind(this,this.state.id)}><div><img id="collected-star" src={this.isCollected(this.state.id).img} alt=""/></div></li>
                        <li onClick={this.toComment.bind(this)}><div><img src={img_4} alt=""/></div><span>{this.state.num}</span></li>
                        <li><div><img src={img_5} alt=""/></div><span>25</span></li>
                    </ul>
                </div>
            </div>
        )
    }

    //返回 10-18
    toIndex(){
        this.props.history.goBack();
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

    //判断是否被收藏 10-21
    isCollected(id){
        if(Store.state.collectionsList.indexOf(id)>=0){ //已经被收藏
            return {
                flag:true,
                img:img_3_1
            }
        }
        else{ //未被收藏
            return  {
                flag:false,
                img:img_3
            }
        }
    }

    //收藏&&取消收藏 10-21
    changeCollected(id){
        let img=document.getElementById("collected-star");
        if(this.isCollected(id).flag){ //已经收藏
            let index=Store.state.collectionsList.indexOf(id);
            let arr=Store.state.collectionsList;
            arr.splice(index,1);
            Store.dispatcher.dispatch({
                actionType:'changeCollections',
                actionParams:arr
            })
            img.src=img_3;
        }
        else{ //未收藏
            let arr=Store.state.collectionsList;
            arr.push(id);
            Store.dispatcher.dispatch({
                actionType:'changeCollections',
                actionParams:arr
            })
            img.src=img_3_1;
        }
    }

    componentDidMount(){
        axios.get("/api/4/story/"+this.props.location.pathname.split('/')[2]+"/short-comments").then((res)=>{
            this.setState({
                num:res.data.comments.length,
                id:this.props.location.pathname.split('/')[2]
            })
        })
    }
}

export default  withRouter(Nav)