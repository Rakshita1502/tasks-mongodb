const mongoose=require("mongoose");
const Schema=mongoose.Schema;

//create schema and model
const taskSchema=new Schema({
  description:String,
  completed:Boolean
});

const Task=mongoose.model('Task',taskSchema);
  
module.exports=Task;
