/**
 * Created by Administrator on 2019/10/21.
 */
import React from 'react'
import Store from '../../store/index'
import {withRouter} from 'react-router';
import '../../css/collection/collections.css'
import Mask from '../index/Mask'
import Side from '../Side'
import Nav from './Nav'
import News from './News'
class Collections extends React.Component{
    state={
        list:[]
    }
    render(){
        return (
            <div className="collections-wrap">
                <Mask/>
                <Side/>
                <Nav/>
                <div className="collections-content">
                    <ul>
                        {
                            Store.state.collectionsList.map((value,index)=>{
                                return <News id={value} key={index}/>;
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }

    componentDidMount(){
        // console.log(Store.state.collectionsList);
        // let arr=Store.state.collectionsList;
        // console.log(arr);
        // this.setState({
        //     list:arr
        // })
        // console.log(this.state.list);
    }
}

export default  withRouter(Collections)