function newsDetail(state={
    data:{
        channel:"",
        title:"",
        time:"",
        src:"",
        pic:"",
        content:"",
        weburl:""
    },
    loading:true
},action) {
    switch (action.type) {
        case "NEWSDETAIL_UPDATE":
            return {
                data:state.data,
                loading:true
            };
        case "NEWSDETAIL_UPDATE_SUCCESS":
            return {
                data:action.data,
                loading:false
            };
        case "NEWSDETAIL_UPDATE_FAIL":
            return {
                data:{
                    channel:"",
                    title:"",
                    time:"",
                    src:"",
                    pic:"",
                    content:"",
                    weburl:""
                },
                loading:true
            };
        default:
            return state;
    }
}

export default newsDetail;