const mongoose=require("mongoose");
const connectDatabase=async()=>{
    await mongoose.connect("mongodb+srv://prince12345:vedvrat12345@cluster0.yaswpvu.mongodb.net");
}
module.exports=connectDatabase;