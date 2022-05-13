import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TodoModel = new Schema({
  title: String,
  description: String,
  completiontime: String,
  done:Boolean,
});
export default mongoose.model('Todo',TodoModel);