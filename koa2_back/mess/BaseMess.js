class BaseMess {
    constructor(data,message){
        if(typeof (data) === "string"){
            this.message = data;
            data = null;
            message = null;
        }
        if(data){
            this.data = data;
        }
        if(message){
            this.message = message;
        }
    }
}
class SuccessMsg extends BaseMess{
    constructor(data,message){
        super(data,message);
        this.errorNo = 0;
    }
}

class ErrorMsg extends BaseMess{
    constructor(data,messgae){
        super(data,messgae);
        this.errorNo = -1;
    }
}



module.exports = {SuccessMsg,ErrorMsg};