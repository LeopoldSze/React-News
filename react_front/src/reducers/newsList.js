function newsList(state={
    data:[],
    loading:true
},action) {
    switch (action.type) {
        case "NEWSLIST_UPDATE_SUCCESS":
            return {
                data:action.data,
                loading: false
            };
        case "NEWSLIST_UPDATE_FAIL":
            return {
                data:[],
                loading:true
            };
        default:
            return state;
    }
}

export default newsList;