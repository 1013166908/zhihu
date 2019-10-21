/**
 * Created by Administrator on 2019/10/16.
 */
import React from 'react'
import '../../css/index/index.css'
import Nav from './Nav'
import Lunbo from './Lunbo'
import News from './News'
import Mask from './Mask'
import Side from '../Side'

class Index extends React.Component{
    state={
        div:"",
        height:0,
        // date:0, //当前新闻日期
        newsArr:[""]
    }
    render(){
        return (
            <div className="index-wrap" id="index-wrap">
                <Mask/>
                <Side/>
                <Nav/>
                <div className="main-content" id="main-content" onScrollCapture={this.addNews.bind(this)}>
                    <Lunbo/>
                    {
                        this.state.newsArr.map((value,index)=>{
                            return <News key={index} num={index}/>
                        })
                    }
                    <p>下拉获取更多</p>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.setState({
            //内容部分 10-18
            div:document.getElementById("main-content"),
            //屏幕高度 10-19
            height:window.screen.height
        })
    }


    componentWillMount(){
        let top=0;
        window.addEventListener('scroll', () =>
            {
                //滚动距离大于屏幕高度 10-18
                top=(document.body.scrollTop || document.documentElement.scrollTop)
                // console.log("滚动距离："+top);
                // console.log(("内容高" + this.state.div.offsetHeight));
                // console.log(("屏幕高" + this.state.height));
                if(top>=this.state.div.offsetHeight-this.state.height){
                    let arr=this.state.newsArr;
                    arr.push("");
                    this.setState({
                        newsArr:arr
                    })
                    document.body.scrollTop=top;
                    document.documentElement.scrollTop=top;
                }
            }
        )
    }

    addNews(date){
        console.log(date);
        // this.setState({
        //     newsArr:this.state.newsArr.push()
        // })
    }

}

export default  Index