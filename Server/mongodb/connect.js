import mongoose from 'mongoose';

const connectDB = (uri) => {
  mongoose.set('strictQuery', true);


  mongoose.connect(uri)
    .then(() => console.log('connected to mongo'))
    .catch((err) => {
      console.error('failed to connect with mongo');
      console.error(err);
    });
};

export default connectDB;