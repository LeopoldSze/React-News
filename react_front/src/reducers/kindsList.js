function kindsList(state={
    data:[],
    loading:true
},action) {
    switch (action.type) {
        case "KINDSLIST_UPDATE_SUCCESS":
            return {
                data:action.data,
                loading: false
            };
        case "KINDSLIST_UPDATE_FAIL":
            return {
                data:[],
                loading:true
            };
        default:
            return state;
    }
}

export default kindsList;