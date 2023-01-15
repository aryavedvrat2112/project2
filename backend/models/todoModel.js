const mongoose=require("mongoose");
const todoSchema=new mongoose.Schema({
    todo:{
        type:String,
        required:[true,"Please Enter Todo."]
    },
    date:{
        type:String,
        date:new Date().toLocaleString()
    },
});
module.exports=mongoose.model("todos",todoSchema);