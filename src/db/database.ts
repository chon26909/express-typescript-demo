import mongoose from 'mongoose';

export const connectMongoDB = () => {
    mongoose
        .connect(process.env.MONGO_URI!)
        .then(() => {
            console.log('connected mongoDB');
        })
        .catch((error) => {
            console.log(error);
        });
};
