function slideList(state={
    data:[],
    loading:true
},action) {
    switch (action.type) {
        case "SLIDELIST_UPDATE_SUCCESS":
            return {
                data:action.data,
                loading: false
            };
        case "SLIDELIST_UPDATE_FAIL":
            return {
                data:[],
                loading:true
            };
        default:
            return state;
    }
}

export default slideList;