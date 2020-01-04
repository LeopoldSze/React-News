import React,{Component} from "react";
import { GoogleLogin } from 'react-google-login';
import { message } from 'antd';
import axios from "axios";

let info = {};
const responseGoogle = (response) => {
    info.name = response.profileObj.name;
    info.email = response.profileObj.email;
    info.avatar = response.profileObj.imageUrl;
    info.provider_id = response.profileObj.googleId;
    info.provider = response.tokenObj.idpId;
    info.token = response.tokenObj.access_token;
    sessionStorage.setItem("userInfo",JSON.stringify(info));
    axios.post(`http://localhost:3000/user/register`,
        {   name:info.name,
                 email:info.email,
                avatar:info.avatar,
                provider_id:info.provider_id,
                provider:info.provider,
                token:info.token})
        .then(res=>{
            if(res.data.errorNo === 0){
                success();
            }else{
                error();
            }
        }).catch(err=>{
        error()
    });
    console.log("info:",info);
    console.log("response:",response);
    return info;
};
const success = () => {
    message.success('登录成功!');
};
const error = () => {
    message.error('登录失败，请重试！');
};

export default class GoogleLogIn extends Component{
    render() {
        return (
            <GoogleLogin
                clientId="711484115689-frp0p92s2741d1b9nre24sc7ajr16vfj.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={error}
                cookiePolicy={'single_host_origin'}
            />
        );
    }
}