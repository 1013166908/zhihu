/**
 * Created by Administrator on 2019/10/16.
 */
import React from 'react'
import Nav from './Nav'
import '../../css/detail/detail.css'
import share_img from '../../images/detail/share.png'
import axios from 'axios'
class Detail extends React.Component{
    state={
        detail:{},
        article:""
    }
    render(){
        return (
            <div className="detail-wrap">
                <Nav/>
                <div className="share" id="detail-share">
                    <img src={share_img} alt=""/>
                </div>
                <div className="main-content">
                    <div className="background">
                        <img src={this.state.detail.image} alt=""/>
                        <div className="title">
                            <h1>{this.state.detail.title}</h1>
                            <p>图片：{this.state.detail.image_source}</p>
                        </div>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: this.state.detail.body}}></div>
                </div>
            </div>
        )
    }


    componentDidMount(){
        axios.get("/api/4/news/"+this.props.location.pathname.split('/')[2]).then((res)=>{
            this.setState({
                detail:res.data,
            })
            console.log(this.state);

        })
    }
}

export default  Detail