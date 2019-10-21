/**
 * Created by Administrator on 2019/10/15.
 */
import React from 'react'
import Index from '../component/index/Index'
import Detail from '../component/detail/Detail'
import Comment from '../component/comment/Comment'
import YY from '../component/left-nav/YY'
import {Route,Switch,Redirect} from 'react-router-dom'

const Router = ()=>{
    return(
        <div>
            <Switch>
                <Route path='/index' component={Index}></Route>
                <Route path='/detail/*' component={Detail}></Route>
                <Route path='/comment/*' component={Comment}></Route>
                <Route path='/yy' component={YY}></Route>
                {/*<Route path='/test' component={Test}></Route>*/}
                {/*<Redirect to="/index"></Redirect>*/}
            </Switch>
        </div>
    )
}
export default Router
