/**
 * Created by Administrator on 2019/10/21.
 */
import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router';
import '../../css/collection/news.css'
class News extends React.Component{
    constructor(props){
        super(props);
        this.state={
            news:{}
        }
    }
    render(){
        return (
            <li className="collections-list" onClick={this.toDetail.bind(this)}>
                <h4>{this.state.news.title}</h4>
                <img src={this.state.news.images} alt=""/>
            </li>
        )
    }

    componentDidMount(){
        // console.log(this.props.id);
        let url="/api/4/news/"+this.props.id
        axios.get(url).then((res)=>{
            // console.log(res.data);
            this.setState({
                news:res.data
            })
        })
    }

    //去往详情页 10-21
    toDetail(){
        this.props.history.push('/detail/'+this.props.id);
    }
}

export default withRouter(News);