import React,{Component} from "react";
import GoogleLogIn from "./googleLogin";
import { Form, Icon, Input, Modal  } from 'antd';
import {connect} from "react-redux";
import axios from "axios";
import {Link} from "react-router-dom";
import { message } from 'antd';

const success1 = () => {
    message.success('登录成功!');
};
const success2 = () => {
    message.success('退出成功!');
};
const error = () => {
    message.error('输入错误，请重试！');
};
const error2 = () => {
    message.error('您已登录！');
};

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
          visible: false,
          confirmLoading: false,
            name:"",
            pass:"",
            avatar:"",
            display:"none",
        };
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
                        //alert(res.data.message);
                        success1();
                    }else{
                        dispatch({
                            type:"USER_LOGIN_FAIL"
                        });
                        //alert("输入错误，请重试！");
                        error();
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
        this.getUserData();
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
        return(
            <div>
                <div>
                    <span onClick={()=>{
                        if(data){
                            error2();
                        }else{
                            this.showModal();
                        }
                    } } id="loginBtn">
                        {data?<Link to="/index"><img src={data.avatar} id="userPhoto" alt=""/>
                            <span>{data.name}</span>
                        </Link>:"请登录"}
                    </span>
                    <span onClick={()=>{
                        sessionStorage.removeItem("userInfo");
                        setTimeout(() => {
                            window.location.reload();
                        }, 500,success2());
                    }}
                          id="exit"
                    >
                        {data?"退出登录":""}
                    </span>
                </div>

                <Modal
                    title="账号登录"
                    visible={this.state.visible}
                    okText="确定"
                    cancelText="取消"
                    onOk={this.handleOk}
                    confirmLoading={this.state.confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <Form>
                        <p>
                            <Input
                                prefix={<Icon type="user" />}
                                placeholder="Username"
                                value={this.state.name}
                                onChange={(e)=>{
                                    this.setState({
                                        name:e.target.value
                                    });

                                }}
                            />
                        </p>
                        <p>
                            <Input
                                prefix={<Icon type="lock" />}
                                type="password"
                                placeholder="Password"
                                value={this.state.pass}
                                onChange={(e)=>{
                                    this.setState({
                                        pass:e.target.value
                                    });
                                }}
                            />
                        </p>
                        <p onClick={()=>{
                            this.setState({
                                display:this.state.display==="none"?"block":"none"
                            })
                        }}>使用其他账号登录</p>
                        <p className="otherLogin" style={{display:this.state.display}}>
                            <GoogleLogIn handleOk={this.handleOk}/>
                        </p>
                    </Form>
                </Modal>
            </div>
        )
    }
}

export default connect(state=>state.userData)(Login);
