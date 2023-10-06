import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'


import { DatabaseConfig } from './Database/Database';
import { routes } from './Routes';
dotenv.config();
DatabaseConfig.initialize();

const app = express();
app.use(cors({ origin: '*' })) 
app.use(express.static('photos'));
app.use(express.json());
app.use(routes)

export { app }