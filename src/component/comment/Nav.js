/**
 * Created by Administrator on 2019/10/16.
 */
import React from 'react'
import '../../css/comment/nav.css'
import {withRouter} from 'react-router';
import back_img from '../../images/comment/back.png'
import comment_img from '../../images/comment/short-comment.png'
import Top from '../Top'
class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state={
            num:0
        }
    }

    render(){
        return (
            <div className="nav-wrap">
                <Top/>
                <div className="nav nav-comment">
                    <div className="left">
                        <div><img src={back_img} alt="" onClick={this.toBack.bind(this)}/></div>
                        <h1>{this.state.num}条点评</h1>
                    </div>
                    <div className="right">
                        <img src={comment_img} alt=""/>
                    </div>
                </div>
            </div>
        )
    }

    toBack(){
        //返回上一页 10-18
        this.props.history.goBack();
    }

    //父传子实时更新评论数10-18
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if (nextProps.num) {
            this.setState({
                num:nextProps.num
            })
        }
    }
}

export default  withRouter(Nav)