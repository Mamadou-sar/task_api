import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connectdb.js';
import taskRouter from './routes/task_route.js';

const app = express();

dotenv.config();
const port = process.env.PORT || 5500;

// middleware
app.use(express.json());

// Routes
app.use('/api/v1', taskRouter);

//start app
const startServer = async () => {
   try {
      await connectDB();
      await app.listen(port, () =>
         console.log(`Server is running on port ${port}`)
      );
   } catch (error) {
      console.log(error);
   }
};

startServer();
