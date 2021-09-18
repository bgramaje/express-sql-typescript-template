import express, { Request, Response } from 'express';
import morgan, { format } from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import compression from 'compression';

import {
    HOME
} from './config/routes'

import morganMiddleware from './api/middlewares/morgan.middleware';

const app = express();

//app.use(morgan('dev'));
app.use(morganMiddleware);
app.use(helmet());
app.use(cors());
app.use(cookieParser());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(HOME, (req: Request, res: Response) => {
    res.json({
        message: 'HOME - 🌈👋🌎'
    });
})


export default app;
