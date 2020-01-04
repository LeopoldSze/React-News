import React,{Component} from "react";
import { Modal,Icon} from 'antd';
import axios from "axios";
import { message } from 'antd';

const error = () => {
    message.error('您还未登录，请先登录！');
};

export default class Share extends Component{
    constructor(){
        super();
        this.state={
            visible: false,
            confirmLoading: false,
        }
    }
    // 弹出登录框
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    // 获取用户信息
    getUserData(){
        this.props.dispatch((dispatch)=>{
            dispatch({
                type:"USER_LOGIN"
            });
            axios.post(`http://localhost:3000/user/login`,{name:this.state.name})
                .then(res=>{
                    //console.log(this.state.pass+","+res.data.data[0].pass);
                    if(res.data.errorNo === 0 && res.data.data[0].pass === this.state.pass){
                        dispatch({
                            type:"USER_LOGIN_SUCCESS",
                            data:res.data.data[0]
                        });
                        sessionStorage.setItem("userInfo",JSON.stringify(res.data.data[0]));
                        alert(res.data.message);
                    }else{
                        dispatch({
                            type:"USER_LOGIN_FAIL"
                        });
                        alert("输入错误，请重试！");
                    }
                }).catch(err=>{
                dispatch({
                    type:"USER_LOGIN_FAIL",
                });
            })
        });
    }
    // 确定点击
    handleOk = () => {
        this.setState({
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    };
    // 取消点击
    handleCancel = () => {
        //console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    };
    render() {
        let data = JSON.parse(sessionStorage.getItem("userInfo"));
        return (
            <div>分享到：
                <span className="icons-list">
                    <Icon type="weibo" onClick={this.showModal}/>
                    <Icon type="twitter" onClick={()=>{
                        var twTitle = '输入标题';
                        var twUrl = 'http://localhost:3001/detail/11';
                        if(data){
                            window.open('http://twitter.com/home/?status='.concat(encodeURIComponent(twTitle)).concat(' ').concat(encodeURIComponent(twUrl)))
                        }else{
                            error();
                        }
                    }}/>
                    <Icon type="google-plus" onClick={this.showModal}/>
                </span>
                <Modal
                    title="内容分享"
                    visible={this.state.visible}
                    okText="确定"
                    cancelText="取消"
                    onOk={this.handleOk}
                    confirmLoading={this.state.confirmLoading}
                    onCancel={this.handleCancel}
                >
                </Modal>
            </div>
        );
    }
}