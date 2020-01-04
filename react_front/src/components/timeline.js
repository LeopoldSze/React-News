import React,{Component} from "react";
import { Timeline } from 'antd';
import {Link} from "react-router-dom";

export default class TimeLine extends Component{
    render() {
        return(
            <Timeline>
                <h2>最热新闻</h2>
                <Timeline.Item color="green">
                    <Link to="/index">停摆的青岛地铁1号线：
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;施工方举报牵出幕后分包利益链
                    </Link>
                </Timeline.Item>
                <Timeline.Item color="green">
                    <Link to="/index">打老师案被告人递交上诉状申请改判</Link>
                    <br/>
                </Timeline.Item>
                <Timeline.Item color="red">
                    <Link to="/index">京都动画惨烈纵火案：
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;通往楼顶的门打不开，19人死在楼梯上
                    </Link>
                </Timeline.Item>
                <Timeline.Item>
                    <Link to="/index">章莹颖案终局：
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;凶手被判终身监禁，全力寻找受害者遗体
                    </Link>
                </Timeline.Item>
                <Timeline.Item color="red">
                    <Link to="/index">湖北1025公里江河堤防超设预防：
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;近万人上堤值守
                    </Link>
                </Timeline.Item>
            </Timeline>
        )
    }
}