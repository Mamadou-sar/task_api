import express from 'express';
import {
   getAllTask,
   getTask,
   createTask,
   updateTask,
   deleteTask,
} from '../controllers/task_controller.js';

const router = express.Router();

router.route('/tasks').get(getAllTask).post(createTask);
router.route('/tasks/:id').get(getTask).put(updateTask).delete(deleteTask);

export default router;
