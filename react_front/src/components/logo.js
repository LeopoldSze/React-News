import React,{Component} from "react";
import { Row,Col,Icon} from 'antd';
import {Link} from "react-router-dom";
import Login from "../components/login";

export default class Logo extends Component{
    render() {
        return(
            <Row className="custom-icons-list">
                <Col md={2} xs={2}>
                </Col>
                <Col md={8} xs={8}>
                    <Icon type="alert" theme="twoTone" twoToneColor="#3E9BB9" />
                    <Link to="/index" className="logo">News Alliance</Link>
                </Col>
                <Col md={9} xs={9}>
                </Col>
                <Col md={5} xs={5} id="loginArea">
                    <Login />
                </Col>
            </Row>
        )
    }
}