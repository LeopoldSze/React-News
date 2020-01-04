import {combineReducers} from "redux";
import userData from "./userData";
import newsList from "./newsList";
import newsDetail from "./newsDetail";
import slideList from "./slideList";
import kindsList from "./kindsList";

let reducer = combineReducers({
    userData,
    newsList,
    newsDetail,
    slideList,
    kindsList
});
export default reducer;