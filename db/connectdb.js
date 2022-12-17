import mongoose from 'mongoose';

const connectDB = () => {
   return mongoose
      .connect(process.env.MONGO_DB_URI)
      .then(() => console.log('Server connected to db successfully !'));
};
mongoose.set('strictQuery', true);

export default connectDB;
