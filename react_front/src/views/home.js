import React,{Component} from "react";
import { Layout,Row,Col,Icon,Dropdown,Button} from 'antd';
import Logo from "../components/logo";
import Sidebar from "../components/sidebar";
import Slide from "../components/slide";
import TimeLine from "../components/timeline";
import Welcome from "../components/welcome";
import Kinds from "../components/kinds";
import Footer from "../components/footer";

export default class Home extends Component{
    render() {
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
                        {/*轮播图+时间树*/}
                        <Row className="slide">
                            <Col md={2} xs={2}>
                            </Col>
                            <Col md={15} xs={15}>
                                <Slide />
                            </Col>
                            <Col md={1} xs={1}>
                            </Col>
                            <Col md={4} xs={4}>
                                <TimeLine />
                            </Col>
                            <Col md={2} xs={2}>
                            </Col>
                        </Row>

                        {/*我们*/}
                        <Row>
                            <Col md={2} xs={2}>
                            </Col>
                            <Col md={20} xs={20}>
                                <Welcome className="clearFix"/>
                            </Col>
                            <Col md={2} xs={2}>
                            </Col>
                        </Row>

                        {/*分类*/}
                        <Row>
                            <Col md={2} xs={2}>
                            </Col>
                            <Col md={20} xs={20}>
                                <Kinds className="clearFix"/>
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