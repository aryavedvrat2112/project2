require('dotenv').config();
const app=require("./app");
const PORT=process.env.PORT || 5000;

// Uncaught Error Handling

process.on("uncaughtException",(err)=>{
    console.log(`Error : ${err.message}`);
    console.log(`Shutting down the server due to uncaught exception`);
    process.exit(1);
})

const server=app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`)
})
 

process.on('unhandledRejection',(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting down the server due to unhandled promise rejectins`)

    server.close(()=>{
        process.exit(1);
    })
})