import React,{Component} from "react";
import { Card} from 'antd';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import axios from "axios";

class Kinds extends Component{
    constructor(props){
        super(props);
        this.getData();
    }

    // 获取分类数据
    getData(){
        this.props.dispatch((dispatch)=>{
            axios.get(`http://localhost:3000/news/kinds`)
                .then(res=>{
                    //console.log("==="+JSON.stringify(res.data.data));
                    dispatch({
                        type:"KINDSLIST_UPDATE_SUCCESS",
                        data:res.data.data,
                    })
                }).catch(err=>{
                dispatch({
                    type:"KINDSLIST_UPDATE_FAIL"
                })
            })
        })
    }
    render() {
        let {data} = this.props;
        return (
            <div className="kinds">
                <h1>精彩内容</h1>
                <p>我们拥有多个分类的精彩内容，足以满足您的各类需求。</p>
                <div>
                    {
                        data.map((item,idx)=>{
                            return(
                                <Link to={"/"+item.url} className="links" key={idx}>
                                    <Card
                                        hoverable
                                        cover={<img alt="example" src={item.img} />}
                                        type="inner"
                                    >
                                        <span>{item.descp}</span>
                                    </Card>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default connect(state=>state.kindsList)(Kinds);