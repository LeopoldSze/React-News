import React,{Component} from "react";
import { List, Avatar,Tag,Button,Icon } from 'antd';
import {Link} from "react-router-dom";
import axios from "axios";
import {connect} from "react-redux";

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
            {text}
    </span>
);

class News extends Component{
    constructor(props){
        super(props);
        let kind = this.props.kind;
        this.state={
            page:1
        };
        this.getMore(kind,this.state.page);
        this.getData(kind);
        console.log(kind);
    }

    // 获取分类新闻数据
    getData(kind){
        this.props.dispatch((dispatch)=>{
            axios.get(`http://localhost:3000/news/list?kind=${kind}`)
                .then(res=>{
                    //console.log("==="+JSON.stringify(res.data.data));
                    dispatch({
                        type:"NEWSLIST_UPDATE_SUCCESS",
                        data:res.data.data,
                    })
                }).catch(err=>{
                dispatch({
                    type:"NEWSLIST_UPDATE_FAIL"
                })
            })
        })
    }

    // 加载更多
    getMore(kind,page){
        this.props.dispatch((dispatch)=>{
            axios.get(`http://localhost:3000/news/more?kind=${kind}&page=${page}&limit=5`)
                .then(res=>{
                    //console.log("==="+res.data.data);
                    dispatch({
                        type:"NEWSLIST_UPDATE_SUCCESS",
                        data:res.data.data
                    })
                }).catch(error=>{
                dispatch({
                    type:"NEWSLIST_UPDATE_FAIL",
                    data:""
                })
            })
        })
    }

    // 判断渲染更新
    shouldComponentUpdate(nextProps,nextState) {
        if(this.state.page !== nextState.page){
            this.getMore(nextProps.kind,nextState.page);
            return false;
        }
        if(nextProps.kind !== this.props.kind){
            this.setState({
                page:1
            });
            this.getMore(nextProps.kind,this.state.page);
            return false;
        }
        return true;
    }

    render() {
        let {data,loading} = this.props;
        return (
            <div>
                <List
                    loading={loading}
                    itemLayout="vertical"
                    size="large"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={[
                                <IconText type="star-o" text="156" />,
                                <IconText type="like-o" text="156" />,
                                <IconText type="message" text="2" />,
                            ]}
                            extra={
                                <img
                                    width={150}
                                    alt="logo"
                                    src={item.pic}
                                />
                            }
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.pic} />}
                                title={<Link to={"/detail/"+item.id} >{item.title}</Link>}
                                description={<Tag color="#f50">{item.src}</Tag>}
                            />
                            {item.content.substring(0,50)}...
                        </List.Item>
                    )}
                />
                {/*加载更多*/}
                <Button type="primary"
                        loading={this.state.loading}
                        id="load"
                        size="large"
                        onClick={() => {
                            setTimeout(() => {
                                this.setState({
                                    loading: true
                                }, () => {
                                    setTimeout(()=>{
                                        this.setState({
                                            loading: false
                                        })
                                    },400,)
                                })
                            },500)
                            }
                }>
                    加载更多
                </Button>
            </div>
        );
    }
}

export default connect(state=>state.newsList)(News);