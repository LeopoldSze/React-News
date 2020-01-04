import React,{Component} from "react";
import { message } from 'antd';

const success = () => {
    message.success('退出成功!');
};

export default class Logout extends Component{
    constructor(){
        super();
    }
    // 判断登录
    isLogin(){
        let data = JSON.parse(sessionStorage.getItem("userInfo"));
        if(data){
            this.setState({
                display:"block"
            })
        }else{
            this.setState({
                display:"none"
            })
        }
    }
    render() {

        return (
            <span onClick={()=>{
                    sessionStorage.removeItem("userInfo");
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000,success());
                }}
                  id="exit"
                  style={{display:this.state.display}}
            >
                退出登录
            </span>
        );
    }
}