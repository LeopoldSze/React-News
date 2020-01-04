import React,{Component} from "react";
import { Carousel } from 'antd';
import {connect} from "react-redux";
import axios from "axios";

class Slide extends Component{
    constructor(props){
        super(props);
        this.getData();
    }

    // 获取幻灯片数据
    getData(){
        this.props.dispatch((dispatch)=>{
            axios.get(`http://localhost:3000/news/slide`)
                .then(res=>{
                    console.log("==="+JSON.stringify(res.data.data));
                    dispatch({
                        type:"SLIDELIST_UPDATE_SUCCESS",
                        data:res.data.data,
                    })
                }).catch(err=>{
                dispatch({
                    type:"SLIDELIST_UPDATE_FAIL"
                })
            })
        })
    }
    render() {
        let {data} = this.props;
        return (
            <div className="slide">
                <Carousel autoplay effect="fade">
                    {
                       data.map((item,idx)=>{
                           return(
                                <div key={idx}>
                                    <img src={item.img} alt=""/>
                                    <h3 className="simInfo">{item.descp}</h3>
                                </div>
                           )
                       })
                    }
                </Carousel>
            </div>
        );
    }
}

export default connect(state=>state.slideList)(Slide)
