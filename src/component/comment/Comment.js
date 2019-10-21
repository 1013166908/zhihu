/**
 * Created by Administrator on 2019/10/16.
 */
import React from 'react'
import Nav from './Nav'
import Store from '../../store/index'
import '../../css/comment/comment.css'
import img_zan from '../../images/comment/zan.png'
import to_top from '../../images/comment/to-top.png'
import axios from 'axios'
class Comment extends React.Component{
    state={
        comments:[],
        num:0
    }
    render(){
        return (
            <div className="comment-wrap">
                <Nav num={this.state.comments.length} />
                <div className="main-content">
                    <header><div className="left">{this.state.comments.length}条评论</div><div className="right"><img
                        src={to_top} alt=""/></div></header>
                    <ul>
                        {
                            this.state.comments.map((value,index)=>{
                                return <li key={index}>
                                    <div className="left">
                                        <div><img src={value.avatar} alt=""/></div>
                                    </div>
                                    <div className="right">
                                        <header>
                                            <h2>{value.author}</h2>
                                            <div>
                                                <img src={img_zan} alt="" /><span>{value.likes}</span>
                                            </div>
                                        </header>
                                        <p>{value.content}</p>
                                        <footer>{this.changeTime(value.time)}</footer>
                                    </div>
                                    </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }


    //格式化时间 10-16
    changeTime(time){
        let date=new Date(time);
        let month=date.getMonth()+1;
        if(month<10) month="0"+month;
        let day=date.getDate();
        if(date<10) day="0"+day;
        let hour=date.getHours();
        let min=date.getMinutes();
        return month+"-"+day+" "+hour+":"+min;
    }

    componentDidMount(){
        //获取评论 10-16
        axios.get("/api/4/story/"+this.props.location.pathname.split('/')[2]+"/short-comments").then((res)=>{
            this.setState({
                comments:res.data.comments,
            })
            //更改存储的评论数10-18
            Store.dispatcher.dispatch({
                actionType:'changeCommentNum',
                actionParams:res.data.comments.length
            })
        })
    }
}

export default  Comment