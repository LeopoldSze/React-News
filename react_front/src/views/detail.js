import React,{Component} from "react";
import { Layout,Row,Col,Icon,Dropdown,Button,Tag} from 'antd';
import Logo from "../components/logo";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import {connect} from "react-redux";
import axios from "axios";
import Share from "../components/share";

class Detail extends Component{
    constructor(props){
        super(props);
        let id = this.props.match.params.id;
        console.log("id",id);
        this.getData(id);
    }
    getData(id){
        this.props.dispatch((dispatch)=>{
            dispatch({
                type:"NEWSDETAIL_UPDATE"
            });
            axios.get(`http://localhost:3000/news/one?id=${id}`)
                .then(res=>{
                    //console.log("==="+res.data.data);
                    dispatch({
                        type:"NEWSDETAIL_UPDATE_SUCCESS",
                        data:res.data.data[0],
                    })
                }).catch(err=>{
                dispatch({
                    type:"NEWSDETAIL_UPDATE_FAIL"
                })
            })
        })
    }
    render() {
        let {data} = this.props;
        return(
            <div>
                {/*头部logo*/}
                <Layout>
                    <Layout.Header>
                        <Logo />
                    </Layout.Header>
                </Layout>

                {/*侧边栏*/}
                <Layout>
                    <Layout.Sider>
                        <Row>
                            <Col md={24} xs={0} id="sideBar">
                                <Sidebar id="links" mode="vertical"/>
                            </Col>
                            <Col md={0} xs={24} className="xsPane">
                                <Dropdown overlay={<Sidebar id="xsNav" mode="vertical"/>}
                                          trigger={["click","touchend"]}>
                                    <Button><Icon type="bars" /></Button>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Layout.Sider>
                </Layout>

                {/*主体*/}
                <Layout>
                    <Layout.Content>
                        <Row>
                            <Col md={2} xs={2}>
                            </Col>
                            <Col md={20} xs={20} className="detailPart" style={{ paddingLeft: "5%"}}>
                                <h2 className="newsTitle">{data.title}</h2>
                                <div className="firstPar">
                                    {data.content.substring(0,100)}
                                </div>
                                <img src={data.pic} alt=""/>
                                <div className="secondPar">
                                    {data.content.substring(100)}
                                </div>
                                <div className="init">来源:<Tag color="#f50">{data.src}</Tag><span>{data.time}</span></div>
                                <p>原文链接：&nbsp;&nbsp;<a href={data.weburl} target="_blank">{data.weburl}</a></p>
                                <Share />
                            </Col>
                            <Col md={2} xs={2}>
                            </Col>
                        </Row>

                    </Layout.Content>
                </Layout>

                {/*底部*/}
                <Layout>
                    <Layout.Footer>
                        <Row>
                            <Col md={24} xs={24}>
                                <Footer className="clearFix"/>
                            </Col>
                        </Row>
                    </Layout.Footer>
                </Layout>
            </div>
        )
    }
}

export default connect(state=>state.newsDetail)(Detail)