import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
   {
      name: { type: String, require: true },
      completed: { type: Boolean, default: false },
   },
   { trim: true }
);

const Task = mongoose.model('Task', taskSchema);

export default Task;
