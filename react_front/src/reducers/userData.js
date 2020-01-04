function userData(state={
    data:{
        name:"",
        pass:"",
        avatar:""
    },
    loading:true
},action) {
    switch (action.type) {
        case "USER_LOGIN":
            return {
                data:state.data,
                loading:true
            };
        case "USER_LOGIN_SUCCESS":
            return {
                data:action.data,
                loading:false
            };
        case "USER_LOGIN_FAIL":
            return {
                data:{
                    name:"",
                    pass:"",
                    avatar:""
                },
                loading:true
            };
        default:
            return state;
    }
}

export default userData;