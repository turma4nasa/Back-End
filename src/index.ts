import express from 'express';
import dotenv from 'dotenv';

import { DatabaseConfig } from './Database/Database';
import { routes } from './Routes';
dotenv.config();
DatabaseConfig.initialize();

const app = express();
app.use(express.json());
app.use(routes)

export { app }