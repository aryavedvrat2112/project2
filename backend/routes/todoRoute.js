const express=require("express");
const { createTodo, getTodo,deleteTodo,deleteAllTodos } = require("../controllers/todoController");
const router=express.Router();

router.route("/todo/create").post(createTodo);
router.route("/todos").get(getTodo).delete(deleteAllTodos);
router.route("/todos/:id").delete(deleteTodo);

module.exports=router;