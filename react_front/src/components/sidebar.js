import React,{Component} from "react";
import { Menu } from 'antd';
import {Link} from "react-router-dom";

export default class Sidebar extends Component{
    render() {
        let {id,mode} = this.props;
        return(
            <Menu id={id} mode={mode}>
                <Menu.Item><Link to="/index">主页</Link></Menu.Item>
                <Menu.Item><Link to="/latest">头条</Link></Menu.Item>
                <Menu.Item><Link to="/technical">科技</Link></Menu.Item>
                <Menu.Item><Link to="/military">军事</Link></Menu.Item>
                <Menu.Item><Link to="/global">国际</Link></Menu.Item>
                <Menu.Item><Link to="/joy">娱乐</Link></Menu.Item>
            </Menu>
        )
    }
}