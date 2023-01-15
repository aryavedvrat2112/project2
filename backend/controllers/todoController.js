const Todo=require("../models/todoModel");
const asyncError=require("../middleware/asyncError");
exports.createTodo=asyncError(async(req,res,next)=>{
    const todo=await Todo.create(req.body);
    res.status(201).json({
        success:true,
        todo
    });
})
exports.getTodo=async (req,res)=>{
    const todos=await Todo.find();
    res.status(200).json({
        success:true,
        todos
    })
}
exports.deleteTodo=async(req,res)=>{
    const todo=await Todo.findById(req.params.id);
    if(todo){
         todo.remove()
    }
    res.status(200).json({
        success:true
    });
}
exports.deleteAllTodos=async (req,res)=>{
    const todos=await Todo.deleteMany();
    res.status(200).json({
        success:true
    })
}