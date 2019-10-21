/**
 * Created by Administrator on 2019/10/15.
 */
import {Dispatcher} from 'flux'
import EventEmitter from 'events'

class State extends EventEmitter{
    commentNum=0;
}
//创建数据
var state= new State();

//规定你要执行的任务

//实例化派发器
var dispatcher =  new Dispatcher()

//注册派发器
dispatcher.register((action)=>{
    switch(action.actionType){
        case 'changeCommentNum':
            state.commentNum=action.actionParams;
            state.emit('change')
            break;
        default:;
    }
});

export default{
    state,dispatcher
}