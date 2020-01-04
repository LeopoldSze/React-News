import React,{Component} from "react";
import {Route,Switch,Redirect} from "react-router-dom";
import Home from "../views/home";
import Latest from "../views/latest";
import Technical from "../views/technical";
import Military from "../views/military";
import Global from "../views/global";
import Joy from "../views/joy";
import Detail from "../views/detail";
import Login from "../components/login";
import Share from "../components/share";

export default class RouteIndex extends Component{
    render() {
        return(
            <Switch>
                <Route path="/" render={()=><Redirect to="/index/"/>} exact />
                <Route path="/index/" component={Home} />
                <Route path="/latest/" component={Latest} />
                <Route path="/technical/" component={Technical} />
                <Route path="/military/" component={Military} />
                <Route path="/global/" component={Global} />
                <Route path="/joy/" component={Joy} />
                <Route path="/detail/:id" component={Detail} />
                <Route path="/login/" component={Login} />
                <Route path="/share/" component={Share} />
            </Switch>
        )
    }
}