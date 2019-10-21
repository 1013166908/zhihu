/**
 * Created by Administrator on 2019/10/15.
 */
import React from 'react'
import '../../css/index/news.css'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
class News extends React.Component{
    constructor(props){
        super(props);
        this.state={
            news:[],
            title:"今日新闻"
        }
    }
    render(){
        return (
            <div>
                <dl>
                    <dt><h3>{this.state.title}</h3></dt>

                        {
                            this.state.news.map((value,index)=>{
                                return <dd key={index}><NavLink activeClassName='nav_active' to={"/detail/"+value.id} ><h4>{value.title}</h4><div><img src={value.images[0]} alt=""/></div></NavLink></dd>
                            })
                        }

                </dl>
            </div>
        )
    }

    //格式化时间 10-16
    changeDate(date){
        let year=date.getFullYear();
        let month=date.getMonth()+1;
        let day=date.getDate();
        if(month<10) month="0"+month;
        if(day<10) day="0"+day;
        return ""+year+month+day;
    }
    componentDidMount(){
        console.log("props:"+this.props.num);
        let date = new Date();
        let url="/api/4/news/latest"
        if(this.props.num>0){
            date=new Date(date.getTime()-this.props.num*86400000);
            let str=this.changeDate(date);
            url="/api/4/news/before/"+str;
            this.setState({
                title:date.toLocaleDateString()
            })
        }
        axios.get(url).then((res)=>{
            this.setState({
                news:res.data.stories,
            })
        })
    }

}

export default  News