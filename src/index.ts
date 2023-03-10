import express from 'express';
import cors from 'cors';
import expressSession from 'express-session';

// env file
import dotenv from 'dotenv';
dotenv.config({ path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : `.env` });

//connect database
import { connectMongoDB } from './db/database';
connectMongoDB();

//routes
import authRoutes from './routes/authRoute';
import locationRoutes from './routes/locationRoute';

declare module 'express-session' {
    interface SessionData {
        [key: string]: any;
    }
}

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(
    expressSession({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);
app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: 'Hello World', data: [] });
});

app.use('/auth', authRoutes);
app.use('/toilet', locationRoutes);

app.listen(PORT, () => {
    console.log('server is running port', PORT);
    console.log(`.env.${process.env.NODE_ENV}`);
});
